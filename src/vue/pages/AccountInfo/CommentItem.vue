<template>
  <div class="comment-item">
    <div class="comment-item--title">
      <h3>{{name}}</h3>
      <p class="comment-item--date">{{date}}</p>
    </div>
    <p class="comment-item--comment">{{comment}}</p>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    name: String,
    date: String,
    comment: String,
  },
}
</script>

<style lang="scss" scoped>
.comment-item {
}
.comment-item--title {
  display: flex;
  align-items: center;
}

.comment-item--date {
  margin-left: 8px;
  font-size: 11px;
  color: #808080;
}

.comment-item--comment {
  position: relative;
  padding: 20px 15px;
  background: #F2FBFF;
  border: 1px #C4CBCF solid;
  margin-top: 15px;
  &::before {
    content: '';
    position: absolute;
    display: block;
    rotate: 90deg;
    top: -5px;
    left: 22px;
    z-index: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #F2FBFF;
    width: 0;
    height: 0;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    rotate: 90deg;
    top: -7px;
    left: 20px;
    z-index: -1;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 13px solid #C4CBCF;
    width: 0;
    height: 0;
  }
}
</style>