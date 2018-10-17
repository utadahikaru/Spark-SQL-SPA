<template>

  <el-row>
    <el-col :span="4">
      <span id="span2"><i class="el-icon-document"></i>文件管理</span>

      <el-tree :data="data1" :props="defaultProps" class="tree">
      </el-tree>
      <span id="span2"><i class="el-icon-document"></i>数据库&表查看</span>

      <el-tree :data="data2" :props="defaultProps" class="tree">
      </el-tree>
    </el-col>
    <el-col :span="18">
      <el-main style="background-color:#545c64">
        <div class="single-row-block2">
          <el-row>
            <el-col :span="3" id="col">
              <i class="far fa-save fa-2x"></i><span>保存</span>
            </el-col>
            <el-col :span="3" id="col">
              <i class="fas fa-play fa-2x"></i><span>执行</span></el-col>

            <el-col :span="3 " id="col">
              <i class="far fa-edit fa-2x"></i><span>编辑</span></el-col>

          </el-row>
        </div>
        <div class="single-row-block">
          <codemirror v-model="code" :options="cmOptions"></codemirror>
        </div>
        <div class="single-row-block">
          <codemirror v-model="code" :options="cmOptions"></codemirror>
        </div>
      </el-main>
    </el-col>
  </el-row>
</template>
<script>
import { codemirror } from "vue-codemirror";
require("codemirror/addon/fold/foldcode.js");
require("codemirror/addon/fold/foldgutter.js");
require("codemirror/addon/fold/brace-fold.js");
require("codemirror/addon/fold/xml-fold.js");
require("codemirror/addon/fold/indent-fold.js");
require("codemirror/addon/fold/markdown-fold.js");
require("codemirror/addon/fold/comment-fold.js");
export default {
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  },
  components: {
    codemirror
  },

  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      code: 'const str = "hello world"',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true
      },
      data2: [
        {
          label: "Database1",
          children: [
            {
              label: "Table1"
            }
          ]
        }
      ],
      data1: [
        {
          label: "文件夹1",
          children: [
            {
              label: "子文件夹1",
              children: [
                {
                  label: "nmsl.sql"
                }
              ]
            }
          ]
        },
        {
          label: "文件夹2",
          children: [
            {
              label: "子文件夹2",
              children: [
                {
                  label: "caixukun.sql"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      tableData: Array(20).fill(item),
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#col {
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 20px;
  color: white;
}
.test {
  background-color: #545c64;
  height: 100%;
  width: 100%;
  color: white;
}
.sjcx-main {
  background-color: #545c64;
  height: 100%;
}

.tree {
  background-color: #545c64;
  color: rgb(141, 141, 141);
  margin-top: 50px;
}
#span2 {
  color: white;
  position: relative;
  left: 5px;
  top: 50px;
}
</style>

