<template>
  <div>
    <section class="intro">
      <div>这里主要展示个人作品</div>
    </section>
    <section class="work-list">
      <div class="work-item">
        <div class="work-title">H5小游戏 - 企鹅先生</div>
        <div class="work-desc">
          <p>2014年写的小游戏，现在看着也还不错。原本是个红白机上的游戏，我通过模拟器截图取得素材，靠观察梳理游戏机制。画面可以说做到了像素级还原，玩法也基本还原到位，缺后期的一些奖励机制。一共做了7关，前6关和原作一样，第7关是自己原创的，用墙组成了个“赵”字。🤣</p>
          <p style="margin-top: 5px">操作方法：</p>
          <p>1、点击屏幕下方的红色按钮</p>
          <p>2、键盘wasd控制方向，i控制攻击</p>
        </div>
        <div class="work-images">
          <div class="work-images-item" v-for="img in state.binarylandImgs" :key="img">
            <el-image
              :src="img"
              :preview-src-list="state.binarylandImgs">
            </el-image>
          </div>
        </div>
        <div class="work-link"><a href="//setzhao.com/binaryland" target="_blank">-> 在线体验</a><a href="https://github.com/slertness/binaryland" target="_blank">-> 源码</a></div>
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
section {
  margin: 20px 0;
}

.work-title {
  color: #cb997e;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.work-desc {
  margin-bottom: 5px;
}

.work-images {
  display: flex;
  margin: 0 -5px 5px;

  .work-images-item {
    margin: 0 5px;
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