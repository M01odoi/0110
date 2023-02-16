<template>
  <div class="account-info">
    <AccountHeader />
    <AccountServices />
    <AccountComments />
  </div>
</template>

<script>
import AccountHeader from "@/vue/pages/AccountInfo/AccountHeader.vue";
import AccountServices from "@/vue/pages/AccountInfo/AccountServices.vue";
import AccountComments from "@/vue/pages/AccountInfo/AccountComments.vue";

export default {
  name: "AccountInfo",
  components: {AccountComments, AccountServices, AccountHeader}
}
</script>

<style lang="scss" scoped>
.account-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>