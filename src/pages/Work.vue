<template>
  <div>
    <section class="intro">
      <div>为别人写的项目不计其数，属于自己的屈指可数。</div>
    </section>
    <section class="work-list">
      <div class="work-item">
        <div class="work-title">个人网站 - Seth Zhao</div>
        <div class="work-desc">
          <p>就是现在你所访问的这个网站。这是第 n 次架设个人网站了，不同的是以前都是用 wordpress 或者 hexo 之类的软件生成，这次完全自己开发，也自己尝试设计样式。</p>
        </div>
        <div class="work-link"><a href="https://github.com/sethzhao/sethzhao" target="_blank">-> github</a></div>
      </div>
      <div class="work-item">
        <div class="work-title">脚手架 - generator-rem</div>
        <div class="work-desc">
          <p>这是一个 yeoman generator，用来生成使用 rem 方式适配移动终端的 web 工程。支持 sass, autoprefixer, liveReload 等，并可以自动将 px 转成 rem。用的是手淘 H5 的适配方案。早年做 H5 比较多的时候弄的。</p>
        </div>
        <div class="work-link"><a href="https://www.npmjs.com/package/generator-rem" target="_blank">-> npm</a><a href="https://github.com/sethzhao/generator-rem" target="_blank">-> github</a></div>
      </div>
      <div class="work-item">
        <div class="work-title">小游戏 - 企鹅先生</div>
        <div class="work-desc">
          <p>早在 2014 年写的小游戏，原本是个红白机上的游戏，我通过模拟器截图取得素材，靠观察梳理游戏机制。画面可以说做到了像素级还原，玩法也基本还原到位。一共做了 7 关，前 6 关和原作一样，第 7 关是自己原创的。我从小憧憬游戏开发，这也是我最初对编程的兴趣来源，长大以后能还原一个小时候玩过的游戏也算圆梦了。</p>
          <p style="margin-top: 5px">操作方法：</p>
          <p>1、点击屏幕下方的红色按钮</p>
          <p>2、键盘 WASD 控制方向，I 控制攻击</p>
        </div>
        <div class="work-images">
          <div class="work-images-item" v-for="img in state.binarylandImgs" :key="img">
            <el-image
              :src="img"
              :preview-src-list="state.binarylandImgs">
            </el-image>
          </div>
        </div>
        <div class="work-link"><a href="https://binaryland.sethzhao.xyz" target="_blank">-> 在线体验</a><a href="https://github.com/sethzhao/binaryland" target="_blank">-> github</a></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import binarylandImg1 from '../assets/binaryland1.png'
import binarylandImg2 from '../assets/binaryland2.png'
import binarylandImg3 from '../assets/binaryland3.png'

const state  = reactive({
  binarylandImgs: [
    binarylandImg1,
    binarylandImg2,
    binarylandImg3
  ]
})

</script>

<style lang="scss" scoped>
.work-title {
  color: #cb997e;
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 5px;
}

.work-desc {
  margin-bottom: 5px;
}

.work-item {
  margin: 20px 0;
}

.work-images {
  display: flex;
  margin: 0 -5px 5px;

  .work-images-item {
    margin: 0 5px;
    display: flex;
    img {
      width: 100%;
    }
  }
}

.work-link {
  color: #a5a58d;
  margin: 0 -8px;

  a {
    margin: 0 8px;
  }

  a:hover {
    color: #b7b7a4;
  }
}
</style>