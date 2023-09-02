<template>
  <div>
    <section class="intro">
      <div>我最初对编程的兴趣来源就是觉得编程能写游戏很有意思。最早接触编程是在小霸王学习机上，但当时做不出像样的游戏。长大以后认真学了编程，总想用来写点游戏，以前用 Java 的 GUI 也写过，后来搞了前端，业余学了点游戏引擎，自己写着玩，机缘之下还做了很多写小游戏的工作。我挺享受开发小游戏的过程，总有一些有意思的逻辑问题要思考，也很有成就感。在此收录几个我写过的小游戏，除了第一个，剩下都是为客户写的。</div>
    </section>
    <section class="work-list">
      <div class="work-item">
        <div class="work-title">企鹅先生</div>
        <div class="work-desc">
          <p>原本是个红白机上的游戏，我通过模拟器截图取得素材，靠观察梳理游戏机制。画面可以说做到了像素级还原，玩法也基本还原到位。一共做了 7 关，前 6 关和原作一样，第 7 关是自己原创的。</p>
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

      <div class="work-item">
        <div class="work-title">除碳飞车</div>
        <div class="work-desc">
          <p>简单的赛车游戏，左右滑动躲避障碍物或者吃加速奖励。</p>
        </div>
        <div class="work-images">
          <div class="work-images-item" v-for="img in state.clearcarImgs" :key="img">
            <el-image
              :src="img"
              :preview-src-list="state.clearcarImgs">
            </el-image>
          </div>
        </div>
        <div class="work-link"><a href="https://clear-car.sethzhao.xyz" target="_blank">-> 在线体验</a><a href="https://github.com/sethzhao/clear-car" target="_blank">-> github</a></div>
      </div>

      <div class="work-item">
        <div class="work-title">油泥大战</div>
        <div class="work-desc">
          <p>类似炸弹人的玩法。</p>
        </div>
        <div class="work-images">
          <div class="work-images-item" v-for="img in state.fatluteImgs" :key="img">
            <el-image
              :src="img"
              :preview-src-list="state.fatluteImgs">
            </el-image>
          </div>
        </div>
        <div class="work-link"><a href="https://fatlute.sethzhao.xyz" target="_blank">-> 在线体验</a><a href="https://github.com/sethzhao/fatlute" target="_blank">-> github</a></div>
      </div>

      <div class="work-item">
        <div class="work-title">夹芒果</div>
        <div class="work-desc">
          <p>按屏幕下方的按钮决定夹哪个位置的水果。</p>
        </div>
        <div class="work-images">
          <div class="work-images-item" v-for="img in state.strideImgs" :key="img">
            <el-image
              :src="img"
              :preview-src-list="state.strideImgs">
            </el-image>
          </div>
        </div>
        <div class="work-link"><a href="https://stride.sethzhao.xyz" target="_blank">-> 在线体验</a><a href="https://github.com/sethzhao/stride" target="_blank">-> github</a></div>
      </div>

      <div class="work-item">
        <div class="work-title">某酒店主题全景互动</div>
        <div class="work-desc">
          <p>不算游戏，以全景的形式找主题房间里的物品。</p>
        </div>
        <div class="work-images">
          <div class="work-images-item" v-for="img in state.yaduoImgs" :key="img">
            <el-image
              :src="img"
              :preview-src-list="state.yaduoImgs">
            </el-image>
          </div>
        </div>
        <div class="work-link"><a href="https://yaduo.sethzhao.xyz" target="_blank">-> 在线体验</a><a href="https://github.com/sethzhao/yaduo" target="_blank">-> github</a></div>
      </div>
      
    </section>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import binarylandImg1 from '../assets/binaryland1.png'
import binarylandImg2 from '../assets/binaryland2.png'
import binarylandImg3 from '../assets/binaryland3.png'
import clearcarImg1 from '../assets/clearcar1.jpg'
import clearcarImg2 from '../assets/clearcar2.jpg'
import clearcarImg3 from '../assets/clearcar3.jpg'
import fatluteImg1 from '../assets/fatlute1.jpg'
import fatluteImg2 from '../assets/fatlute2.jpg'
import strideImg1 from '../assets/stride1.jpg'
import strideImg2 from '../assets/stride2.jpg'
import strideImg3 from '../assets/stride3.jpg'
import yaduoImg1 from '../assets/yaduo1.png'
import yaduoImg2 from '../assets/yaduo2.png'

const state  = reactive({
  binarylandImgs: [
    binarylandImg1,
    binarylandImg2,
    binarylandImg3
  ],
  clearcarImgs: [
    clearcarImg1,
    clearcarImg2,
    clearcarImg3
  ],
  fatluteImgs: [
    fatluteImg1,
    fatluteImg2
  ],
  strideImgs: [
    strideImg1,
    strideImg2,
    strideImg3
  ],
  yaduoImgs: [
    yaduoImg1,
    yaduoImg2
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