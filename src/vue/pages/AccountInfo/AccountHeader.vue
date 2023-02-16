<template>
  <div class="account-header">
    <div class="account-header--img-wrp">
      <img
          src="@/assets/images/avatarEva.png"
          alt="Avatar"
          class="account-header--img"
      >
    </div>
    <div class="account-header--info">
      <h3>
        Eva Jonson
      </h3>
      <p class="account-header--profession">
        Sales Manager
      </p>
      <p class="account-header--motto">
        I will find the best offers for you.
        <br/>
        My services are absolutely free.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountHeader"
}
</script>

<style lang="scss" scoped>
.account-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2%;
}

.account-header--img-wrp {
  min-width: 124px;
}
.account-header--img {
  border-radius: 50%;
  display: inline-block;
  width: 100%;
  margin-top: 15px;
}

.account-header--info {
  margin: 21px 0 15px 2%;
  max-width: 400px;
  width: 100%;
}

.account-header--profession {
  font-size: 12px;
  margin: 2px 0 5px;
  color: #808080;
}

.account-header--motto {
  background: #FFFBC8;
  border: 1px #DADADA solid;
  max-width: 500px;
  width: 113%;
  min-height: 54px;
  padding: 6px 2% 8px 45px;
  position: relative;
  left: -45px;
  display: inline-block;
  z-index: -1;
}
</style>