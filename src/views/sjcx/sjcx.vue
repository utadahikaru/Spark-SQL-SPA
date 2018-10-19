<template>

  <el-row>
    <el-col :span="4">
      <el-row>
        <a @click="chooseFile()" id="fileicon"><i class="far fa-file fa-2x" id="thefileicon"></i><span id="files">Files</span></a>
        <a @click="chooseDatabase()" id="fileicon2"><i class="fas fa-database fa-2x" id="thefileicon2"></i><span id="database">Databases</span></a>
      </el-row>
      <el-tree :data="data1" :props="defaultProps" class="tree" v-if="this.leftMode=='file'">
      </el-tree>
      <el-tree :data="data2" :props="defaultProps" class="tree" v-if="this.leftMode=='database'">
      </el-tree>
    </el-col>
    <el-col :span="18">
      <el-main style="background-color:#545c64">
        <div class="single-row-block2">
          <el-row>
            <el-col :span="3" id="col">
              <i class="far fa-save fa-2x"></i>
              <el-button type="text" id="textbutton">Save</el-button>
            </el-col>
            <el-col :span="3" id="col">
              <i class="fas fa-play fa-2x"></i>
              <el-button type="text" id="textbutton">Execute</el-button>
            </el-col>

            <el-col :span="3 " id="col">
              <i class="far fa-edit fa-2x"></i>
              <el-button type="text" id="textbutton">Edit</el-button>
            </el-col>

          </el-row>
        </div>
        <div class="single-row-block">
          <codemirror v-model="code" :options="cmOptions"></codemirror>
        </div>
        <div class="single-row-block3">
          <el-col :span="4" id="col"><a>
              <i class="far fa-save fa-2x"></i>
              <el-button type="text" id="textbutton">Saved Queries</el-button>
            </a>
          </el-col>
          <el-col :span="7" id="col"><a>
              <i class="fas fa-search fa-2x"></i>
              <el-button type="text" id="textbutton">Query History</el-button>
            </a>
          </el-col>
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
    },
    chooseFile() {
      document.getElementById("fileicon").style.color = "#344352";
      document.getElementById("thefileicon").style.color = "#344352";
      document.getElementById("files").style.color = "#344352";
      document.getElementById("fileicon2").style.color = "white";
      document.getElementById("thefileicon2").style.color = "white";
      document.getElementById("database").style.color = "white";
      this.leftMode = "file";
    },
    chooseDatabase() {
      document.getElementById("fileicon").style.color = "white";
      document.getElementById("thefileicon").style.color = "white";
      document.getElementById("files").style.color = "white";
      document.getElementById("fileicon2").style.color = "#344352";
      document.getElementById("thefileicon2").style.color = "#344352";
      document.getElementById("database").style.color = "#344352";
      this.leftMode = "database";
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
  mounted() {
    document.getElementById("fileicon").style.color = "#344352";
    document.getElementById("thefileicon").style.color = "#344352";
    document.getElementById("files").style.color = "#344352";
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      leftMode: "file",
      code: 'const str = "hello world"',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true
      },
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
            }
          ]
        }
      ],
      data2: [
        {
          label: "Database1",
          children: [
            {
              label: "table1"
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
#fileicon {
  color: white;
  position: relative;
  top: 16px;
  left: 10px;
}
#thefileicon {
  color: white;
  position: relative;
  top: 16px;
  left: 10px;
}
#fileicon2 {
  color: white;
  position: relative;
  top: 30px;
  left: 30px;
}
#thefileicon2 {
  color: white;
  position: relative;
  top: 1px;
  left: 12px;
}
#files {
  position: relative;
  top: 15px;
  left: 13px;
}
#database {
  position: relative;
  top: 1px;
  left: 17px;
}
#textbutton {
  color: white;
}
</style>
