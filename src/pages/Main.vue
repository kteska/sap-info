<template>
  <v-app id="app">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px;" class="ml-0 pl-4">
        <v-btn text color="white">
          <span class="title ml-1 mr-5">SAP&nbsp;<span class="font-weight-light">info</span></span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer />
      <v-btn href="#/list" icon>
        Artykuły
      </v-btn>
      <div id="buttons">
        <v-btn href="#/filter" icon>
          Kategorie
        </v-btn>
      </div>
      <v-btn href="#/info" icon>
        INFO
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <div id="images">
          <v-carousel hide-delimiters height="900">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
          </v-carousel>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Start",

  components: {},

  data() {
    return {
      items: [
        {
          src: require("../assets/saparts.png"),
        },
        {
          src: require("../assets/page1.png"),
        },
        {
          src: require("../assets/page2.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
#buttons {
  padding: 50px;
}
#app {
  background-color: #efefef;
}
#images {
  background-size: 100%;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}
</style>
