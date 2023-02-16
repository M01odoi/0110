<template>
  <div class="comments-header">
    <div class="comments-header--title">
      <h3>Latest reviews</h3>
      <p class="comments-header--title-btn">
        All reviews
      </p>
    </div>
    <div class="comments-header--count-reviews">
      <div class="comments-header--count">
        <img
            src="@/assets/icons/like.png"
            alt="like"
            class="comments-header--count-icon"
        >
        <p>131</p>
      </div>
      <div class="comments-header--count">
        <img
            src="@/assets/icons/comment.png"
            alt="comment"
            class="comments-header--count-icon"
        >
        <p>14</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsHeader"
}
</script>

<style lang="scss" scoped>
.comments-header {
  display: flex;
  justify-content: space-between;
}

.comments-header--title {
  display: flex;
  align-items: center;
}

.comments-header--title-btn {
  color: #005DA1;
  cursor: pointer;
  margin-left: 8px;
  text-decoration: underline;
}

.comments-header--count-reviews {
  display: flex;
}

.comments-header--count {
  display: flex;
  align-items: center;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
}

.comments-header--count-icon {
  margin-right: 3px;
  cursor: pointer;
}
</style>