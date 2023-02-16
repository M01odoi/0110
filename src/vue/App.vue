<template>
  <div class="app">
    <AccountInfo/>
  </div>
</template>

<script>
import AccountInfo from "@/vue/pages/AccountInfo.vue";

export default {
  name: 'App',
  components: {
    AccountInfo
  }
}
</script>

<style lang="scss">
.app {
  display: flex;
  justify-content: center;
  max-width: 720px;
  width: 100%;
  min-width: 360px;
  border: 1px black solid;
}
</style>
