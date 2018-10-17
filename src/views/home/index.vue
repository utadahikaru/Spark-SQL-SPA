<template>

</template>

<script>
export default {
  methods: {},
  data() {
    return {
      activeIndex2: "/home/sjcx"
    };
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.container {
  min-height: 100%;
  height: auto;
  height: 100%; /*ie6不识别min-height,如上述处理*/
  position: relative;
}
.main {
  padding-bottom: 60px; /*padding等于footer的高度*/
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /*footer的高度*/
}
.lsj-header {
  background-color: #545c64;
  width: 100%;
  height: 60px;
  img {
    width: 50px;
    height: 40px;
    margin-top: 10px;
    margin-left: 1px;
  }
}
.lsj-main {
  background-color: rgba(7, 104, 146, 0.8);
}
.bqteam-footer {
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 30px;

  text-align: center;

  background-color: rgba(0, 38, 54, 0.8);
  span {
    color: rgb(190, 190, 190);

    font-size: 14px;
    line-height: 30px;
  }
}
.row {
  flex-wrap: wrap;
  display: flex;
  padding: 20px;
}
.col-block {
  flex: 0 0 30%;
  max-width: 30%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 20px;
  padding-left: 20px;
}
.img-link {
  display: inline-block;
  width: 100%;
  margin: 20px 0;
  padding: 0 5px;
  img {
    width: 100%;
    border-radius: 15px;
    vertical-align: middle;
    border-style: none;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      box-shadow: 0 11px 19px rgba(0, 123, 255, 0.18);
    }
  }
}
</style>


