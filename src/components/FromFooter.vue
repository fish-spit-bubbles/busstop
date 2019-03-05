<template>
  <div class="FromFooter">
    <div class="footerRow">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-9 col-xs-12">
            <h3>江苏艾尼尔建设集团有限公司</h3>
            <p>
              地址：宿迁市宿城经济开发区隆锦路68号
              <span class="navbars">一键地图导航</span>
            </p>
            <p>全国客户热线：400-1076-998</p>
            <p>邮箱：support@edge-cloud.cn</p>
            <p></p>
            <div class="book">
              <img
                :src="navBookimg[0]"
                alt="QQ"
                @mouseenter="qqmouseenterImgurl"
                @mouseout="qqmouseoutImgUrl"
              >
              <img
                :src="navBookimg[2]"
                alt="微信"
                @mouseenter="wxmouseenterImgurl"
                @mouseout="wxmouseoutImgUrl"
                @click="centerDialogVisible = true"
              >
              <el-dialog
                class="book_Img"
                title="扫码"
                :visible.sync="centerDialogVisible"
                width="60%"
                center
              >
                <img class="visbleSm" :src="erweimad" alt="二维码">
              </el-dialog>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
            <div class="footer_erw hidden-xs">
              <img :src="erweimad" alt="二维码">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a href="javascript:void(0);">白云驾驶学校</a>
            <a href="javascript:void(0);">江西祥泰售电服务有限公司</a>
            <a href="javascript:void(0);">新维世教育</a>
            <a href="javascript:void(0);">南昌住房金融服务有限公司</a>
            <a href="javascript:void(0);">江西亿安达驾校</a>
            <a href="javascript:void(0);">uoffer留学</a>
            <a href="javascript:void(0);">祥国集团</a>
            <a href="javascript:void(0);">江艺文化艺术学校</a>
            <a href="javascript:void(0);">花千谷</a>
            <a href="javascript:void(0);">chantelle</a>
          </div>
        </div>
        <div
          class="footer_copy"
        >Copyright © leteng.net All Rights Reserved 江苏艾尼尔建设集团有限公司 版权所有 赣ICP备13069202号—2</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FromFooter",
  data() {
    return {
      erweimad: require("component/img/erwm.jpg"),
      navBookimg: [
        require("../component/img/QQ.svg"),
        require("../component/img/QQgreen.svg"),
        require("../component/img/wxgro.svg"),
        require("../component/img/wxGreen.svg")
      ],
      centerDialogVisible: false
    };
  },
  methods: {
    // 鼠标移入
    qqmouseenterImgurl: function() {
      [this.navBookimg[1], this.navBookimg[0]] = [
        require("../component/img/QQ.svg"),
        require("../component/img/QQgreen.svg")
      ];
      for (let i of this.navBookimg) {
        let k = 0;
        this.$set(this.navBookimg, k, this.navBookimg[k]);
        if (k >= 4) {
          return;
        }
      }
    },
    // 鼠标移出
    qqmouseoutImgUrl: function() {
      [
        this.navBookimg[0],
        this.navBookimg[1],
        this.navBookimg[2],
        this.navBookimg[3]
      ] = [
        require("../component/img/QQ.svg"),
        require("../component/img/QQgreen.svg"),
        require("../component/img/wxgro.svg"),
        require("../component/img/wxGreen.svg")
      ];
      for (let i of this.navBookimg) {
        let k = 0;
        this.$set(this.navBookimg, k, this.navBookimg[k]);
        if (k >= 4) {
          return;
        }
      }
    },
    wxmouseenterImgurl: function() {
      [this.navBookimg[3], this.navBookimg[2]] = [
        require("../component/img/wxgro.svg"),
        require("../component/img/wxGreen.svg")
      ];
      for (let i of this.navBookimg) {
        let k = 0;
        this.$set(this.navBookimg, k, this.navBookimg[k]);
        if (k >= 4) {
          return;
        }
      }
    },
    wxmouseoutImgUrl: function() {
      [this.navBookimg[2], this.navBookimg[3]] = [
        require("../component/img/wxgro.svg"),
        require("../component/img/wxGreen.svg")
      ];
      for (let i of this.navBookimg) {
        let k = 0;
        this.$set(this.navBookimg, k, this.navBookimg[k]);
        if (k >= 4) {
          return;
        }
      }
    }
  }
};
</script>
<style lang="scss">
@import "component/sass/footers.scss";
</style>
