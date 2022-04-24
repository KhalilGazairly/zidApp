<template>
  <v-card>
    <v-footer padless>
      <v-card tile width="100%" color="#8d5da7" class="lighten-1 text-center">
        <v-card-text class="white--text">
          <img src="/zid-logo1.svg" alt="logo" />
        </v-card-text>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-fab-transition>
          <v-btn class="up" color="#fdb515" fab dark bottom left>
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-fab-transition>

        <v-fab-transition>
          <v-btn class="chat" color="#fdb515" fab dark bottom left>
            <v-icon>mdi-forum</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: #f6f6f6;
  border-top: 1px solid #efefef;
}
footer .footer_info,
footer ul,
footer .social,
footer .copy {
  display: flex;
  justify-content: center;
  width: 100%;
}
.footer_info {
  flex-direction: column;
}
footer .img-logo {
  width: 100%;
}
footer .img-logo a {
  display: block;
  text-align: center;
}
footer .img-logo img {
  max-width: 100px;
}
footer .p1 {
  width: 60%;
  margin: 5px auto;
  text-align: center;
  font-size: 15px !important;
}
footer .links_heading {
  margin-bottom: 15px;
}
footer .links a {
  display: block;
  font-size: 14px;
  margin-top: 5px;
  transition: 0.3s all ease;
  line-height: 30px;
}
footer .links a:hover {
  color: #30c88c;
}
footer .social ul li .v-icon {
  cursor: pointer;
  transition: 0.3s all ease;
  color: #30c88c;
}
footer .social ul li .v-icon:hover {
  color: #444;
}
.v-btn--fab.v-size--default.up {
  right: 46%;
  bottom: 30px;
}
.v-btn--fab.v-size--default.chat {
  left: 48%;
  bottom: 30px;
}
@media (max-width: 959px) {
  .links_heading_p {
    text-align: center;
    border: 1px solid #eaeaea;
    padding: 12px;
  }
}
</style>
