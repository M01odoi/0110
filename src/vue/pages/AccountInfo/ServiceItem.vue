<template>
  <div class="service-item">
    <div
        class="service-item--progress-bar"
        :style=progressStyle
    >
      {{title}}
    </div>
    <p class="service-item--count">
      {{count}}
    </p>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    title: String,
    count: Number,
  },
  computed: {
    //I decided that 15 is the maximum value and fill the progress bar depending on the part of the number 15
    progressWidth: function (){
      return `${this.count*100/15}%`
    },
    progressColor: function (){
      return this.count>7?'#B1E19B':'#ACE2F8'
    },
    progressStyle: function (){
      return {width: this.progressWidth, background: this.progressColor}
    }
  }
}
</script>

<style lang="scss" scoped>
.service-item {
  display: flex;
  justify-content: space-between;
}
.service-item--progress-bar {
  font-size: 13px;
  min-width: 13%;
  max-width: 100%;
  white-space: nowrap;
  border-radius: 4px;
  padding: 4px 4px 4px 10px;
}

.service-item--count {
  font-size: 13px;
  margin-left: 10px;
}
</style>