<template>
  <el-row>
    <!-- Banner -->
    <el-row class="BannerContWidth">
      <el-col :span="24">
        <el-carousel :height='BannerHeight+"px"'>
          <el-carousel-item v-for="item in BannerImg">
            <!-- <div :style="'background-image: url('+item+')'" class="BannerImgBg" > -->
              <img :src="item" alt="" ref='BannerHeight' @load="setSize" class="BannerImgBg">
              <div class="BannerTextCont">
                <img src="../assets/images/a.png" alt="">
                <div>
                  <p class="BannerTextTitle">王者荣耀</p>
                  <p class="BannerText">啥时候是水水水水护手霜</p>
                </div>
              </div>
            <!-- </div> -->
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <!-- 推荐 -->
    <el-row class="BannerContWidth ContMargin">
      <el-col :span="24">
        <el-col :span="16" :xs='24'>
          <!-- 热门游戏 -->
          <div class="TitleFont">热门游戏</div>
          <el-scrollbar>
            <div class="HotsGameCont">
              <div class="HotsGame" v-for="item in 14" :key="item">
                <img src="../assets/images/a.png" alt="">
                <p>王者荣耀</p>
              </div>
            </div>
          </el-scrollbar>
          <QRCode v-if="!IsShow" class="hidden-sm-and-up"></QRCode>
          <div class="TitleFont">发现</div>
          <div class="FindCont" v-for="item in 2" :key="item">
            <img src="../assets/images/a.png" alt="">
            <div class="FindDetailsCont">
              <div class="FindDetails">
                <img src="../assets/images/a.png" alt="">
                <div>
                  <p class="BannerTextTitle">王者荣耀</p>
                  <p class="BannerText SizeCol">啥时候是水水水水护手霜</p>
                </div>
              </div>
              <div class="ScoreNumCont">
                <p class="ScoreNum">8507人评分</p>
                <p class="Score">6.5</p>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 二维码 -->
        <el-col :md="{span: 7,offset: 1}" :sm="{span: 8,offset: 0}" class="hidden-xs-only">
          <QRCode v-if="IsShow"></QRCode>
        </el-col>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import QRCode from '@/components/QRCode'
export default {
  name: 'Home',
  components: {
    QRCode
  },
  data () {
    return {
      AllUserInfo: null,
      token: null,
      IsShow: true,
      BannerHeight: '',
      screenWidth: 0,
      BannerImg: [require('../assets/images/a.png'), require('../assets/images/a.png'), require('../assets/images/a.png')]
    }
  },
  created () {
    this.AllUserInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.token = sessionStorage.getItem('userToken')
    this.ArticleList()
    // eslint-disable-next-line no-unused-vars
    let screenWidth = document.body.clientWidth // body宽度
    let scrollWidth = window.innerWidth - document.body.clientWidth // 滚动条宽度
    window.onresize = () => {
      let screenWidth = document.body.clientWidth
      if (screenWidth + scrollWidth < 768) {
        this.IsShow = false
      } else {
        this.IsShow = true
      }
    }
  },
  mounted () {
    this.setSize()
    window.addEventListener('resize', () => {
      this.setSize()
    }, false)
  },
  methods:{
    setSize () {
      this.$nextTick(() => {
        this.BannerHeight = this.$refs.BannerHeight[0].height
      })
    },
    ArticleList () { // 获取文章列表
      this.$axios.get('http://jslwx.iask.in/lumiGame/appContent/getContentList', {
        params: {
          pageNum: 0
        }
      })
        .then((res) => {
          console.log(res)
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
.BannerContWidth{
  width: 1040px;
  display: flex;
  margin-top: 1.667rem;
  margin: 0 auto;
}
.BannerImgBg{
  width: 100%;
}
.BannerTextCont{
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 2rem 1.667rem;
  background: rgba(201, 201, 201, .5)
}
.BannerTextCont>img{
  width: 4.75rem;
  height: 4.75rem;
  margin-right: 1rem;
  border-radius: 1rem;
}
.BannerTextCont p{
  line-height: 2.333rem;
}
.BannerTextTitle{
  font-size: 1.333rem;
}
.BannerText{
  font-size: 1.167rem;
}
.ContMargin{
  margin-top: 0;
}
.TitleFont{
  font-size: 1.333rem;
  border-left: 0.5rem solid red;
  padding-left: 0.667rem;
  margin: 1.333rem 0;
}
.HotsGameCont{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 20.25rem;
  overflow: hidden;
}
.HotsGame{
  background: white;
  width: 7.5rem;
  margin: 4px 4px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.2);
}
.HotsGame>img{
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 1rem;
  margin-top: 1.2rem;
}
.HotsGame>p{
  line-height: 2.5rem;
}
.FindCont{
  width: 100%;
}
.FindCont>img{
  width: 100%;
  display: block;
}
.FindDetailsCont{
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
}
.FindDetails{
  display: flex;
  padding: 1rem 0;
  line-height: 2.333rem;
  padding-left: 0.833rem;
}
.FindDetails>img{
  width: 4.75rem;
  height: 4.75rem;
  margin-right: 1rem;
  border-radius: 1rem;
}
.SizeCol{
  color: #999;
}
.ScoreNumCont{
  text-align: right;
  padding-right: 0.833rem;
}
.ScoreNum{
  font-size: 1rem;
  color: #14B8C7;
  padding-top: 1.4rem;
}
.Score{
  padding-top: 0.4rem;
  font-size: 1.333rem;
  color: #14B8C7;
}

@media (max-width:1200px) {
  .BannerContWidth{
    width: 88%;
  }
  .BannerTextCont{
    width: 100%;
    padding: 1.5rem 1.667rem;
  }
}
@media (max-width:992px) {
  .BannerContWidth{
    width: 84%;
  }
  .BannerTextCont{
    width: 100%;
    padding: 1rem 1.667rem;
  }
}
@media (max-width:768px) {
  .BannerContWidth{
    width: 82%;
  }
}
@media (max-width:576px) {
  .BannerContWidth{
    width: 90%;
  }
  .HotsGameCont{
    display: -webkit-box;
    overflow: initial;
  }
  .BannerTextCont{
    padding: 0.5rem 1.677rem;
  }
  .BannerTextCont>img{
    width: 3.74rem;
    height: 3.75rem;
  }
  .BannerTextCont p{
    font-size: 14px;
    line-height: 1.8rem;
  }
}
</style>
