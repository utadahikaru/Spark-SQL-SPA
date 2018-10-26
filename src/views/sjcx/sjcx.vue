<template>

  <el-row>
    <el-col :span="5">
      <el-row>
        <el-button type="text" @click="chooseFile()"><i class="far fa-file fa-2x" id="thefileicon"></i><span id="files">Files</span></el-button>
        <el-button type="text" @click="chooseDatabase()"><i class="fas fa-database fa-2x" id="thefileicon2"></i><span id="database">Databases</span></el-button>
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
          <el-col :span="7" id="queryresult"><a>
              <i class="far fa-comment-alt fa-2x"></i>
              <el-button type="text" @click="chooseResult()" id="queryresult2">Query Result</el-button>
            </a>
          </el-col>
          <el-col :span="7" id="savedqueries"><a>
              <i class="far fa-save fa-2x"></i>
              <el-button type="text" id="savedqueries2" @click="chooseSaved()">Saved Queries</el-button>
            </a>
          </el-col>
          <el-col :span="7" id="queryhistory"><a>
              <i class="fas fa-search fa-2x"></i>
              <el-button type="text" id="queryhistory2" @click="chooseHistory()">Query History</el-button>
            </a>
          </el-col>
        </div>
        <div class="single-row-block4">
          <el-table :data="savedqueries" style="width: 100%">
            <el-table-column prop="date" label="时间" width="180">
            </el-table-column>
            <el-table-column prop="content" label="查询文件" width="180">
            </el-table-column>
          </el-table>
        </div>

      </el-main>
    </el-col>
  </el-row>
</template>
<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/sql/sql.js";
// theme css
import "codemirror/theme/monokai.css";
// require active-line.js
import "codemirror/addon/selection/active-line.js";
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
import "codemirror/addon/search/searchcursor.js";
// hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/selection/active-line.js";
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/match-highlighter.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";

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
      document.getElementById("thefileicon").style.color = "#344352";
      document.getElementById("files").style.color = "#344352";
      document.getElementById("thefileicon2").style.color = "white";
      document.getElementById("database").style.color = "white";
      this.leftMode = "file";
    },
    chooseDatabase() {
      document.getElementById("thefileicon").style.color = "white";
      document.getElementById("files").style.color = "white";
      document.getElementById("thefileicon2").style.color = "#344352";
      document.getElementById("database").style.color = "#344352";
      this.leftMode = "database";
    },
    chooseResult() {
      document.getElementById("queryresult").style.color = "#8db6ec";
      document.getElementById("savedqueries").style.color = "white";
      document.getElementById("queryhistory").style.color = "white";
      document.getElementById("queryresult2").style.color = "#8db6ec";
      document.getElementById("savedqueries2").style.color = "white";
      document.getElementById("queryhistory2").style.color = "white";
    },
    chooseSaved() {
      document.getElementById("savedqueries").style.color = "#8db6ec";
      document.getElementById("queryhistory").style.color = "white";
      document.getElementById("queryresult").style.color = "white";
      document.getElementById("savedqueries2").style.color = "#8db6ec";
      document.getElementById("queryhistory2").style.color = "white";
      document.getElementById("queryresult2").style.color = "white";
    },
    chooseHistory() {
      document.getElementById("queryhistory").style.color = "#8db6ec";
      document.getElementById("queryresult").style.color = "white";
      document.getElementById("savedqueries").style.color = "white";
      document.getElementById("queryhistory2").style.color = "#8db6ec";
      document.getElementById("queryresult2").style.color = "white";
      document.getElementById("savedqueries2").style.color = "white";
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
    setTimeout(() => {
      (this.styleSelectedText = true), (this.cmOption.styleActiveLine = true);
    }, 1800);
  },
  data() {
    return {
      savedqueries: [
        {
          date: "8小时前",
          content: "nm$l.sql"
        }
      ],
      leftMode: "file",
      bottomMode: "result",
      code: "create table nm$l",
      cmOptions: {
        // codemirror options
        tabSize: 4,
        styleActiveLine: true,
        mode: "text/x-sql",
        theme: "monokai",
        lineNumbers: true,
        line: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        hintOptions: {
          // 当匹配只有一项的时候是否自动补全
          completeSingle: false
        },
        keyMap: "sublime",
        styleActiveLine: false,
        styleSelectedText: false,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        extraKeys: { Ctrl: "autocomplete" }
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
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#queryhistory {
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 20px;
  color: white;
}
#queryhistory2 {
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 20px;
  color: white;
}
#queryresult {
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 20px;
  color: #8db6ec;
}
#queryresult2 {
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 20px;
  color: #8db6ec;
}
#savedqueries {
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 20px;
  color: white;
}
#savedqueries2 {
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 20px;
  color: white;
}
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
  color: #344352;
  position: relative;
  top: 30px;
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
  top: 30px;
  left: 12px;
}
#files {
  position: relative;
  top: 30px;
  left: 13px;
  color: #344352;
}
#database {
  position: relative;
  top: 30px;
  left: 17px;
  color: white;
}
#textbutton {
  color: white;
}
</style>
