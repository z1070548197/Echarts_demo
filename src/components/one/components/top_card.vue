<template>
  <el-card class="box-card" shadow="hover">
    <div class="one">{{ title }}</div>
    <div class="two">{{ value }}</div>
    <div class="three">
      <slot name="content"> </slot>
    </div>
    <slot name="footer">
      <div class="four">
        {{ FourTitle }}
        <span class="four__emphasis">{{ FourValue }}</span>
      </div>
    </slot>
  </el-card>
</template>


<script>
export default {
  props: ["title", "value", "FourTitle", "FourValue"],
};
</script>


<style lang="scss" >
.one {
  font-size: 12px;
  color: #999;
}
.two {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.three{
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom:4px;
}
.four {
  color: #666;
  font-size: 12px;
  &__ {
    color: #333;
    margin-left: 5px;
    font-weight: 700;
  }
}
.compare-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare{
    font-size: 12px;
    margin-top:3px;
    color: #666;
    display: flex;
    align-items: center;
    .increase{
      width: 0;
      height:0;
      border-width: 4px;
      border-color: transparent transparent red transparent ;
      border-style:solid;
      margin: 0 0 2px 3px;
    }
    .emphasis{
      color:#000;
    }
    .decrease{
      width: 0;
      height:0;
      border-width: 4px;
      border-color: green transparent transparent transparent ;
      border-style:solid;
      margin: 0 0 0 3px;
    }
  }
}
.total-users-wrapper{
  display: flex;
  flex-direction: row;
  .compare{
    font-size: 12px;
    margin-top:3px;
    color: #666;
    display: flex;
    align-items: center;
    flex:1;
    .increase{
      width: 0;
      height:0;
      border-width: 4px;
      border-color: transparent transparent red transparent ;
      border-style:solid;
      margin: 0 0 2px 3px;
    }
    .emphasis{
      color:#000;
      margin-left: 5px;
      font-weight: 600;
    }
    .decrease{
      width: 0;
      height:0;
      border-width: 4px;
      border-color: green transparent transparent transparent ;
      border-style:solid;
      margin: 3px 0 0 3px;
    }
  }
}
</style>