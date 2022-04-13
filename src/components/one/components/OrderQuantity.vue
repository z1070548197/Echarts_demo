<template>
  <card
    :title="info.title"
    :value="info.value"
    :FourTitle="info.FourTitle"
    :FourValue="info.FourValue"
  >
    <template #content>
      <v-chart class="chart" :option="option"> </v-chart>
    </template>
    <template #footer v-if="info.FourValue == undefined"> 插槽 </template>
  </card>
</template>

<script>
import myMixin from "../../../mixin/top_card";
export default {
  mixins: [myMixin],
  data() {
    return {
      option:{
         color: ["#3398DB"],
      //渲染的图
      series: [
        {
          type: "bar",
          data: [41, 123, 12, 32, 12, 43,23,32,23,3,23],
          barWidth: "60%", //柱状图宽度
        },
      ],
      xAxis: {
        type: "category", //柱状图类型
        data: ["00:00", "01:00", "03:00", "04:00", "05:00", "06:00","06:00","06:00","06:00","06:00"],
        show: false,
      },
      yAxis: {
        show: false,
      },
      grid: {
        //布局
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      }
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>