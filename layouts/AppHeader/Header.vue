<template>
  <header class="header container_cc" :class="scrolled ? 'headerFixed' : ''">
    <div class="header_p">
      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/zid-logo1.svg" alt="" srcset="" />
      </NuxtLink>

      <nav class="menu">
        <ul>
          <li class="box_op_header d-none d-sm-block">
            <NuxtLink :to="localePath('/')">
              <span class="navM_">{{ $t("الرئيسية") }}</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink :to="localePath('/')">
              <span class="navM_">{{ $t("التصنيفات") }}</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink :to="localePath('/')">
              <span class="navM_">{{ $t("التطبيقات") }}</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink :to="localePath('/')">
              <span>طور تطبيق</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="menu-left">
        <ul>
          <li>
            <button>
              {{ $t("تسجيل دخول") }}
            </button>
          </li>
          <li>
            <button class="regiter-btn">
              {{ $t("سجل الآن") }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    scrolled: false,
  }),
  methods: {
    handleScroll() {
      if (window.scrollY < 40) {
        this.scrolled = false;
      } else {
        this.scrolled = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.header {
  box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
  border: 1px solid #efefef;
  z-index: 3;
  background: #fff;
  width: 100%;
  position: fixed;
}
.headerFixed {
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0px;
}

.menu ul li[data-v-f21a83aa] {
  text-align: center;
  line-height: normal;
}
a.nuxt-link-exact-active.login_ {
  border: 1px solid #8d5da7;
}

.menu {
  display: flex;
  justify-content: flex-start;
}
.menu-left {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}
.menu-left ul {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.menu-left ul li button {
  border: 1px solid #8d5da7;
    color: #8d5da7;
 
  border-radius: 5px;
  padding: 5px 25px;
  margin-left: 5px;
}
.menu-left ul li button:hover {
  background-color: #fff;
  color: #8d5da7;
}
.regiter-btn {
  border: 1px solid #8d5da7;
  background-color: #8d5da7;
    color: #FDB515 !important;
  padding: 7px 30px;
  border-radius: 5px;
}
.menu ul {
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
}
.menu ul li {
  margin-inline: 3em;
}

.stock-span {
  position: relative;
  bottom: 20px;
  left: 1px;
  background-color: #8d5da7;
  border-radius: 50%;
  padding: 5px;
}
.header_p {
  display: flex;
  align-items: center;
  height: 80px;
}
.headerFixed .header_p {
  height: 60px;
  transition: 1s;
}
.header_p li a.nuxt-link-exact-active {
  color: #8d5da7;
  padding-bottom: 10px;
}
@media (max-width: 992) {
  .login_ {
    border: 1px solid #8d5da7;
    padding: 7px 8px !important;
    border-radius: 5px;
  }
  .menu-left ul {
    font-size: 12px;
    font-weight: 500;
  }
  .menu-left ul li {
    margin-left: 0px !important;
  }
}
</style>
