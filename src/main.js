// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";

// 全局组件
import mainHeader from "@/components/main-header.vue";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//编辑器样式
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
Vue.use(codemirror);

// 全局样式
import "@/assets/css/style.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

// 组件注册
let components = [mainHeader];

components.map(component => {
  Vue.component(component.name, component);
});

// token验证与判断
router.beforeEach((to, from, next) => {
  store.dispatch("changePrePageName", from.name);
  store.dispatch("changePrePagePath", from.path);
  store.dispatch("changeCurrentPageName", to.name);
  store.dispatch("changeCurrentPagePath", to.path);
  // 如果本地存在token 尝试激活
  if (store.state.user.token !== "") {
    console.log("token:active");
  } else if (
    localStorage.token !== "" &&
    localStorage.token !== undefined &&
    localStorage.userData !== "" &&
    localStorage.userData !== undefined
  ) {
    console.log("token:hasbeenactive");
    let data = JSON.parse(localStorage.userData);
    store.dispatch("activeToken", data);
  }
  //判断前往的页面是否需要权限
  if (to.meta.requireAuth === true) {
    console.log(store.state.user.token);
    if (store.state.user.token !== "") {
      if (to.name === "login") {
        next("/home");
      } else {
        next();
      }
    } else {
      next("/auth/login");
    }
  } else {
    if (store.state.user.token !== "" && to.name === "login") {
      next("/home");
    } else {
      next();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App,
    codemirror
  },
  template: "<App/>"
});
