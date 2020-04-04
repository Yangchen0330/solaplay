<template>
  <el-row class="BannerContWidth">
    <el-col :span="24">
      <el-col :span="16" :xs='24'>
        <div class="DetailsCont">
          <div class="DetailsIconCont">
            <div class="DetailsIconTextCont">
              <img src="../assets/images/a.png" alt="">
              <div><span>编辑推荐</span></div>
            </div>
            <div class="ScoreContWidth">
              <div class="ScoreCont">
                <div>
                  <p>率土之滨</p>
                  <span>厂商：网易游戏</span>
                </div>
                <div class="Score">
                  7.5
                </div>
              </div>
              <div class="FollowCont">
                <div class="FollowColorBlue">关注</div>
                <div class="FollowColor"><span>988058</span>人安装 | <span>637774</span>人关注</div>
                <div class="FollowColorBlue">更新八阵图及战争迷雾玩法</div>
              </div>
              <div class="DownLoadCont">
                <div>下载</div>
                <div>下载</div>
                <div>下载</div>
              </div>
            </div>
          </div>
          <el-row class="DetailsEvaluateCont">
            <el-col :span="8">详情</el-col>
            <el-col :span="8">评价<span>5250</span></el-col>
            <el-col :span="8">社区<span>3957</span></el-col>
          </el-row>
        </div>
        <!-- 宣传视频/截图 -->
        <div>
          <div class="TitleFont">
            <div>宣传视频/截图</div>
            <div>(<span class="TitleFontNumber"> 全部114 </span>)</div>
            <div><el-checkbox v-model="VideoChecked">视频自动播放</el-checkbox></div>
          </div>
          <el-scrollbar>
            <div class="VideoCont">
              <div v-for="item in 3" :key="item"><img src="../assets/images/a.png" alt=""></div>
            </div>
          </el-scrollbar>
        </div>
        <!-- 视频 -->
        <div>
          <div class="IconRight">
            <div class="TitleFont">
              <div>视频</div>
              <div>(<span class="TitleFontNumber"> 全部114 </span> | <span class="TitleFontNumber"> 官方10 </span> | <span class="TitleFontNumber"> 玩家35 </span>)</div>
            </div>
            <div class="el-icon-upload2">上传视频</div>
          </div>
          <el-scrollbar>
            <div class="VideoContWidth">
              <div v-for="item in 3" :key="item"><img src="../assets/images/a.png" alt=""></div>
            </div>
          </el-scrollbar>
        </div>
        <!-- 发现 -->
        <div class="TitleFont">发现</div>
        <div class="FindCont">
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
              <p class="FindScore">6.5</p>
            </div>
          </div>
          <!-- 简介 -->
          <div>
            <div class="TitleFont TitleMargin">简介</div>
            <div class="BriefText">
              <div>怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比<br />
                怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID<br />
                不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比</div>
              <div class="BriefTextBtn">展开</div>
            </div>
          </div>
          <!-- 最近更新 -->
          <div>
            <div class="IconRight">
              <div class="TitleFont TitleMargin">最近更新</div>
              <div class="HistoryCont">查看历史</div>
            </div>
            <div class="BriefText">
              <div>怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比<br />
                怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID<br />
                不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比怒ID不比</div>
              <div class="BriefTextBtn">展开</div>
            </div>
          </div>
          <!-- 详细信息 -->
          <div>
            <div class="TitleFont TitleMargin">详细信息</div>
            <div class="FileMessage">
              <div>
                <div class="FileMessageTitle">文件大小：</div>
                <div class="FileMessageText">1.13Gb</div>
              </div>
              <div>
                <div class="FileMessageTitle">当前版本：</div>
                <div class="FileMessageText">2.4.4</div>
              </div>
              <div>
                <div class="FileMessageTitle">更新时间：</div>
                <div class="FileMessageText">2020年01月17日</div>
              </div>
              <div>
                <div class="FileMessageTitle">厂商：</div>
                <div class="FileMessageText">网易游戏</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="{span: 7,offset: 1}" :sm="{span: 8,offset: 0}" class="hidden-xs-only">
        <QRCode></QRCode>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import QRCode from '@/components/QRCode'
export default {
  name: 'product',
  components: {
    QRCode
  },
  data () {
    return {
      VideoChecked: false
    }
  },
  methods: {
    FeetShowBtn () {

    }
  }
}
</script>

<style scoped>
.BannerContWidth{
  width: 1040px;
  display: flex;
  margin: 0 auto;
}
.DetailsCont{
  width: 100%;
  margin-top: 1.5rem;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.2);
}
.DetailsEvaluateCont{
  line-height: 73px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
.DetailsEvaluateCont>div{
  text-align: center;
  border: 1px solid #ccc;
}
.DetailsEvaluateCont>div>span{
  margin-left: 5px;
  font-size: 12px;
}
.DetailsIconCont{
  display: flex;
}
.DetailsIconTextCont>img{
  width: 14.16rem;
  height: 14.16rem;
  border-radius: 2rem;
  margin: 2.5rem 1.5rem 1.08rem 2.33rem;
}
.DetailsIconTextCont>div{
  text-align: center;
  margin-bottom: 1.08rem;
}
.DetailsIconTextCont>div>span{
  color: #3EC5E1;
  padding: 5px 1.8rem;
  background: #B3EAF9;
  border-radius: 3rem;
}
.ScoreContWidth{
  width: 100%;
}
.ScoreCont{
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
}
.ScoreCont p{
  font-size: 2rem;
  margin-bottom: 5px;
}
.ScoreCont span{
  color: #3EC5E1;
}
.Score{
  width: 5.66rem;
  height: 5.66rem;
  border-radius: 50%;
  line-height: 5.66rem;
  text-align: center;
  color: white;
  font-size: 2rem;
  background: #3EC5E1;
  margin-bottom: 3rem;
  margin-right: 5px;
}
.FollowCont{
  display: flex;
}
.FollowCont>div{
  margin-right: 1rem;
}
.FollowColorBlue{
  color: #3EC5E1;
}
.FollowColor{
  color: #ccc;
}
.DownLoadCont{
  display: flex;
  margin-top: 0.8rem;
}
.DownLoadCont>div{
  background: #3EC5E1;
  color: white;
  padding: 0.8rem 4rem;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 14px;
}
.TitleFont{
  font-size: 1.333rem;
  border-left: 0.5rem solid #3EC5E1;
  padding-left: 0.667rem;
  margin: 1.333rem 0;
  display: flex;
}
.TitleFont>div{
  margin-right: 1rem;
}
.TitleFontNumber{
  font-size: 1rem;
  color: #3EC5E1;
}
.VideoCont,
.VideoContWidth{
  display: -webkit-box;
  overflow-y: auto;
}
.VideoCont>div,
.VideoContWidth>div{
  width: 43.58rem;
  display: -webkit-box;
  margin-right: 1rem;
}
.VideoCont img,
.VideoContWidth img{
  width: 100%;
}
.el-icon-upload2{
  font-size: 14px;
  color: #3EC5E1;
  margin-top: 1.7rem;
}
.IconRight{
  display: flex;
  justify-content: space-between;
}
.VideoContWidth>div{
  width: 35rem;
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
.BannerTextTitle{
  font-size: 1.333rem;
}
.BannerText{
  font-size: 1.167rem;
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
.FindScore{
  padding-top: 0.4rem;
  font-size: 1.333rem;
  color: #14B8C7;
}
.TitleMargin{
  margin-left: 0.833rem;
  margin-right: 0.833rem;
}
.BriefText{
  border-bottom: 1px solid #ccc;
  margin: 0 0.833rem;
  line-height: 2rem;
}
.BriefTextBtn{
  margin-top: 0.5rem;
  display: block;
  text-align: center;
  margin-bottom: 1rem;
}
.HistoryCont{
  font-size: 1rem;
  color: #14B8C7;
  margin-top: 1.7rem;
  margin-right: 0.833rem;
}
.FileMessage{
  display: flex;
  justify-content: space-between;
  margin-left: 0.833rem;
  margin-right: 0.833rem;
}
.FileMessageTitle{
  font-weight: bold;
}
.FileMessageText{
  line-height: 3rem;
}
@media (max-width:1200px) {
  .BannerContWidth{
    width: 88%;
  }
  .DownLoadCont>div{
    padding: 0.8rem 3.5rem;
  }
  .DetailsEvaluateCont{
    line-height: 50px;
  }
  .DetailsIconTextCont>img{
    width: 10rem;
    height: 10rem;
  }
  .Score{
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    margin-bottom: 1rem;
  }
}
@media (max-width:992px) {
  .BannerContWidth{
    width: 84%;
  }
  .DetailsIconTextCont>img{
    width: 10rem;
    height: 10rem;
    margin: 2.5rem 1rem 1.08rem;
  }
  .FollowCont{
    flex-wrap: wrap;
  }
  .DownLoadCont>div{
    padding: 0.8rem 2rem;
  }
  .Score{
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }
  .VideoCont>div{
    width: 85%;
  }
  .VideoContWidth>div{
    width: 75%;
  }
}
@media (max-width:768px) {
  .BannerContWidth{
    width: 82%;
  }
  .DownLoadCont>div{
    padding: 0.8rem 2.0rem;
  }
  .Score{
    margin-bottom: 2rem;
  }
  .VideoCont>div{
    width: 80%;
  }
  .VideoContWidth>div{
    width: 70%;
  }
}
@media (max-width:576px) {
  .BannerContWidth{
    width: 90%;
  }
  .ScoreCont p{
    font-size: 1.4rem;
  }
  .DetailsEvaluateCont{
    line-height: 40px;
  }
  .DetailsIconTextCont>img{
    width: 8rem;
    height: 8rem;
    margin: 2.5rem 1rem 1.08rem;
  }
  .DownLoadCont>div{
    padding: 0.6rem 1.8rem;
  }
  .VideoCont>div{
    width: 80%;
  }
  .VideoContWidth>div{
    width: 70%;
  }
  .Score{
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
}
</style>
