<template>
  <div>
    <section class="post-detail">
      <h1 class="post-title">{{ postTitle }}</h1>
      <div class="publish-date">{{ publishDate }}</div>
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

const post = posts.find(post => post.content.split('_')[1] === route.params.title)

if (post) {
  currentPostDetail = defineAsyncComponent(() => {
    return import(`../posts/md/${post.content}.md`)
  })

  publishDate = post.content.split('_')[0]
  postTitle = post.title
}

</script>

<style lang="scss" scoped>
.post-detail {

  .post-title {
    font-size: 30px;
    font-weight: bold;
    color: #cb997e;
    margin-bottom: 5px;
  }

  .publish-date {
    font-size: 14px;
    color: #A5A58D;
    margin-bottom: 10px;
  }
}
</style>
