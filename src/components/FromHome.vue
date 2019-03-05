<template>
  <div class="FromHome">
    <!-- 头部导航 -->
    <nav class="navbar navbar-default nav_color navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#example-navbar-collapse"
            >
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src="../component/img/ainier.png" alt="LOGo">
            </a>
          </div>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="javascript:void(0);">首页</a>
              </li>
              <li>
                <a href="javascript:void(0);">关于</a>
              </li>
              <li>
                <a href="javascript:void(0);">服务</a>
              </li>
              <li>
                <a href="javascript:void(0);">案例</a>
              </li>
              <li>
                <a href="javascript:void(0);">客户</a>
              </li>
              <li>
                <a href="javascript:void(0);">资讯</a>
              </li>
              <li>
                <a href="javascript:void(0);">联系</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="cleakFolet"></div>
    <!-- <From-Footer></From-Footer> -->
    <!-- 底部导航 -->
    <footer class=".container-fluid visible-xs footerStyle">
      <div class="row">
        <div class="col-xs-6">
          <a href="javascript:void(0);">
            <img :src="footer[0]" alt="map">
            地图导航
          </a>
        </div>
        <div class="col-xs-6">
          <a href="javascript:void(0);">
            <img :src="footer[1]" alt="iphone">
            联系我们
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import qs from "qs";
// import FromFooter from "@/components/FromFooter";

export default {
  name: "FromHome",
  // components: {
  //   FromFooter
  // },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      img: require("component/img/ainier.png"),
      footer: [
        require("component/img/map1.svg"),
        require("component/img/iphone1.svg")
      ],
      linkOffsetlet: null,
      linkoffsetBooer: null
    };
  },
  created() {
    // console.log(this.linkOffsetlet);
  },
  mounted() {
    let boomLinkleft = window.document.getElementsByClassName("line")[0];
    this.linkOffsetlet = window.document.querySelectorAll(
      ".navbar-nav>li"
    )[0].offsetLeft;
  },
  methods: {
    getOffsetwidth: function(event) {
      console.log(event.target);
    }
  }
};
</script>


<style lang="scss">
@import "component/sass/home.scss";
</style>

