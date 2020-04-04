<template>
  <div class="BoderWidth hidden-xs-only" v-if="FeetShow">
    <el-row class="HeaderContWidth">
      <el-col :span="16">
        <div class="FeetImgCont">
          <div><img src="../assets/images/a.png" alt=""></div>
          <ul>
            <li>一天一款全球精品游戏推荐，活跃的玩家交流社区</li>
            <li>只收录官方包，不联运，支持安装正版游戏购买</li>
            <li>倡导真实评分评价，排行榜来自玩家真实反馈</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="CloseBtn" @click="FeetShowBtn()"><span class="close"></span></div>
        <div class="DownloadBtn">
          <el-button>二维码下载</el-button>
          <el-button type="success">免费下载</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'Feet',
  data () {
    return {
      FeetShow: true
    }
  },
  methods: {
    FeetShowBtn () {
      this.FeetShow = false
    }
  }
}
</script>

<style scoped>
.BoderWidth{
  position: fixed;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 5.667rem;
  padding: 1.25rem 0;
  background: rgba(0, 0, 0, .8)
}
.HeaderContWidth{
  width: 1040px;
  margin: 0 auto;
  display: flex;
}
.FeetImgCont{
  display: flex;
  color: white;
}
.FeetImgCont img{
  width: 5.667rem;
  height: 5.667rem;
  border-radius: 1rem;
  margin-right: 2.5rem;
}
.FeetImgCont>ul>li{
  line-height: 1.9rem;
}
.CloseBtn{
  text-align: right;
  color: white;
}
.close {
  color: white;
  border-radius: 1rem;
  line-height: 1.667rem;
  text-align: center;
  height: 1.667rem;
  width: 1.667rem;
  font-size: 2rem;
  padding: 0.083rem;
}
.close::before {
  content: "\2715";
}
.close {
  top: 0;
  right: 0;
  position: absolute;
}
.DownloadBtn{
  position: absolute;
  bottom: 0.25rem;
  right: 0;
}
.el-button{
  width: 8.333rem;
  height: 2.917rem;
  line-height: 2.917rem;
  padding: 0;
}
@media (max-width:1200px) {
  .HeaderContWidth{
    width: 88%;
  }
}
@media (max-width:992px) {
  .HeaderContWidth{
    width: 84%;
  }
}
@media (max-width:768px) {
  .HeaderContWidth{
    width: 82%;
  }
}
@media (max-width:576px) {
  .HeaderContWidth{
    width: 90%;
  }
}
</style>
