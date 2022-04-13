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
  data(){
    return{
      option:{
 xAxis: {
        type: "category",
        data: [],
        boundaryGap:false //x线两侧彻底不显示
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [
            620, 432, 220, 312, 321, 434, 231, 432, 545, 345, 767, 878, 989,
            324,
          ],
          areaStyle: {
            color: "purple", //曲线图填充颜色
          },
           //线样式
          lineStyle: {
            width: 0,
            height: 0,
          },
          //点样式
          itemStyle: {
            opacity: 0, //透明度
          },
          smooth: true, //线更平滑
        },
      ],
      grid:{ //布局
        top:0,
        bottom:0,
        left:0,
        right:0
      }
      }
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>