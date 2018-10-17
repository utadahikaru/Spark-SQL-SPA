<template>
  <div class="form-body">
    <!-- <div class="website-logo">
      <img src="~@/assets/img/logo.png">
    </div> -->
    <div class="img-holder">
      <img src="~@/assets/img/timg.jpeg">
    </div>
    <div class="form-holder">
      <div class="form-content">
        <div class="form-item">
          <h3>Spark-SQL Single Page Application</h3>
          <p>Presented By YAnAgI FiVE</p>
          <div class='page-link'>
            <span>Login</span>
          </div>
          <form>
            <input type="text" placeholder="E-mail Address" name="username">
            <input type="text" placeholder="Password" name="password">
            <div class="form-button">
              <el-button size="medium" @click="login">Login</el-button>
              <span>Forget password?</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/sjcx");
    }
  }
};
</script>

<style lang="scss" scoped>
.bqteam-footer {
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 30px;

  text-align: center;

  background-color: rgba(45, 171, 226, 0.8);
  span {
    color: rgb(121, 30, 30);

    font-size: 14px;
    line-height: 30px;
  }
}
.website-logo {
  display: inline-block;
  top: 40%;
  left: 170px;
  right: initial;
  bottom: initial;
  position: absolute;
  z-index: 1000;
  img {
    width: 200px;
  }
}

.form-body {
  height: 100%;
  width: 100%;
  margin: 0;
  position: absolute;
  margin-left: 0;
  margin-right: 0;
  min-height: 700px;
  > .img-holder {
    width: 430px;
    position: absolute;
    top: 0;
    left: 0;
    // min-height: 700px;
    height: 100%;
    overflow: hidden;
    padding: 0 60px;
    text-align: center;
    z-index: 999;
    img {
      opacity: 1;
      position: absolute;
      left: 0;
      top: 0;
      // min-height: 700px;
      height: 100%;
      z-index: -1;
    }
  }
  > .form-holder {
    margin-left: 550px;
    height: 100%;
    > .form-content {
      position: relative;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 60px;
      min-height: 100%;
      background-color: #23394a;
      > .form-item {
        max-width: 340px;
        text-align: left;
        display: inline-block;
        width: 100%;
        height: 100%;
        transition: all 0.4s ease;
      }
      h3 {
        color: #fff;
        text-align: left;
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 10px;
      }
      p {
        color: #fff;
        text-align: left;
        font-size: 18px;
        font-weight: 300;
        line-height: 20px;
        margin-bottom: 30px;
        margin-top: 0;
      }
      .page-link {
        margin-bottom: 34px;
        span {
          color: #fff;
          position: relative;
          display: inline-block;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          margin-right: 20px;
          transition: all 0.3s ease;
          background-color: transparent;
          padding-bottom: 10px;
          box-shadow: inset 0px -2px 0px 0px #fff;
        }
      }
      form {
        margin-bottom: 58px;
      }
      input {
        border: 0;
        background-color: #445867;
        color: #dedbdb;
        width: 100%;
        padding: 9px 20px;
        text-align: left;
        outline: 0;
        border-radius: 6px;
        font-size: 15px;
        font-weight: 300;
        transition: all 0.3s ease 0s;
        margin-bottom: 14px;
        &:hover {
          background-color: #fff;
          color: black;
        }
      }
      .form-button {
        margin-top: 30px;
        margin-bottom: 25px;
        span {
          padding: 0 10px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>



