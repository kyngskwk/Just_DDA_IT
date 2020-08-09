<template>
  <div>
    <v-row justify="between" class="mt-3">
      <v-col cols="4" md="2">
        <v-select v-model="searchselect" :items="searchAvailable" label="카테고리"></v-select>
      </v-col>
      <v-col cols="8">
        <v-text-field v-model="searchThing" label="검색어를 입력하세요" @keypress.enter="search" :content="content" :isSearch="isSearch"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script scoped>
export default {
  name: 'RoomSearch',
  data() {
    return {
      isSearch: false,
      searchselect: '키워드',
      searchAvailable: [
        '키워드',
        '자격증',
        '방장'
      ],
      searchThing: '',
      content: []
    }
  },
  methods: {
    search() {
      this.isSearch = true
      this.content.push({'category':this.searchselect, 'searchThing':this.searchThing})
    }
  }
}
</script>

<style scoped>
.search-bar {
  width: 100%;
  margin-top: 30px;
  border: 1px solid #53A451;
  border-radius: 5px
}
</style>