<template>
  <v-app>
    <!-- navbar -->
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>
    
    <!-- main -->
    <v-container class="spacing-playground pa-6 mb-10" fluid>
      <v-main>
        <router-view />
      </v-main>
    </v-container>

    <!-- bottom navigation -->
    <v-bottom-navigation
    v-model="bottomNav"
    fixed
    >
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/license">
       <span>License</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="/mystudy">
        <span>MyStudy</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      
      <v-btn to="/rooms">
       <span>Rooms</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      
      <v-btn to="/setting">
        <span>Setting</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
