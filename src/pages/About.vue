<template>
  <div>
    <section class="markdown" v-html="state.content" />
  </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it'
import { defineProps, reactive } from 'vue'

const md = new MarkdownIt()
var content = md.render(`
我是一名全栈Web开发者，生活在上海。

`);

let state = reactive({
  content
})

</script>

<style lang="scss" scoped>
</style>
