<template>
  <div class="feature">
    <v-row>
      <v-col cols="12" sm="12" md="6" >
        <div class="landing-desc">
          <h2>كل ما تحتاجه لنمو متجرك فى مكان واحد</h2>
          <p>
            مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات
            وحلول<br />
            سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
          </p>
          <span> </span>

          <div>
            <v-banner single-line>
              <v-avatar class="avatar" size="50">
                <img src="/Group8435.svg" alt="John" />
              </v-avatar>
              سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك
            </v-banner>
            <v-banner single-line>
              <v-avatar class="avatar" size="50">
                <img src="/Vector.svg" alt="John" />
              </v-avatar>
              دعم فني و تقني متكامل متوفر على مدار الساعة
            </v-banner>
            <v-banner single-line>
              <v-avatar class="avatar" size="50">
                <img src="/money-svgrepo-com.svg" alt="John" />
              </v-avatar>
              أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة
            </v-banner>
          </div>
        </div>
          <button >
          تصفح التطبيقات
          <span class="mr-3 move-arrow"
            ><font-awesome-icon icon="angle-left" class="fa"
          /></span>
        </button>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="bg-land">

        <div class="landing-req-bgImg">
        <img src="/zidapp_1-min.svg" width="700px" height="400px" alt="" />

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.feature {
  padding-block: 10px;
  margin-block: 20px;
  background-color: #fafafc;
  button {
    border: 1px solid #8d5da7;
    background-color: #8d5da7;
    color: #fdb515;
    border-radius: 5px;
    padding: 10px 40px;
    margin: 30px;
  }
}
.landing-desc {
  h2 {
    margin-block: 20px;
  }
  p {
    line-height: 1.7rem;
  }
}
.circle-img {
  line-height: 20px;
  width: 50px;
  height: 50px;
  border-radius: 49%;
  background-color: #fff;
  outline: none;
  box-shadow: 0px 4px 9px -5px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
  display: inline-block;
  position: relative;
}
.v-avatar.avatar {
  box-shadow: 0px 4px 9px -5px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
}
.v-avatar img,
.v-avatar.avatar img {
  border-radius: none;
  display: inline-block;
  height: auto;
  width: auto;
}
.circle-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped)
  .v-banner__wrapper {
  border-bottom: none;
}
.landing-req-bgImg{
background-image: url("/feature.svg");
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 25px;
  padding-bottom: 14px;
}

@media (max-width: 992){
  .landing-desc{
    margin: auto;
    text-align: center;
  }
}
</style>