<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    使用以下技术栈：<br/>
    vue+webpack+vue-router+vue-resource
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'about'
    }//这是vue的模型
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
