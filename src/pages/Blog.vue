<template>
  <div>
    <section class="post-list">
      <div class="post-item" v-for="post in posts" :key="post.title">
        <div class="publish-date">{{ post.content.split('_')[0] }}</div>
        <div class="post-title"><router-link :to="'/blog/' + post.content.split('_')[1]">{{ post.title }}</router-link></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import posts from '../posts/data.json'

</script>

<style lang="scss" scoped>
.post-list {
  .post-item {
    display: flex;
    margin: 10px 0;
  }

  .publish-date {
    color: #A5A58D;
    flex-shrink: 0;
  }

  .post-title {
    margin-left: 1em;
  }
}
</style>
