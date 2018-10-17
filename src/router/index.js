import Vue from "vue";
import Router from "vue-router";
// 登录
import login1 from "@/views/auth/login1";

/* error page */
import err404 from "@/views/errorPage/404";

// 主页
import homePage from "@/views/home/index";
//数据查询
import sjcx from "@/views/sjcx/sjcx";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/auth/login1"
    },
    {
      path: "/home",
      redirect: "/sjcx"
    },
    {
      path: "/sjcx",
      name: "sjcx",
      component: sjcx
    },
    {
      path: "/auth/login1",
      name: "login1",
      component: login1,
      meta: {
        title: "用户登录1"
      }
    },
    {
      path: "/404",
      name: "err404",
      component: err404,
      meta: {
        title: "页面找不到"
      }
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
