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
        <v-card class="mx-auto mt-12 elevation-12 cardInfo">
          <v-system-bar></v-system-bar>

          <v-card-title id="titleInfo">O aplikacji</v-card-title>

          <v-card-text class="py-0 infoText">
            <b>SAP info</b> to aplikacja umożliwiająca wyszukiwanie artykułów o SAP. Każdy z nich ma odpowiednie tagi i kategorie po których można je filtrować. Artykuły te są podzielone na dwie
            kategorie: SAP Moduły i SAP Rozwiązania.
            <br />
            <br />
            <b>SAP</b> - zintegrowany modułowy pakiet oprogramowania ERP stworzony przez SAP, wspierający zarządzanie w dużych i średnich organizacjach różnych branż.
            <br />
            Oprogramowanie SAP wspiera każdy aspekt działalności firmy. Pozwala to na lepsze i skuteczniejsze zarządzanie poszczególnymi działami oraz szybką i wydajną komunikację między nimi. Co
            ważne, rozwiązania SAP szczególnie przydają się w sytuacjach kryzysowych. Błyskawiczny dostęp do danych i możliwość analizy w czasie rzeczywistym pozwala na szybkie podejmowanie decyzji i
            wprowadzanie zmian w planach. Dzięki temu można całkowicie wyeliminować przestoje w produkcji czy błędy ludzkie w zakresie logistyki czy zarządzania dostawami. SAP to także nowa jakość
            zarządzania ludźmi. Oferowane rozwiązania pozwalają na lepszą kontrolę, a także optymalne wykorzystanie posiadanych kadr. Specjalne narzędzia pozwalają przy tym na planowanie rozwoju
            pracowników w taki sposób, by ograniczyć koszty związane z dostosowaniem firmy do zmieniających się potrzeb rynku.
          </v-card-text>
        </v-card>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Info",

  components: {},

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
.infoText {
  font-size: 16px;
  justify-items: center;
  align-items: center;
  text-align: justify;
  padding: 40px;
  line-height: 26pt;
}
#titleInfo {
  font-size: 25px;
  margin-left: 20px;
}
.cardInfo {
  width: 800px;
  height: 660px;
}
@media screen and (max-width: 800px) {
  .cardInfo {
    width: 600px;
    height: 1100px;
  }
}
</style>
