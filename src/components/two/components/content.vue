<template>
  <div class="box">
    <div class="left">
      <v-chart :option="option"></v-chart>
    </div>
    <div class="right">
      <div class="right__title">排行榜</div>
      <div class="right__list">
        <div class="right__lists" v-for="(item, index) in lists" :key="index">
          <div
            :class="[
              'right__lists__num',
              +index <= 3 ? 'right__lists__num-on' : '',
            ]"
          >
            {{ ++index }}
          </div>
          <div class="right__lists__name">{{ item.name }}</div>
          <div class="right__lists__money">{{ item.money }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      /** @type EChartsOption */
      option: {
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: "12",
            color: "#666",
          },
          left: 30,
          top: 10,
        },
        color: ["#3398DB"],
        xAxis: {
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {},
        series: {
          type: "bar",
          data: [123, 213, 434, 233, 543, 543, 654, 765, 312, 312, 432, 432],
          barWidth: "50%",
        },
        grid: {
          left: 70,
          right: 70,
          top: 70,
          bottom: 50,
        },
      },
      lists: [
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
        {
          name: "肯德基",
          money: "41212",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  height: 280px;
  .left {
    width: 75%;
  }
  .right {
    flex: 1;
    padding: 10px 20px 10px 10px;
    height: 100%;
    box-sizing: border-box;
    &__title {
      margin: 10px;
      font-size: 12px;
      color: #666;
      font-weight: 500;
    }
    &__list {
      height: 100%;
      overflow: auto;
      &s {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &__num {
          text-align: center;
          color: #333;
          line-height: 20px;
          width: 20px;
          height: 20px;
        }
        &__num-on {
          background: #000;
          border-radius: 50%;
          color: #fff;
          font-weight: 500;
        }
        &__name {
          margin-left: 10px;
          color: #333;
          font-size: 12px;
          flex: 1;
        }
        &__money {
          color: #333;
          font-size: 12px;
        }
      }
    }
  }
}
</style>