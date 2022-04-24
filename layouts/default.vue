<template>
  <v-app>
    <app-header class="Mobile"></app-header>
    <Header class="HeadLanding" />
    <div class="pages">
      <Nuxt />
    </div>
    
    <app-footer></app-footer>
    
  </v-app>
</template>

<script>
import AppFooter from "./AppFooter/AppFooter.vue";
import AppHeader from "./AppHeader/AppHeader.vue";
import Header from "./AppHeader/Header.vue";
export default {
  components: { AppFooter, AppHeader, Header },
  name: "DefaultLayout",
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400&display=swap");

* {
  direction: rtl;
}
.Mobile {
  display: none;
}
.v-application--wrap{
  max-width: fit-content;
}

@media screen and (max-width: 992px) {
  .Mobile {
    display: block;
  }
  .HeadLanding {
    display: none;
  }
  .v-app-bar.v-app-bar--fixed{
    position: sticky;
  }
}

* {
  margin: 0px;
  padding: 0px;
}
html {
  scroll-behavior: smooth;
}

body,
.v-application {
  font-size: 14px;
  font-family: "Almarai", sans-serif;
  color: #444;
}
ul {
  list-style-type: none;
}
ul,
p {
  margin: 0px;
  padding: 0px;
  margin-bottom: 0px;
}
a,
.v-application a {
  color: #444;
  text-decoration: none;
}
img {
  max-width: 100%;
}
.container_cc {
  padding: 0px 100px;
}

/* body of pages */
.pages {
  margin-top: 80px;
}
.page {
  margin-top: 15px;
  min-height: calc(100vh - 300px);
}

@media (max-width: 1100px) {
  .container_cc {
    padding: 0px 50px;
  }
}
</style>
