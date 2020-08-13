<template>
  <div>
    <v-list>
      <v-list-item v-for="member in this.members" :key="member.id" @click="goprofile(member)">
        <v-list-item-avatar>
          <v-img v-if="member.userThumbnail != null" :src="'data:' + member.imageType + ';base64,' + member.userThumbnail"></v-img>
          <v-img v-if="member.userThumbnail == null" src="../../../public/profile/profile.png"></v-img>

        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="member.userName">{{ member.userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'UserListItem',
  methods: {
    goprofile(member) {
      this.$router.push(`/mystudy/${member.id}`)
    },
  },
  props: {
    members: {
      type: Array
    }
  }
}

</script>

<style>

</style>