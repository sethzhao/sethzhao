<template>
  <div>
    <section class="post-detail">
      <h1 class="post-title">{{ postTitle }}</h1>
      <div class="post-small">
        <span class="publish-date">{{ publishDate }}</span>
        <span class="reading-time"> • 阅读用时 {{ readingTime }} 分钟 {{ readingTimeEmoji(readingTime) }}</span>
      </div>
      <component :is="currentPostDetail"></component>
    </section>
  </div>
</template>

<script setup>
import { reactive, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import posts from '../posts/data.json'

const route = useRoute()

let currentPostDetail = reactive()
let postTitle = reactive()
let publishDate = reactive()
let readingTime = reactive()

const post = posts.find(post => post.content.split('_')[1] === route.params.title)

if (post) {
  currentPostDetail = defineAsyncComponent(() => {
    return import(`../posts/md/${post.content}.md`)
  })

  publishDate = post.content.split('_')[0]
  postTitle = post.title
  readingTime = post.readingTime
}

</script>

<style lang="scss" scoped>
.post-detail {

  .post-title {
    font-size: 30px;
    font-weight: bold;
    color: #c05f5d;
    margin-bottom: 5px;
  }

  .publish-date {
    font-size: 14px;
    // color: #A5A58D;
    margin-bottom: 10px;
  }

  .reading-time {
  }

  .post-small {
    margin-bottom: 20px;
  }
}
</style>
