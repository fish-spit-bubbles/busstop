<template>
  <!-- 首页展示 -->
  <div class="FromHeader">
    <!-- 头部组件 -->
    <From-Home></From-Home>
    <!-- 轮播图 -->
    <div class="slide">
      <el-carousel
        :loop="elLoops"
        indicator-position="node"
        arrow="always"
        :height="elCarouselHeight"
      >
        <el-carousel-item v-for="(solideUrls,index ) of solideUrl" :key="index">
          <div class="slide_row">
            <div></div>
            <img :src="solideUrls" alt="轮播图" ref="elCarouselHeight">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 我们能做什么 -->
    <div class="weWhon">
      <div class="container">
        <h2>我们能做什么</h2>
        <p>设计开发提升产品用户体验，帮助企业实现价值最大化</p>
      </div>
      <div class="container"></div>
    </div>

    <!-- 尾部组件 -->
    <From-Footer></From-Footer>
  </div>
</template>
<script>
import FromHome from "@/components/FromHome";
import FromFooter from "@/components/FromFooter";
import Wow from "wowjs";
export default {
  name: "FromHeader",
  components: {
    FromHome,
    FromFooter
  },
  data() {
    return {
      solideUrl: [
        require("@/component/img/01.png"),
        require("@/component/img/02.png"),
        require("@/component/img/03.png")
      ],
      a: "hello wrod",
      elCarouselHeight: "",
      elLoops: true
    };
  },
  watch: {
    a: {
      handler: function(val, oldVal) {},
      deep: true
    },
    elCarouselHeight: {
      handler: function(val, oldVal) {},
      deep: true
    }
  },
  created: function() {},
  beforeMount() {},
  mounted() {
    // 图片响应式
    let imgrUrl =
      require("@/component/img/01.png") + "?" + Date.parse(new Date());
    let imgTag = new Image();
    imgTag.src = imgrUrl;
    let thtaThis = this;
    // 获取图片宽度高度并赋值
    imgTag.onload = function() {
      let img_height = imgTag.height;
      let img_width = imgTag.width;
      let img_multiple = Number(
        (window.document.body.offsetWidth / img_width).toFixed(4)
      );
      let imgNewHeight = img_multiple * img_height;
      imgNewHeight = Math.trunc(imgNewHeight);
      thtaThis.elCarouselHeight = imgNewHeight.toString() + "px";
    };
    // 监听WIindow窗口变化改变图片高度
    window.onresize = function() {
      thtaThis.elCarouselHeight =
        thtaThis.$refs.elCarouselHeight[0].height.toString() + "px";
    };
    // 执行动画
    let wows = new Wow({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wows.init();
  }
};
</script>
<style lang="scss">
@import "@/component/sass/hearderShow.scss";
</style>