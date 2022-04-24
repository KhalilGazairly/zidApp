<template>
  <div>
    <div class="landing">
      <div class="text-center">
        <h1>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
        <p>
          طور تجاربك من خلال تطبيقات وحلول سوق تطبيقات زد التى تساعدك<br />
          فى نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال وإحترافى
        </p>
        <button>
          تصفح التطبيقات
          <span class="mr-3 move-arrow"
            ><font-awesome-icon icon="angle-left" class="fa"
          /></span>
        </button>
      </div>
      <VideoSection />
    </div>
    <FeatureSection />
    <Applications />
    
  </div>
</template>

<script>
import Applications from "./applications.vue";
import FeatureSection from "./featureSection.vue";
import VideoSection from "./videoSection.vue";
export default {
  components: {
    Applications,
    VideoSection,
    FeatureSection,
  },
};
</script>

<style lang="scss">
.landing {
  min-height: calc(100vh - 250px);
  text-align: center;
  margin-top: 20px;
  h1 {
    color: #8d5da7;
    font-weight: 900;
  }
  p {
    margin-block: 30px;
  }
  button {
    border: 1px solid #8d5da7;
    background-color: #8d5da7;
    color: #fdb515;
    border-radius: 5px;
    padding: 10px 40px;
  }
}
.move-arrow {
  animation-name: move;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  display: inline-block;
}

@keyframes move {
  0% {
    transform: translatex(0em);
    opacity: 1;
  }

  50% {
    transform: translatex(2px);
    opacity: 0.5;
  }

  100% {
    transform: translatex(0em);
    opacity: 1;
  }
}
</style>
