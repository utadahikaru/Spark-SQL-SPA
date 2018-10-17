<template>
  <div id="container">
    <router-view v-if="this.currentPagePath == '/auth/login1'"></router-view>
    <header v-if="this.currentPagePath !='/auth/login1'">
      <el-row>
        <el-col :span="2" id="test">
          <div class="header"><img src="~@/assets/img/logo2.png"></div>
        </el-col>
        <el-col :span="22">
          <div class="header">
            <el-menu :default-active="activeIndex2" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
              <el-menu-item index="/sjcx">数据查询</el-menu-item>
              <el-menu-item index="/sjcs">数据传输</el-menu-item>
              <el-menu-item index="/sjjs">数据计算</el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </header>
    <section class="main" v-if="this.currentPagePath !='/auth/login1'">
      <router-view></router-view>
    </section>
    <footer v-if="this.currentPagePath !='/auth/login1'">上海必乾信息科技有限公司</footer>
  </div>
  <!-- <div class="container">
    <router-view v-if="this.currentPagePath == '/auth/login1'"></router-view>
    <div v-if="this.currentPagePath !='/auth/login1'">
      　　<div class="lsj-header">
        <el-row>
          <el-col :span="2">
            <div class="lsj-header"><img src="~@/assets/img/logo2.png"></div>
          </el-col>
          <el-col :span="22">
            <div class="lsj-header">
              <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
                <el-menu-item index="/sjcx">数据查询</el-menu-item>
                <el-menu-item index="/sjcs">数据传输</el-menu-item>
                <el-menu-item index="/sjjs">数据计算</el-menu-item>
              </el-menu>
            </div>
          </el-col>
        </el-row>
      </div>
      　　<div class="main">
        <router-view></router-view>
      </div>
      　　<div class="footer">Spark-SQL Web By YanAgi FivE</div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex2: "/sjcx"
    };
  },
  mounted() {
    console.log(this.currentPagePath);
  },
  computed: {
    isAuthed: function() {
      return this.$store.state.user.isAuthed;
    },
    requireAuth: function() {
      return this.$route.meta.requireAuth;
    },
    currentPagePath: function() {
      return this.$store.state.app.currentPagePath;
    }
  }
};
</script>

<style lang="scss" scoped>
// .lsj-header {
//   background-color: #545c64;
//   width: 100%;
//   height: 60px;
//   img {
//     width: 50px;
//     height: 40px;
//     margin-top: 10px;
//     margin-left: 1px;
//   }
// }
#test {
  padding-bottom: 7px;
  border-bottom: solid 1px white;
}
html,
body {
  height: 100%;
}
#container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
}
.header {
  background: #545c64;
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
  img {
    width: 50px;
    height: 40px;
    margin-top: 10px;
    margin-left: 15px;
  }
}
.main {
  background: #545c64;
  flex: 1 0 auto;
  margin: 0;
  padding: 0;
}
footer {
  background: #22272c;
  color: white;
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
  text-align: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  height: 100%;
}
</style>
