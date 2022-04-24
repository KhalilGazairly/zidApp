<template>
  <div>
    <v-app-bar :clipped-left="clipped"  app>
      <!-- <v-toolbar-title v-text="title" /> -->
      <div class="header_p">
        <NuxtLink :to="localePath('/')" class="logo">
        <img src="/zid-logo1.svg" alt="" srcset="" />
          <!-- <img src="/logo.svg" /> -->
        </NuxtLink>
      </div>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <NuxtLink :to="localePath('/')" class="logo">
          <v-list-item @click.native="right = !right">
            <div class="header_logo text-center">
              <img src="/zid-logo1.svg" alt="" srcset="" />
            </div>
            <!-- <v-list-item-title class="text-center"
              >zid app</v-list-item-title
            > -->
          </v-list-item>
        </NuxtLink>

        <v-divider></v-divider>
        <ul>
          <NuxtLink :to="localePath('/')">
            <v-list-item link>
              <!-- <font-awesome-icon icon="house" class="fa" /> -->

              <v-list-item-title class="text-center">{{
                $t("الرئيسية")
              }}</v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <v-divider></v-divider>

          <div>
            <NuxtLink :to="localePath('/')">
              <v-list-item link>
                <!-- <font-awesome-icon icon="user-secret" class="fa" /> -->
                <v-list-item-title class="text-center">
                  {{ $t("التصنيفات") }}</v-list-item-title
                >
              </v-list-item>
            </NuxtLink>
            <v-divider></v-divider>
          </div>

          <div>
            <NuxtLink :to="localePath('/')">
              <v-list-item link>
                <!-- <font-awesome-icon icon="user" class="fa" /> -->
                <v-list-item-title class="text-center">
                  {{ $t("التطبيقات") }}</v-list-item-title
                >
              </v-list-item>
            </NuxtLink>
            <v-divider></v-divider>
          </div>

          <div>
            <NuxtLink :to="localePath('/')">
              <v-list-item link>
                <!-- <font-awesome-icon icon="user-secret" class="fa" /> -->
                <v-list-item-title class="text-center">
                  {{ $t("طور تطبيق") }}</v-list-item-title
                >
              </v-list-item>
            </NuxtLink>
            <v-divider></v-divider>
          </div>

          <div>
            <NuxtLink :to="localePath('/')">
              <v-list-item link>
                <!-- <font-awesome-icon icon="right-to-bracket" class="fa" /> -->
                <v-list-item-title class="text-center">
                  {{ $t("تسجيل دخول") }}</v-list-item-title
                >
              </v-list-item>
            </NuxtLink>
            <v-divider></v-divider>
          </div>

          <div>
            <NuxtLink :to="localePath('/')">
              <v-list-item link>
                <!-- <font-awesome-icon icon="user-plus" class="fa" /> -->
                <v-list-item-title class="text-center">
                  {{ $t("سجل الآن") }}</v-list-item-title
                >
              </v-list-item>
            </NuxtLink>
            <v-divider></v-divider>
          </div>
        </ul>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      title: "ZidApp",
    };
  },
};
</script>

<style>
.header_logo {
  /* margin: auto; */
}
.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close), .v-navigation-drawer--temporary:not(.v-navigation-drawer--close){
      /* transform: translateX(100%) !important; */
}
</style>
