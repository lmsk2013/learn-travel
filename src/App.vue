<template>
  <div id="app">
    <!-- 显示的是当前路由地址锁所对应的内容 -->
    <!-- 路由中的内容方到内存之中，下次再加载不再请求-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
