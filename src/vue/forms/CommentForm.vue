<template>
  <form
      class="comment-form"
      @keyup.ctrl.enter="submit"
      @submit.prevent="submit"
  >
    <textarea
        v-model="value"
        class="comment-form--textarea"
    />
    <button class="comment-form--btn">
      Send a message
    </button>
  </form>
</template>

<script>
export default {
  name: "CommentForm",
  data() {
    return {
      value: '',
    }
  },
  methods: {
    submit() {
      if (this.value){
        const newComment = {
          name: "Alex Svechkarev",
          date: this.createDate(),
          comment: this.value
        }
        this.$emit('add-comment', newComment)
        this.value = ''
      }
    },
    createDate() {
      const timestamp = new Date().getTime();
      const date = new Date(timestamp);
      let arr =  date.toString().slice(4,15).split(' ')
      let temp = arr[0]
      arr[0] = arr[1]
      arr[1] = temp
      return arr.join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-form {
  background: #F2F2F2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 34px;
}

.comment-form--textarea {
  border: 1px black solid;
  border-radius: 1px;
  resize: none;
  width: 96%;
  margin-bottom: 23px;
  height: 63px;
}

.comment-form--btn {
  background: #FDD639;
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  padding: 13px 20% 11px;
  border-radius: 23px;
  border: none;
  cursor: pointer;
}
</style>