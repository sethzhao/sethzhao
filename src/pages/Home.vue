<template>
  <div>
    <section class="head">
      <img class="headimg" alt="my head image" src="../assets/head.jpg" />
      <div class="name">赵樊健</div>
    </section>

    <div class="intro">
      <p>区块链晚期投资人 / 连续失业者 / 全干工程师 / 猫之使徒 / 训练中的英雄</p>
    </div>

    <section class="contact">
      <h2>联系方式</h2>
      <div>微信: sethzhao25</div>
      <div>邮箱: 156321118@qq.com</div>
    </section>

    <section class="ns">
      <h2>各种域名</h2>
      <div>DNS: sethzhao.xyz, sethzhao.com</div>
      <div>ENS: sethzhao.eth</div>
      <div>UD: sethzhao.crypto, sethzhao.wallet</div>
      <div>TNS: sethzhao.ust</div>
      <div>Nametag: sethzhao</div>
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
