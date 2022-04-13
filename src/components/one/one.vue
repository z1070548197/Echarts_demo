<template>
  <div >
    <el-row :gutter="20" >
      <el-col  :span="6" ref="cards">
        <sales-volume :info="info.oneCard" />
      </el-col>
      <el-col  :span="6">
        <NumberUsers :info="info.twoCard" />
      </el-col>
      <el-col :span="6">
        <OrderQuantity :info="info.threeCard" />
      </el-col>
      <el-col :span="6">
        <TransactionUser :info="info.fourCard" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SalesVolume from "./components/SalesVolume.vue";
import NumberUsers from "./components/NumberUsers.vue";
import OrderQuantity from "./components/OrderQuantity.vue";
import TransactionUser from "./components/TransactionUser.vue";
export default {
  components: {
    SalesVolume,
    NumberUsers,
    OrderQuantity,
    TransactionUser,
  },
  data() {
    return {
      info: {
        oneCard: {
          title: "累计销售额",
          value: "¥ 46,068,153",
          FourTitle: "昨日销售额",
          FourValue: "¥ 30,000,000",
        },
        twoCard: {
          title: "累计订单量",
          value: "2,893,889",
          FourTitle: "昨日订单量",
          FourValue: "2,000,000",
        },
        threeCard: {
          title: "今日交易用户数",
          value: "454,776",
          FourTitle: "退货率",
          FourValue: "5.04%",
        },
        fourCard: {
          title: "累计用户数",
          value: "¥ 46,068,153",
        },
      },
    };
  },
  beforeMount(e){
    
  },
  mounted(){
     this.$newapp.$emit('funs',this.info)
  }
};
</script>

<style lang="scss" scoped>

</style>