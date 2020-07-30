<template>
  <v-card class="mx-auto my-4" max-width="468" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">자격증 이름 여기에 쓰기</div>
        <v-list-item-title class="headline mb-1">{{ licenseStudyItem.roomTitle }}</v-list-item-title>
        <v-list-item-subtitle>{{ licenseStudyItem.roomHashtag }}</v-list-item-subtitle>
      </v-list-item-content>
    
      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar></v-list-item>

      <v-card-actions>
        <v-btn to="#" color="primary">참여하기</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LicenseStudyListItem',
  props: {
    licenseStudyItem: {
      type: Object
    }
  }
}
</script>

<style>

</style>
