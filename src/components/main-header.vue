<template>
    <div class="bqteam-header-wrapper">
        <div class="logo-link">
            <img class="logo-nav-image" src="~@/assets/img/logo4.png">
        </div>
        <span class="login-wrapper">
            <el-dropdown @command="handleCommand">
                <span>
                    <i class="el-icon-view icon"></i> {{roleName}}:{{userName}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command='a'>修改密码</el-dropdown-item>
                    <el-dropdown-item command='b'>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </span>
    </div>
</template>

<script>
export default {
  name: "main-header",
  data() {
    return {
        roleName:'测试角色',
        userName:'测试人员'
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "a") {
        
      }
      if (command === "b") {
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bqteam-header-wrapper {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0;
  background-color: #fff;
  box-shadow: 0px 0px 10px #ccc;
}
.logo-link {
  display: block;
  float: left;
  width: 150px;
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
  color: #000;
  cursor: pointer;
  font-size: 25px;
}
.login-wrapper {
  position: absolute;
  display: inline-block;
  right: 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  span {
    color: #000;
    padding-right: 10px;
    cursor: pointer;
  }
}
.logo-nav-image {
  width: 150px;
//   height: 40px;
  margin-top: -10px;
  vertical-align: middle;
}
</style>


