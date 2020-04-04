<template>
  <div>
    <el-dialog
        :title="LoginTitle"
        :visible.sync="visible"
        width="356px"
        @close="$emit('update:Loginshow', false)"
        :show="Loginshow"
        :lock-scroll="false">
        <!-- 登入 -->
        <div v-if="LoginGo">
          <div class="DisplayFlex">
            <span>账号：</span>
            <el-input v-model="LoginEmail" placeholder="请输入账号"></el-input>
          </div>
          <div class="DisplayFlex">
            <span>密码：</span>
            <el-input v-model="LoginPassWord" type='password' placeholder="请输入密码"></el-input>
          </div>
          <div class="TipsText">
            <span>{{ErrorTips}}</span>
          </div>
          <div class="DisplayFlex"><el-button type="danger" @click="Login()">登入</el-button></div>
          <div class="LoginPassWord">
            <span class="CursorPointer" @click="RegisterGoBtn('zc')">注册</span>
            <span class="CursorPointer" @click="RegisterGoBtn('wjmm')">忘记密码</span>
          </div>
        </div>
         <!-- 注册发送验证码 -->
        <div v-if="RegisterGo">
          <div class="DisplayFlex">
            <span>账号：</span>
            <el-input v-model="RegisterCode" placeholder="请输入电子邮件地址"></el-input>
          </div>
          <div class="TipsText">
            <span>{{ErrorTips}}</span>
          </div>
          <div class="DisplayFlex"><el-button type="danger" @click="RegisterCodeBtn()">{{RegisterClassBtnText}}</el-button></div>
          <div class="LoginPassWord">
            <span class="CursorPointer" @click="LoginGoBtn()">登入</span>
            <span class="CursorPointer" @click="RegisterGoBtn(LoginTitle === '忘记密码'? 'zc' : 'wjmm')">{{LoginTitle === '忘记密码'? '注册' : '忘记密码'}}</span>
          </div>
        </div>
         <!-- 验证邮箱 -->
         <div v-if="RegisterCodeGo">
          <div class="DisplayFlex">
            <div class="RegisterCodeText">请输入四位验证码</div>
            <div class="RegisterEmailText">验证码已发送至 406093584@qq.com</div>
            <div class="code-input-main">
              <div class="code-input-main-item" v-for="(item, int) in 4" :key='int' :class="int === 0 ||  int == code.length || int < code.length ? 'code-input-main-item-border' : ''">{{code[int]}}</div>
              <el-input class="code-input-input" ref='CodeInputs' maxlength="4" v-model="code"  type="tel"></el-input>
            </div>
            <div class="RegisterEmailText" :class="second == '重新发送' ? 'CursorPointer' : ''" @click="second == '重新发送' ? ResendBtn() : false">{{second}}</div>
          </div>
          <div class="TipsText">
            <span>{{ErrorTips}}</span>
          </div>
          <div class="DisplayFlex NextCodeTop">
            <el-button type="danger" @click='RegisterGoBtn("zc")'>上一步</el-button>
            <el-button type="success" @click="SetPassWordBtn()">下一步</el-button>
          </div>
        </div>
        <!-- 注册设置密码 -->
         <div v-if="SetPassWordGo">
          <div class="DisplayFlex">
            <div class="RegisterCodeText">请设置登入密码</div>
            <div class="RegisterEmailText">密码为6至9位字母、数字组合</div>
            <div class="SetPassWordCont">
              <el-input type='password' v-model="SetPassWord" placeholder="登入密码"></el-input>
              <el-input type='password'  v-model="SetEndPassWord" placeholder="重复登入密码"></el-input>
            </div>
          </div>
          <div class="TipsText">
            <span>{{ErrorTips}}</span>
          </div>
          <div class="DisplayFlex">
            <el-button class="NextCodeTop" type="success" @click="SetUpSuccessBtn()">确认</el-button>
          </div>
          <div class="LoginPassWord">
            <span class="CursorPointer" @click="RegisterGoBtn('zc')">注册</span>
          </div>
        </div>
        <!-- 设置密码成功 -->
        <div v-if="SetUpSuccessGo">
          <div class="DisplayFlex SetUpSuccessIcon">
            <span class="el-icon-circle-check"></span>
            <div>{{SetSuccessText === 'wjmm' ? '已发送重置密码邮件，请根据提示操作' : '设置登入密码成功'}}</div>
          </div>
          <div class="DisplayFlex">
            <el-button class="NextCodeTop" type="success" @click="LoginGoBtn()">前往登入</el-button>
          </div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
// import qs from 'qs'
export default {
  name: 'login',
  props: {
    Loginshow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: this.Loginshow,
      LoginTitle: '登入',
      LoginGo: true, // 登入
      RegisterGo: false, // 注册/忘记密码
      SetPassWordGo: false, // 设置密码
      RegisterCodeGo: false, // 输入验证码
      SetUpSuccessGo: false, // 设置密码成功
      RegisterClassBtnText: '', // 注册/忘记密码文本
      SetSuccessText: '',
      ErrorTips: '', // 错误提示
      code: '', // 验证码
      LoginEmail: '', // 账号
      LoginPassWord: '', // 登入密码
      SetPassWord: '', // 设置密码
      SetEndPassWord: '', // 确认密码
      interval: null, // 定时器
      second: '60秒后可重新发送', // 验证码重新发送倒计时
      RegisterCode: '', // 注册发送验证码input
      captchaFlowNo: null // 验证码流水号

    }
  },
  watch: {
    Loginshow () {
      this.visible = this.Loginshow
    }
  },
  methods: {
    RegisterCodeBtn () { // 注册邮箱发送验证码
      // eslint-disable-next-line no-useless-escape
      let EmailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ // 邮箱正则
      if (!EmailReg.test(this.RegisterCode)) {
        this.ErrorTips = '请输入正确的电子邮件'
        return
      }
      let url
      let data
      if (this.LoginTitle === '注册') {
        url = this.apiUrl.API.VerificationCode
        data = {
          email: this.RegisterCode,
          type: 'REG'
        }
      } else {
        url = this.apiUrl.API.ForgetPwd
        data = {
          email: this.RegisterCode
        }
      }
      this.$axios.post(url, data)
        .then((res) => {
          if (res.data.resCode === 'C502570000000') {
            if (this.LoginTitle === '注册') { // 注册
              this.captchaFlowNo = res.data.captchaFlowNo // 验证码流水号
              this.RegisterCodeGoBtn()
              this.CodeChangFouce()
            } else { // 忘记密码
              this.SetSuccessText = 'wjmm'
              this.LogInShow(false, false, false, false, true)
            }
          } else {
            this.ErrorTips = res.data.resMsg
          }
        })
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          newFunction(error)
        })
    },
    SetPassWordBtn () { // 注册设置密码弹出框显示
      this.$axios.post(this.apiUrl.API.InspectVerificationCode, {
        captchaCode: this.code,
        captchaFlowNo: this.captchaFlowNo
      })
        .then((res) => {
          if (res.data.resCode === 'C502570000000') {
            this.LoginTitle = '设置密码'
            this.LogInShow(false, false, false, true, false)
            this.ErrorTips = '' // 错误信息清空
          } else {
            this.ErrorTips = res.data.resMsg
          }
        })
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          newFunction(error)
        })
    },
    SetUpSuccessBtn () { // 设置密码成功弹出框显示
      let PassWordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,9}$/ // 6-9位数字字母混合正则验证
      if (!PassWordReg.test(this.SetPassWord)) {
        this.ErrorTips = '请输入正确格式密码'
        return
      }
      if (this.SetPassWord !== this.SetEndPassWord) {
        this.ErrorTips = '密码输入不一致'
        return
      }
      this.$axios.post(this.apiUrl.API.RegisterReg, {
        email: this.RegisterCode,
        captchaFlowNo: this.captchaFlowNo,
        loginPwd: this.SetPassWord,
        captchaCode: this.code
      })
        .then((res) => {
          if (res.data.resCode === 'C502570000000') {
            this.LoginTitle = '设置成功'
            this.LogInShow(false, false, false, false, true)
          }
        })
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          newFunction(error)
        })
    },
    Login () { // 登入
      if (!this.LoginEmail || !this.LoginPassWord) {
        this.ErrorTips = '请输入账号密码'
        return
      }
      this.$axios.post(this.apiUrl.API.Login, {
        email: this.LoginEmail,
        loginPwd: this.LoginPassWord,
        terminalType: 'APP_GAME_SHOP'
      })
        .then((res) => {
          if (res.data.resCode === 'C502570000000') {
            sessionStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
            sessionStorage.setItem('userToken', res.data.userToken)
            this.$store.state.count = res.data.userInfo
            this.visible = false
          } else {
            this.ErrorTips = res.data.resMsg
          }
        })
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          newFunction(error)
        })
    },
    LogInShow (LoginGo, RegisterGo, RegisterCodeGo, SetPassWordGo, SetUpSuccessGo) {
      this.LoginGo = LoginGo // 登入模态框显示
      this.RegisterGo = RegisterGo // 注册/忘记密码模态框显示
      this.RegisterCodeGo = RegisterCodeGo // 输入验证码模态框显示
      this.SetPassWordGo = SetPassWordGo // 设置密码模态框显示
      this.SetUpSuccessGo = SetUpSuccessGo // 设置密码成功模态框显示
      this.ErrorTips = '' // 错误信息清空
      this.LoginEmail = '' // 清空账号
      this.LoginPassWord = '' // 清空密码
      this.SetPassWord = '' // 清空设置密码
      this.SetEndPassWord = '' // 清空确认密码
    },
    LoginGoBtn () { // 登入弹出框显示
      this.LoginTitle = '登入'
      this.LogInShow(true, false, false, false, false)
    },
    RegisterGoBtn (RegisterClass) { // 注册弹出框显示
      this.RegisterCode = ''
      this.LogInShow(false, true, false, false, false)
      if (RegisterClass === 'zc') { // 注册
        this.LoginTitle = '注册'
        this.RegisterClassBtnText = '电子邮件验证和注册'
        clearInterval(this.interval)
        this.second = '60秒后可重新发送'
      } else { // 忘记密码
        this.LoginTitle = '忘记密码'
        this.RegisterClassBtnText = '发送重置密码邮件'
      }
    },
    RegisterCodeGoBtn () { // 验证码弹出框显示
      this.LoginTitle = '验证码'
      this.LogInShow(false, false, true, false, false)
      this.CountDown()
      this.code = '' // 验证码输入框清空
    },
    CountDown () { // 验证码倒计时
      // eslint-disable-next-line no-unused-vars
      let second = 60
      // eslint-disable-next-line no-unused-vars
      this.interval = setInterval(() => {
        second--
        this.second = second + '秒后可重新发送'
        if (second === 0) {
          clearInterval(this.interval)
          this.second = '重新发送'
        }
      }, 1000)
    },
    ResendBtn () { // 重新发送验证码
      this.second = '60秒后可重新发送'
      this.CountDown()
    },
    CodeChangFouce () { // 验证码自动聚焦到input
      this.$nextTick(() => {
        this.$refs.CodeInputs.focus()
      })
    }
  }
}
</script>

<style scoped>
.DisplayFlex{
  text-align: center;
  margin-bottom: 15px;
}
.el-input{
  width: auto;
}
.el-button{
  padding: 8px 40px;
}
.LoginPassWord{
  text-align: right;
}
.RegisterCodeText{
  text-align: left;
  font-size: 18px;
  padding-left: 32px;
}
.RegisterEmailText{
  text-align: left;
  font-size: 14px;
  padding-left: 32px;
  color: #999;
  line-height: 30px;
  letter-spacing: 1;
}
.code-input-input {
  width: 100%;
  height: 52px;
  position: absolute;
  outline: none;
  opacity: 0;
}
.code-input-main {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 22px;
  margin-top: 20px;
}
.code-input-main-item {
  width: 50px;
  height: 50px;
  opacity: 0.8;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 22px;
  line-height: 50px;
}
.code-input-main-item-border{
  border: 1px solid blue;
}
.NextCodeTop{
  margin-top: 10px;
}
.CursorPointer{
  cursor: pointer;
}
.SetPassWordCont{
  text-align: left;
  padding-left: 32px;
}
.SetPassWordCont>.el-input{
  margin-top: 15px;
  width: 80%;
}
.SetUpSuccessIcon>span{
  font-size: 100px;
  color: green;
}
.SetUpSuccessIcon>div{
  font-size: 18px;
  margin-top: 10px;
}
.TipsText{
  color: red;
  text-align: center;
  margin-bottom: 10px;
  height: 20px;
}
</style>
