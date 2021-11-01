<template>
  <div>
    index<br>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLogo />
    <BaseHeader />
  </div>
</template>

<script>
export default {
  asyncData({ route, isDev, app, $axios }){
    console.log('asyncData')
    console.log('route.name:', route.name)
    console.log('isDev:', isDev)
    console.log('app:', app)
    console.log('app.$axios:', app.$axios)
    console.log('$axios:', $axios)
    console.log('=============')
  },
  fetch( context ){
    console.log('fetch')
    console.log( context.route.name )
  },
  created(){
    console.log('created')
  },
}
</script>
