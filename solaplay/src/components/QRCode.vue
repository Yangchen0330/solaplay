<template>
  <el-row class='MarginCont'>
    <el-col :span="24">
      <div class="CodeCont hidden-xs-only">
        <el-col :span="9">
          <img class="QRCode" src="../assets/images/a.png" alt="">
        </el-col>
        <el-col :span="16" :offset="1">
          <p class="FindGame">TapTap 发现好游戏</p>
          <p class="LoginTitle">登入关注我们</p>
          <div class="LoginCont">
            <div v-for="item in 5" :key="item"><img src="../assets/images/a.png" alt=""></div>
          </div>
        </el-col>
      </div>

      <div>
        <div class="RechargeCont">
          <div class="TitleFont">快速充值</div>
          <div class="Recharge">更多</div>
        </div>
        <div class="LoginBgCont" v-if="!AllUserInfo">
          <el-button type="danger" @click="Loginshow = true">登入/注册</el-button>
          <p class="LoginBtnTextCont">登入后可记录充值历史，方便快速充值</p>
        </div>
        <div class="LoginBgCont" v-if="AllUserInfo">
          <div class="LoginUserInfo">
            <div class="LoginUserBold">{{AllUserInfo.email}}</div>
            <div>充值</div>
          </div>
          <div class="LoginUserBalance"></div>
        </div>
        <el-scrollbar v-if="RecentRecharge.length">
          <div class="IphoneGameCont">
            <div class="RechargeGame" v-for="(item,ind) in RecentRecharge" :key='ind'>
              <div class="RechargeGameTitle">
                <img src="../assets/images/a.png" alt="">
                <div>
                  <p class="GameBriefTitle">{{item.data.gameList.gameName}}</p>
                  <p class="GameBrief">leo</p>
                  <p class="GameBrief">服务器1</p>
                </div>
              </div>
              <div class="RechargeGameGo">></div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
    <login :Loginshow.sync="Loginshow"></login>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import login from '@/components/login'
export default {
  name: 'QRCode',
  components: {
    login
  },
  data () {
    return {
      Loginshow: false,
      AllUserInfo: '',
      token: '',
      RecentRecharge: []
    }
  },
  watch: {
    '$store.state.count' () {
      this.UserInfoLogin()
      if (this.token) {
        this.SeeQueryBal()
      }
    }
  },
  created () {
    this.UserInfoLogin()
    if (this.token) {
      this.SeeQueryBal()
      this.LastGame()
    }
  },
  methods: {
    UserInfoLogin () {
      this.AllUserInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      this.token = sessionStorage.getItem('userToken')
    },
    // 查询用户余额
    SeeQueryBal () {
      this.$axios.post(this.apiUrl.API.QueryBal, {
        userToken: this.token,
        accType: this.AllUserInfo.userType
      })
        .then((res) => {
          // console.log(res)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          newFunction(error)
        })
    },
    // 查询最近充值游戏
    LastGame () {
      this.$axios.post(this.apiUrl.API.LastGame, {
        userToken: this.token,
        terminalType: 'APP_GAME_SHOP'
      })
        .then((res) => {
          // console.log(res)
          if (res.data.resCode === 'C502570000000') {
            this.RecentRecharge = res.data.data
          }
        })
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          newFunction(error)
        })
    }
  }
}
</script>

<style scoped>
.LoginUserInfo{
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}
.LoginUserBold{
  font-size: 14px;
  font-weight: bold;
}
.LoginUserBalance{
  font-size: 16px;
  text-align: left;
  padding: 0 1rem;
  margin-top: 1rem;
}
.CodeCont{
  width: 100%;
  display: flex;
  padding-top: 1rem;
}
.QRCode{
  width: 8.167rem;
  height: 8.167rem;
  margin: 0.667rem 0;
}
.FindGame{
  font-size: 1.333rem;
  font-weight: bold;
  color: #14B9C8;
  padding-top: 0.667rem;
}
.LoginTitle{
  color: #999;
  line-height: 3.63rem;
}
.LoginCont{
  display: flex;
  justify-content: space-between;
}
.LoginCont img{
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.RechargeCont{
  display: flex;
  justify-content: space-between;
}
.TitleFont{
  font-size: 1.333rem;
  border-left: 0.5rem solid #14B9C8;
  padding-left: 0.4rem;
  margin: 1.333rem 0;
}
.Recharge{
  margin-top: 1.7rem;
  color: #14B9C8;
  padding-right: 4.167rem;
}
.RechargeGame{
  width: calc(100% - 1rem);
  margin: 0 auto;
  padding-top: 1.417rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.RechargeGameTitle{
  display: flex;
}
.RechargeGameTitle>img{
  height: 5.167rem;
  width: 5.167rem;
  border-radius: 1rem;
  margin-right: 0.833rem;
}
.RechargeGameGo{
  font-size: 2.833rem;
  padding-top: 0.5rem;
  color: #999;
  padding-right: 3.167rem;
}
.GameBriefTitle{
  font-size: 1.333rem;
}
.GameBrief{
  color: #999;
  line-height: 1.667rem;
}
.LoginBgCont{
  margin-top: 1rem;
  text-align: center;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.2);
  padding: 25px 0;
}
.el-button{
  padding: 12px 60px;
}
.LoginBtnTextCont{
  margin-top: 10px;
}
@media (max-width:1200px) {
  .FindGame{
    font-size: 1.166rem;
  }
  .LoginCont img{
    height: 2.3rem;
    width: 2.3rem;
  }
  .LoginTitle{
    line-height: 4rem;
  }
  .RechargeGameGo{
    padding-right: 2.5rem;
  }
}
@media (max-width:991px) {
  .FindGame{
    font-size: 12px;
  }
  .QRCode{
    width: 6rem;
    height: 6rem;
    margin: 0.667rem 0;
  }
  .LoginCont img{
    height: 1.7rem;
    width: 1.7rem;
  }
  .LoginTitle{
    line-height: 3rem;
  }
  .MarginCont{
    padding-left: 20px;
  }
  .RechargeGameGo{
    padding-right: 0;
  }
  .RechargeGameTitle>img{
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 0.6rem;
  }
  .GameBriefTitle{
    font-size: 12px;
  }
  .RechargeGameGo{
    font-size: 20px;
    padding-top: 1rem;
  }
  .TitleFont{
    margin-bottom: 0;
  }
  .Recharge{
    padding-right: 1rem;
  }
  .el-button{
    padding: 12px 40px;
  }
}
@media (max-width:767px) {
  .MarginCont{
    padding: 0;
  }
  .IphoneGameCont{
    display: -webkit-box;
  }
  .RechargeGameTitle{
    display: -webkit-box;
  }
  .RechargeGame{
    width: auto;
    margin: 10px 4px;
    padding-top: 0;
    padding: 10px;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.2);
    margin-right: 10px;
  }
  .RechargeGameGo{
    margin-left: 10px;
  }
}
</style>
