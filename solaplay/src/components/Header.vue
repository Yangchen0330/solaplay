<template>
  <div class="BoderWidth">
    <el-row class="HeaderContWidth">
      <el-col :span="24" class="HeaderWidth">
        <div class="ImgWidth">
          <div @click="drawer = true" class="el-icon-s-unfold hidden-sm-and-up"></div>
          <img src='../assets/images/logo.png' />
        </div>
        <div class="LoginFlex">
          <div class="NavCont hidden-xs-only">
            <div>首页</div>
            <div>全部游戏</div>
            <div>快速充值</div>
            <div>发现</div>
          </div>
          <div v-if="!AllUserInfo" class="LoginCont" @click="Loginshow = true"><img src='../assets/images/login.png' /></div>
          <div v-if="AllUserInfo">{{AllUserInfo.email}}</div>
        </div>
      </el-col>
    </el-row>
    <el-drawer
      size='50%'
      title="导航"
      :visible.sync="drawer"
      :direction="direction"
      :with-header="false">
      <div class="IphoneNavCont">
        <div class="el-icon-back" @click="drawer = false"></div>
        <div class="IphoneNavText">
            <div>首页</div>
            <div>全部游戏</div>
            <div>快速充值</div>
            <div>发现</div>
          </div>
      </div>
    </el-drawer>
    <login :Loginshow.sync="Loginshow"></login>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import login from '@/components/login'
export default {
  name: 'Header',
  components: {
    login
  },
  data () {
    return {
      AllUserInfo: '',
      token: '',
      drawer: false,
      direction: 'ltr',
      Loginshow: false
    }
  },
  watch: {
    '$store.state.count' () {
      this.UserInfoLogin()
    }
  },
  created () {
    this.UserInfoLogin()
  },
  methods: {
    UserInfoLogin () {
      this.AllUserInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      this.token = sessionStorage.getItem('userToken')
    }
  }
}
</script>

<style scoped>
.BoderWidth{
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.HeaderContWidth{
  width: 1040px;
  margin: 0 auto;
  height: 6.583rem;
  display: flex;
}
.HeaderWidth{
  margin: 0 auto;
  height: 6.583rem;
  line-height: 6.583rem;
  display: flex;
  justify-content: space-between;
}
.ImgWidth>img{
  width: calc(100% - 1.083rem);
  vertical-align: middle;
}
.NavCont{
  height: 6.583rem;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
}
.NavCont>div{
  margin: 0 20px;
}
.LoginCont{
  height: 6.583rem;
  text-align: right;
  line-height: 6.583rem;
}
.LoginCont>img{
  width: 100%;
  vertical-align: middle;
}
.LoginFlex{
  display: flex;
}
.el-icon-s-unfold{
  font-size: 3rem;
  float: left;
  height: 100%;
  line-height: 6.583rem;
  margin-right: 10px;
}
.IphoneNavText{
  color: white;
  font-size: 14px;
  text-align: center;
}
.IphoneNavText>div{
  line-height: 3rem;
}
.IphoneNavCont{
  width: 100%;
  height: 100%;
  background: #1989fa;
}
.el-icon-back{
  font-size: 30px;
  padding: 1rem;
  color: white;
}
@media (max-width:1200px) {
  .HeaderContWidth{
    width: 88%;
  }
  .ImgWidth>img{
    width: calc(90% - 1.083rem);
  }
}
@media (max-width:992px) {
  .HeaderContWidth{
    width: 84%;
  }
  .ImgWidth>img{
    width: calc(70% - 1.083rem);
  }
  .NavCont>div{
    margin: 0 10px;
  }
}
@media (max-width:768px) {
  .HeaderContWidth{
    width: 82%;
  }
  .ImgWidth>img{
    width: calc(70% - 1.083rem);
  }
}
@media (max-width:576px) {
  .HeaderContWidth{
    width: 90%;
  }
  .HeaderContWidth{
    height: 5rem;
  }
  .ImgWidth>img{
    width: calc(60% - 1.083rem);
  }
  .HeaderWidth,
  .LoginCont,
  .el-icon-s-unfold{
    height: 5rem;
    line-height: 5rem;
  }
  .el-icon-s-unfold{
    font-size: 25px;
  }
  .NavCont{
    height: 5rem;
  }
}
</style>
