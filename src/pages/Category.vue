<template>
  <v-app id="app">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px;" class="ml-0 pl-4">
        <v-btn text to="/" color="white">
          <span class="title ml-1 mr-5">SAP&nbsp;<span class="font-weight-light">info</span></span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer />
      <v-btn href="#/list" icon>
        Artykuły
      </v-btn>
      <div id="buttons">
        <v-btn icon>
          Kategorie
        </v-btn>
      </div>
      <v-btn href="#/info" icon>
        INFO
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <CategoryFilter />
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CategoryFilter from "../components/CategoryFilter";
export default {
  name: "Start",

  components: {
    CategoryFilter,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#buttons {
  padding: 50px;
}
#app {
  background-color: #efefef;
}
</style>
