<template>
  <div>
    about<br>
    {{ now }}<br>
    <img src="~/assets/images/nuxt-course.jpg" width="300"><br>
    <div class="red-b">assets/cssのテスト</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      now: null
    }
  },
  mounted(){
    this.now = this.$dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}
</script>

<style>

</style>