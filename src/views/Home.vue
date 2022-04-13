<template>
  <div class="home">
    <one />
    <two />
  </div>
</template>

<script>
// @ is an alias to /src
import one from '../components/one/one.vue'
import two from '../components/two/two.vue'
export default {
  name: "Home",
  components:{
    one,two
  }
};
</script>

<style lang="scss" scoped>
  .home{
    padding:10px;
  }
</style>
