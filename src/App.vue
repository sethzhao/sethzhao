<template>
  <div class="page">
    <header>
      <h1 class="logo"><a href="/">Set Zhao</a></h1>
    </header>
    <main>
      <section class="head">
        <img class="headimg" alt="my head image" src="./assets/head.jpg" />
        <div class="name">赵樊健</div>
      </section>

      <div class="intro">
        <p>我是一名全栈WEB开发者，生活在上海。</p>
      </div>

      <section class="contact">
        <h2>联系方式</h2>
        <div>微信：slertness</div>
        <div>邮箱：slert@qq.com</div>
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

</script>

<style lang="scss" scoped>
.page {
  padding: 0 15px;
  max-width: 600px;
  margin: 0 auto;
}

header {
  height: 40px;
  display: flex;
  align-items: center;

  .logo {
    font-size: 24px;
    color: #2c3e50;
    font-weight: bold;
  }
}

main {

}


section {
  margin: 20px 0;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }
}

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
