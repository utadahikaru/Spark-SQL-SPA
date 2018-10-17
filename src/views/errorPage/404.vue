<template>
  <div style="height:100%;width:100%;position:absolute">
    <div class="wrapper">
      <div class="container">
        <div class="brick"></div>
        <div class="number">
          <div class="four"></div>
          <div class="zero">
            <div class="nail"></div>
          </div>
          <div class="four"></div>
        </div>
        <div class="info">
          <h2>Something is wrong</h2>
          <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
          <el-button type="primary" @click="goHome">Go Home</el-button>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="worker"></div>
        <div class="tools"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 700px;
  width: 100%;
  height: 100%;
  background-color: #23294c;
}
.container {
  position: relative;
  max-width: 960px;
  width: 100%;

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.brick {
  position: absolute;
  top: 135px;
  left: -20px;
  width: 435px;
  height: 210px;
  background-image: url("~@/assets/img/wall-1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.number {
  position: relative;
  z-index: 100;
  text-align: right;
  padding-top: 79px;
  .four {
    width: 230px;
    height: 292px;
    display: inline-block;
    background-image: url("~@/assets/img/four.png");
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 19;
    position: relative;
  }
  .zero {
    width: 230px;
    height: 292px;
    display: inline-block;
    background-image: url("~@/assets/img/zero.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0px 20px;
    position: relative;
    z-index: 18;
    animation: zero 4s infinite ease-in-out;
    transform-origin: top;
    .nail {
      width: 30px;
      height: 50px;
      top: 6px;
      left: 115px;
      background-image: url("~@/assets/img/nail.png");
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
    }
  }
}
.info {
  position: relative;
  z-index: 999;
  margin-left: 300px;
  h2 {
    font-size: 50px;
    font-weight: 300;
    color: #ffc938;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 20px;
    color: #ffffff;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 1rem;
  }
}
.footer {
  width: 100%;
  text-align: center;
  height: 375px;
  margin-top: -375px;
}
.worker {
  position: absolute;
  left: 0;
  top: 4px;
  width: 300px;
  height: 371px;
  background-size: 100%;
  background-image: url("~@/assets/img/worker.png");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}
.tools {
  position: absolute;
  right: 0;
  top: 176px;
  width: 730px;
  height: 199px;
  background-size: 100%;
  background-image: url("~@/assets/img/tools.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>

