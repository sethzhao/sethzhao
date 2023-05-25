<template>
  <div>
    <section class="head">
      <img class="headimg" alt="my head image" src="../assets/head.jpg" />
      <div class="name">赵樊健</div>
    </section>

    <section class="intro">
      <p>Web3 打工人 / 区块链晚期投资人 / 连续失业者 / 全干工程师 / 猫之使徒 / 剧本杀软核玩家 / 陆冲板混 / 德扑小鱼 / 训练中的英雄</p>
    </section>

    <section class="contact">
      <h2>联系方式</h2>
      <div>微信: sethzhao25</div>
      <div>邮箱: <a href="mailto:156321118@qq.com">156321118@qq.com</a>, <a href="mailto:slertness@gmail.com">slertness@gmail.com</a></div>
      <div>GitHub: <a href="https://github.com/sethzhao" target="_blank">https://github.com/sethzhao</a></div>
    </section>

    <section class="ns">
      <h2>各种域名</h2>
      <div>DNS: sethzhao.xyz, sethzhao.wtf, sethzhao.com</div>
      <div>ENS: sethzhao.eth</div>
      <div>UD: sethzhao.crypto, sethzhao.wallet, sethzhao.x</div>
      <div>TNS: sethzhao.ust</div>
      <div>DAS: sethzhao.bit</div>
      <div>Nametag: sethzhao</div>
    </section>

  </div>
  <footer>
    <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2021013501号</a>
  </footer>
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

footer {
  margin-top: auto;
  padding-top: 10px;
  font-size: 12px;
  text-align: right;
  color: #aaa;
}
</style>
