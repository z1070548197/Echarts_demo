<template>
  <card
    :title="info.title"
    :value="info.value"
    :FourTitle="info.FourTitle"
    :FourValue="info.FourValue"
  >
    <template #content>
      <div class="compare-wrapper">
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
    <template #footer v-if="info.FourValue == undefined"> 插槽 </template>
  </card>
</template>

<script>
import myMixin from "../../../mixin/top_card";
export default {
  mixins: [myMixin],
  created() {},
};
</script>

<style lang="scss" scoped>

</style>