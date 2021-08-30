<template>
  <main class="app-wrapper not-found">
    <h1>404 page not found :(</h1>
    <router-link :to="{ name: '/' }">Back to home</router-link>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translateY(-50%) translateX(-50%);
}
</style>