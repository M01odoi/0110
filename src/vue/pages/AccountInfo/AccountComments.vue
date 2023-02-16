<template>
  <div class="account-comments">
    <CommentsHeader class="account-comments--header"/>
    <ul class="account-comments--list">
      <li
          class="account-comments--item-list"
          v-for="(item, index) in defaultComments" :key="index"
      >
        <CommentItem
            :name=item.name
            :date=item.date
            :comment=item.comment
        />
      </li>
    </ul>
    <CommentForm @add-comment="addComment" />
  </div>
</template>

<script>
import CommentsHeader from "@/vue/pages/AccountInfo/CommentsHeader.vue";
import {defaultComments} from "@/js/defaultComments";
import CommentItem from "@/vue/pages/AccountInfo/CommentItem.vue";
import CommentForm from "@/vue/forms/CommentForm.vue";

export default {
  name: "AccountComments",
  components: {CommentForm, CommentItem, CommentsHeader},
  data() {
    return {
      defaultComments,
      comment: '',
    }
  },
  methods: {
    addComment(comment) {
      defaultComments.unshift(comment)
    }
  }
}
</script>

<style lang="scss" scoped>
.account-comments {
}

.account-comments--header {
  margin: 18px 2% 0;
}

.account-comments--list {
  margin: 13px 2%;
}

.account-comments--item-list {
  margin-bottom: 17px;

  &:last-child {
    margin-bottom: 22px;
  }
}
</style>