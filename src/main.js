import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router"
import { ElImage } from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss'

import App from './App.vue'
import './styles/reset.css'
import './styles/main.scss'
import './styles/prism.css'
import Home from './pages/Home.vue'
import Work from './pages/Work.vue'
import Comment from './pages/Comment.vue'
import Blog from './pages/Blog.vue'
import Post from './pages/Post.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/comment",
    name: "Comment",
    component: Comment,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:title",
    name: "Post",
    component: Post
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App)
app.component(ElImage.name, ElImage);

app.use(router).mount('#app')
