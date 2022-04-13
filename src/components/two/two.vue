<template>
  <div class="box">
    <el-card shadow="hover" :body-style="{padding:0}">
      <template #header>
        <div class="menu-left">
          <el-menu mode="horizontal" :default-active="activeIndex" >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
        </div>
        <div class="menu-right">
          <el-radio-group v-model="radio1" size="small">
            <el-radio-button label="今日"></el-radio-button>
            <el-radio-button label="本周"></el-radio-button>
            <el-radio-button label="本月"></el-radio-button>
            <el-radio-button label="今年"></el-radio-button>
          </el-radio-group>
          <el-date-picker
            type="daterange"
            v-model="date"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickeroptions"
            size="small"
            unlink-panels
          />
        </div>
      </template>
      <template>
        <contents/>
      </template>
    </el-card>
  </div>
</template>


<script>
import contents from './components/content.vue'
export default {
  components:{contents},
  data() {
    return {
      radio1: "今日",
      activeIndex: "1",
      date: null,
      pickeroptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(e) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7);
              e.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(e) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30);
              e.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(e) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 90);
              e.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
};
</script>


<style lang="scss" scoped>
::v-deep {
  .el-card__header {
      display: flex;
      padding: 0;
      align-items: center;
      justify-content: space-between;
      padding-left:  50px;
  }
  .el-date-editor{
      margin: 0 10px;
  }
}
.box {
  margin-top: 10px;
}
</style>