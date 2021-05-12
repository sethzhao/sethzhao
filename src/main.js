import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router"
import { ElImage } from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss'

import App from './App.vue'
import './styles/reset.css'
import './styles/main.scss'
import Home from './pages/Home.vue'
import Work from './pages/Work.vue'
import Comment from './pages/Comment.vue'
import About from './pages/About.vue'

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
    path: "/about",
    name: "About",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App)
app.component(ElImage.name, ElImage);

app.use(router).mount('#app')
