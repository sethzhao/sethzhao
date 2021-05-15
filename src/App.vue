<template>
  <div class="page">
    <header>
      <h1 class="logo"><router-link to="/">Set Zhao</router-link></h1>

      <div class="navs">
        <router-link class="nav-item" to="/">关于</router-link>
        <router-link class="nav-item" to="/blog">文章</router-link>
        <router-link class="nav-item" to="/work">作品</router-link>
        <!-- <router-link class="nav-item" to="/comment">留言</router-link> -->
      </div>
    </header>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 10px 15px;
  max-width: 600px;
  margin: 0 auto;
}

header {
  height: 40px;
  display: flex;
  align-items: center;

  .logo {
    font-size: 24px;
    color: #cb997e;
    font-weight: bold;

    &:hover {
      color: #ddbea9;
    }
  }

  .navs {
    margin-left: auto;
    color: #cb997e;
    margin-right: -8px;

    .nav-item {
      margin: 0 8px;

      &:hover {
        color: #ddbea9;
      }
    }
  }
}


</style>
