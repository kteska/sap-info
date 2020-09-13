<template>
  <v-container>
    <!-- Search component and filtr button -->
    <div id="search">
      <v-text-field label="Szukaj" clearable v-model="searchedName" rounded solo @click:clear="reload" @change.native="keywordChanged" dense append-icon="mdi-magnify" color="primary"></v-text-field>
    </div>

    <!-- Articles List -->
    <div id="cards">
      <div v-for="article in this.articles" :key="article.title">
        <v-card height="290" width="300" :hover="true" @click.left="loadDialog(article._id)">
          <v-img class="white--text align-end" height="200px" :src="article.photo"> </v-img>

          <v-card-subtitle class="pb-0">{{ article.category }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div id="titleCard">{{ article.title }}</div>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- Dialog - article text -->
    <v-dialog v-model="dialog" fullscreen>
      <v-card class="elevation-12">
        <v-col cols="auto" id="dialogInfo">
          <v-img height="110px" width="220px" src="../assets/saplogo.svg"></v-img>
          <div id="header">
            <v-card-title id="titleDialog">{{ this.article_title }} </v-card-title>
          </div>
          <v-divider></v-divider>
          <v-card-subtitle>
            <v-chip class="ma-2" dark color="primary" v-for="tag in this.article_tags" :key="tag"> {{ tag }} </v-chip>
          </v-card-subtitle>

          <v-card-text class="description">
            <div id="articleText">{{ this.article_description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn id="closeButton" color="primary" text @click="dialog = false">
              Zamknij
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { getArt } from "../api/api";

export default {
  data() {
    return {
      // for searching
      searchedName: "",

      //select
      categories: [],
      category: null,

      // for all articles in cards
      articles: [],

      // for one article
      article_ID: null,
      article_tags: [],
      article_title: null,
      article_description: null,
      article_category: null,
      dialog: false,
    };
  },
  computed: {},

  created() {
    this.getAll();
  },

  methods: {
    reload() {
      this.getAll();
    },

    keywordChanged() {
      if (this.searchedName !== null) {
        this.articles = [];
      }
      getArt(`http://srv03.mikr.us:20119/API/articles/search/${this.searchedName}`).then((res) => {
        res.data.articles.forEach((element) => {
          this.articles.push(element);
        });
      });
    },

    getAll() {
      this.articles = [];
      getArt("http://srv03.mikr.us:20119/API/articles").then((res) => {
        res.data.articles.forEach((element) => {
          this.articles.push(element);
        });
      });
    },

    loadDialog(id) {
      this.article_ID = id;
      this.dialog = true;
      this.article_tags = [];
      this.getArticle();
    },

    getArticle() {
      getArt(`http://srv03.mikr.us:20119/API/articles/${this.article_ID}`).then((res) => {
        res = res.data.article;
        this.article_title = res.title;
        this.article_description = res.description;
        this.article_category = res.category;

        res.tags.forEach((element) => {
          this.article_tags.push(element);
        });
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
/* Search component */
#search {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  justify-items: center;
}

/* Cards - pokemon list */
#cards {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  grid-row-gap: 35px;
  justify-items: center;
  align-items: stretch;
}

.card {
  height: 160px;
  width: 300px;
  text-align: justify;
}

#titleCard {
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
}

.image {
  width: 155px;
  height: 155px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.85;
  position: absolute;
  width: 100%;
}

#names {
  font-size: 15px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
}

/* Dialog component */
#dialogInfo {
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 28px;
}

#titleDialog {
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
}

#header {
  padding: 20px;
}

#articleText {
  border: outset #cfd8dc 3px;
  padding: 30px;
}

.tags {
  padding: 10px;
  text-align: center;
}

.description {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  text-align: justify;
  padding: 100px;
  line-height: 22pt;
}

@media screen and (max-width: 700px) {
  #cards {
    grid-template-columns: 100%;
    grid-row-gap: 30px;
  }

  #search {
    grid-template-columns: 100%;
    grid-row-gap: 10px;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    border: solid 20px transparent;
  }

  .card {
    height: 150px;
    width: 150px;
  }

  .image {
    width: 120px;
    height: 120px;
  }

  #names {
    font-weight: 600;
    font-size: 11px;
  }
}

@media screen and (min-width: 700px) and (max-width: 1200px) {
  #cards {
    grid-template-columns: 50% 50%;
    grid-row-gap: 30px;
  }

  .card {
    height: 150px;
    width: 150px;
  }

  .image {
    width: 120px;
    height: 120px;
  }

  #names {
    font-weight: 600;
    font-size: 11px;
  }
}

@media screen and (min-width: 1200px) {
  #cards {
    grid-template-columns: 33% 33% 33%;
    grid-row-gap: 30px;
  }
}
</style>
