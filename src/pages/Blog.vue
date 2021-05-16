<template>
  <div>
    <section class="post-list">
      <div class="post-item" v-for="post in posts" :key="post.title">
        <div class="post-title"><router-link :to="'/blog/' + post.content.split('_')[1]">{{ post.title }}</router-link></div>
        <div>
          <span class="publish-date">{{ post.content.split('_')[0] }}</span>
          <span class="reading-time"> • 阅读用时 {{ post.readingTime }} 分钟 {{ readingTimeCoffee(readingTime) }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import posts from '../posts/data.json'

function readingTimeCoffee(readingTime) {
  return Array(Math.floor(readingTime / 5) || 1).fill('☕️').join('')
}

</script>

<style lang="scss" scoped>
.post-list {
  .post-item {
    margin: 20px 0;
  }

  .publish-date {
    // color: #A5A58D;
    flex-shrink: 0;
  }

  .reading-time {
    // color: #A5A58D;
  }

  .post-title {
    font-size: 30px;
    font-weight: bold;
    color: #c05f5d;
    margin-bottom: 5px;
  }

  .post-small {
    // margin-bottom: 20px;
  }
}
</style>
