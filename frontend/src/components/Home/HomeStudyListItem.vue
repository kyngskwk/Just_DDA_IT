<template>
  <v-card class="mt-5 mb-0 rounded-xl roomcard" style="width:100%">
    <div class="headline mb-1 ml-4">
      <p class="for-color rounded-xl text-center mb-0 mt-3 mx-3">{{ homeStudyItem.roomTitle }}</p>
    </div>
    <v-list-item three-line>
      <v-list-item-content class="pt-0">
        <div>
          <v-chip
            class="mt-2 mr-1 hashtag"
            v-for="tag in homeStudyItem.roomHashtag"
            outlined
            :key="tag"
          >{{ tag }}</v-chip>
        </div>
      </v-list-item-content>

      <v-list-item-avatar tile class="my-1 rounded-xl" size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn class="button-color text--white" text>참여하기!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'HomeStudyListItem',
  props: {
    homeStudyItem: {
      type: Object
    }
  }
}
</script>

<style>
.for-color {
  font-family: "Black Han Sans", sans-serif;
  background-color: #fd462e;
  color: white;
}

.button-color {
  background-color: #fd462e;
}
</style>
