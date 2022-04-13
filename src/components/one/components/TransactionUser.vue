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
    <template #footer v-if="info.FourValue == undefined">
      <div class="total-users-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
  </card>
</template>


<script>
import myMixin from "../../../mixin/top_card";
export default {
  mixins: [myMixin],
  data() {
    return {
      option: {
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        xAxis: {
          type: "value",
          show: false, //隐藏坐标系
          min: 0, //设置y坐标最高 最低值
          max: 250,
        },
        yAxis: {
          type: "category",
          show: false,
        },
        series: [
          {
            type: "bar",
            stack: "总量", //设置系列图标名，相同的会合并
            data: [200],
            barWidth: 10,
            itemStyle: {
              color: "#45c956",
            },
          },
          {
            type: "bar",
            stack: "总量", //设置系列图标名，相同的会合并
            data: [250],
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type: "custom", //自定义类型
            data: [200],
            stack: "总量",
            renderItem: (params, api) => {
              const value = api.value(0); //拿到当前坐标的data
              const endPoint = api.coord([value, 0]); //计算坐标位置
              return {
                //返回需要创建的样式
                type: "group", //分组表
                position: endPoint,
                children: [
                  {
                    type: "path", //创建svg
                    shape: {
                      d: "M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z",
                      x: -5,
                      y: -16,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "green", //填充色
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M131.974144 648.752128c-30.418944 30.430208-6.474752 84.301824 34.917376 84.301824L858.258432 733.053952c42.899456 0 65.325056-53.85216 34.916352-84.301824L547.487744 302.569472c-19.930112-19.974144-49.374208-19.95264-69.327872 0L131.974144 648.752128z",
                      x: -5,
                      y: 6,
                      width: 10,
                      height: 10,
                      layout: "cover", //根据定义的 填满
                    },
                    style: {
                      fill: "green", //填充色
                    },
                  },
                ],
              };
            },
          },
        ],
      },
    };
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>