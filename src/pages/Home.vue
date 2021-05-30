<template>
  <div>
    <section class="head">
      <img class="headimg" alt="my head image" src="../assets/head.jpg" />
      <div class="name">赵樊健</div>
    </section>

    <div class="intro">
      <p>我是一名全栈开发者，生活在上海。</p>
    </div>

    <section class="contact">
      <h2>联系方式</h2>
      <div>微信：slertness</div>
      <div>邮箱：slert@qq.com</div>
    </section>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

</script>

<style lang="scss" scoped>
.head {
  .headimg {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px auto;
  }

  .name {
    text-align: center;
    font-size: 20px;
  }
}

.contact {

}
</style>
