<template>
  <div id="app">
        <top-nav></top-nav>
    <router-view/>
        <bottom-content></bottom-content>
  </div>
</template>
<script>
  import topNav from '@/components/topNav/topNav.vue'
    import bottomContent from '@/components/bottomContent/bottomContent.vue'

export default {
  name: 'Home',
   components: {
            topNav,
            bottomContent
        }
}
</script>
<style>
 body{
   margin: 0;
 }
  .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    }

    a {
        text-decoration: none;
    }
     ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }
       em {
    color: #ff9a00;
    font-style: normal;
}
  dl,
    dt,
    dd {
        margin: 0;
        padding: 0;
    }

</style>
