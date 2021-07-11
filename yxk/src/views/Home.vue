<template>
  <div class="home">
    <banner></banner>
    <home-content></home-content>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/banner/banner.vue'
import homeContent from '@/components/homecontent/homeContent.vue'

export default {
  name: 'Home',
  components: {
    banner,
    homeContent,
  }
}
</script>
<style>
  .home{
    width: 100%;
    justify-content: space-between;
    text-align: center;
  }
</style>
