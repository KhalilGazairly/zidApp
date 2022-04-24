<template>
  <div>
    <h2 class="text-center">التطبيقات المميزة</h2>
    <p class="text-center text">تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="6" md="4">
        <v-card class="mx-auto" color="#F7F7F7">
          <v-list-item four-line>
            <v-list-item-content>
              <div class="mb-4">
                <span>قمرة</span>
                <span class="star">
                  <font-awesome-icon icon="star" class="fa" /> <span class="star-rate">5</span>
                </span>
              </div>
              <v-list-item-title class="mb-1">
                تطوير :  <span class="author">عمر برهوم</span>
                  </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <img src="/qumra.svg" alt="" srcset=""
            /></v-list-item-avatar>
          </v-list-item>
          <v-list-item-content class="descr mb-1 mr-5"
            >نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك <br />نظام الولاء
            الأمثل الذي يمكنك من رفع مبيعاتك</v-list-item-content
          >
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center btn-all-app">
      <button>
        جميع التطبيقات
        <span class="mr-3 move-arrow"
          ><font-awesome-icon icon="angle-left" class="fa"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.row {
  margin-inline: 80px;
  margin-block: 20px;
}
.v-list-item {
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  /* min-height: 48px; */
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
  flex-direction: row-reverse;
}
.v-list-item__content {
  margin-inline: 0px;
}

.v-list--two-line
  .v-list-item
  .v-list-item__avatar:not(.v-list-item__avatar--horizontal),
.v-list--two-line .v-list-item .v-list-item__icon,
.v-list--three-line
  .v-list-item
  .v-list-item__avatar:not(.v-list-item__avatar--horizontal),
.v-list--three-line .v-list-item .v-list-item__icon,
.v-list-item--two-line
  .v-list-item__avatar:not(.v-list-item__avatar--horizontal),
.v-list-item--two-line .v-list-item__icon,
.v-list-item--three-line
  .v-list-item__avatar:not(.v-list-item__avatar--horizontal),
.v-list-item--three-line .v-list-item__icon {
  margin-bottom: 55px;
}
.v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {
  margin-left: 0;
}
.v-list-item__content.descr {
  padding-right: 70px;
  font-size: 14px;
}
.v-sheet.v-card {
  border-radius: 13px;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.btn-all-app {
  margin-bottom: 120px;
  button {
    color: #fdb515 !important;
    font-size: 18px !important;
  }
}
.star{
    color: #fdb515 ;
    margin-inline: 15px;
}
.star-rate{
    margin-inline: 2px;
  color: #45A787;
  font-weight: 600;
}
.author{
  color: rgba(0, 0, 0, 0.56);;
}
</style>