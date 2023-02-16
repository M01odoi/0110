<template>
  <div class="account-services">
    <p class="account-services--title">
      Services
    </p>
    <ul class="account-services--list">
      <li class="account-services--item-list">
        <ServiceItem title="Manual tour booking" :count='11' />
      </li>
      <li class="account-services--item-list">
        <ServiceItem title="Package tours" :count="3"/>
      </li>
      <li class="account-services--item-list">
        <ServiceItem title="Hotels" :count="1"/>
      </li>
    </ul>
    <div class="account-services--footer">
      <h3>Total</h3>
      <h3>15</h3>
    </div>

  </div>
</template>

<script>
import ServiceItem from "@/vue/pages/AccountInfo/ServiceItem.vue";

export default {
  name: "AccountServices",
  components: {ServiceItem}
}
</script>

<style lang="scss" scoped>
.account-services {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 0 2%;
}

.account-services--title {
  font-size: 13px;
  margin: 0 23px 8px 0;
}

.account-services--list {
  width: 65%;
  padding: 15px 38px 15px 0;
  border-top: 1px #DADADA solid;
  border-bottom: 1px #DADADA solid;
}

.account-services--item-list {
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
}

.account-services--footer {
  margin-top: 9px;
  padding-right: 38px;
  width: 65%;
  display: flex;
  justify-content: space-between;
}
</style>