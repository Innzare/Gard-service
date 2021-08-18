<template>
  <v-app id="inspire" class="overflow-y-none">
    <v-navigation-drawer v-model="drawer" app>
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Звоните по номеру:
          </v-list-item-title>
          <v-list-item-subtitle> +7(347)237-60-16 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item> -->

      <!-- <v-divider></v-divider>
      <v-divider></v-divider> -->

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <router-link class="nav-link-item" :to="{ name: item.link }">
            <v-list-item-icon>
              <v-icon color="green darken-2">
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        <v-btn
          class="mt-5 pa-5 callback-btn"
          style="color: white"
          width="100%"
          color="green"
        >
          Обратная связь
          <v-icon right dark>mdi-phone</v-icon>
        </v-btn>
      </v-list>
      <img class="navigation-logo" src="@/assets/img/logo2.png" alt="" />
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#00A64D"
      dark
      :src="barSrc"
      shrink-on-scroll
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <img
        v-if="$route.name !== 'types' && $route.name !== 'about'"
        :src="require('@/assets/img/logo.png')"
        alt=""
      />

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{
        $route.name !== "/" ? pageTitle : ""
      }}</v-toolbar-title>

      <template
        v-slot:extension
        v-if="$route.name === 'types' || $route.name === 'about'"
      >
        <v-tabs
          background-color="rgba(0,0,0,.3)"
          show-arrows
          grow
          align-with-title
          v-model="currentTypesTab"
          v-if="$route.name === 'types'"
        >
          <v-tab>Растениеводство</v-tab>
          <v-tab>Животноводство и птицеводство</v-tab>
          <v-tab>Лесное хозяйство</v-tab>
          <v-tab>Здравоохранение</v-tab>
          <v-tab>МЧС</v-tab>
        </v-tabs>
        <v-tabs
          background-color="rgba(0,0,0,.3)"
          show-arrows
          grow
          align-with-title
          v-if="$route.name === 'about'"
        >
          <v-tab>О GARD</v-tab>
          <v-tab>Преимущества GARD</v-tab>
          <v-tab>Методики обработки</v-tab>
          <v-tab>Наши достижения</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <div class="main-content">
        <div class="background"></div>
        <router-view :currentTypesTab="currentTypesTab" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  created() {
    if (window.innerWidth < 1263) {
      this.drawer = false;
    } else {
      this.drawer = true;
    }
  },
  data: () => ({
    width: 0,
    drawer: null,
    currentTypesTab: null,
    items: [
      { title: "Главная", icon: "mdi-home", link: "/" },
      { title: "Виды обработок", icon: "mdi-sprout", link: "types" },
      {
        title: "Новости",
        icon: "mdi-newspaper-variant-multiple-outline",
        link: "news",
      },
      { title: "Фотографии", icon: "mdi-image", link: "photos" },
      { title: "Видеозаписи", icon: "mdi-video", link: "videos" },
      { title: "Партнеры", icon: "mdi-handshake-outline", link: "partners" },
      { title: "Контакты", icon: "mdi-card-account-phone", link: "contacts" },
      { title: "О компании", icon: "mdi-information-outline", link: "about" },
    ],
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  computed: {
    // ...mapGetters(["typesCurrentTab", "typesTabs"]),
    navigationOpener() {
      return this.width > 450;
    },
    pageTitle() {
      if (this.$route.name === "types") {
        return "Виды обработок";
      } else if (this.$route.name === "news") {
        return "Новости";
      } else if (this.$route.name === "photos") {
        return "Фотографии";
      } else if (this.$route.name === "videos") {
        return "Видеозаписи";
      } else if (this.$route.name === "partners") {
        return "Партнеры";
      } else if (this.$route.name === "contacts") {
        return "Контакты";
      } else if (this.$route.name === "about") {
        return "О компании";
      } else {
        return "GARD - сервис";
      }
    },
    barSrc() {
      if (this.$route.name === "/") {
        return require("@/assets/img/6.jpg");
      } else if (this.$route.name === "about") {
        return require("@/assets/img/4.jpg");
      } else if (this.$route.name === "types") {
        return require("@/assets/img/2.jpg");
      } else {
        return require("@/assets/img/3.jpg");
      }
    },
  },
};
</script>

<style lang='scss'>
@mixin laptop {
  @media screen and (max-width: 1024px) {
    @content;
  }
}
@mixin tablets {
  @media screen and (max-width: 768px) {
    @content;
  }
}
@mixin phones {
  @media screen and (max-width: 425px) {
    @content;
  }
}
.v-slide-group__next,
.v-slide-group__prev {
  @include tablets() {
    min-width: 24px !important;
  }
}
.v-navigation-drawer {
  width: 100%;
  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>

<style lang="scss" scoped>
@mixin laptop {
  @media screen and (max-width: 1024px) {
    @content;
  }
}
@mixin tablets {
  @media screen and (max-width: 768px) {
    @content;
  }
}
@mixin phones {
  @media screen and (max-width: 425px) {
    @content;
  }
}

// Адаптивное свойство
$maxWidth: 1920;
$maxWidthContainer: 1170;

@mixin adaptiv-value($property, $startSize, $minSize, $type) {
  $addSize: $startSize - $minSize;
  @if $type==1 {
    // Только если меньше контейнера
    #{$property}: $startSize + px;
    @media (max-width: #{$maxWidthContainer + px} ) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} *
          ((100vw - 320px) / #{$maxWidthContainer - 320})
      );
    }
  } @else if $type==2 {
    // Только если больше контейнера
    #{$property}: $startSize + px;
    @media (min-width: #{$maxWidthContainer + px}) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320})
      );
    }
  } @else {
    // Всегда
    #{$property}: calc(
      #{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320})
    );
  }
}

.v-navigation-drawer {
  // height: 115vh !important;
  // max-height: none;
  img {
    width: 43%;
    margin: 20px auto 0;
    transform: translateX(-5px);
    @include adaptiv-value("margin-top", 180, 20, 1);
  }
  @media (max-height: 630px) {
    .callback-btn {
      margin-top: 5px !important;
    }
    .v-list--nav.v-list--dense .v-list-item:not(:last-child):not(:only-child),
    .v-list--nav .v-list-item--dense:not(:last-child):not(:only-child),
    .v-list--rounded.v-list--dense
      .v-list-item:not(:last-child):not(:only-child),
    .v-list--rounded .v-list-item--dense:not(:last-child):not(:only-child) {
      margin-bottom: 0px !important;
    }
  }
  .navigation-logo {
    display: none;
    @include laptop() {
      display: block;
    }
  }
}

@media (max-height: 530px) {
  .v-navigation-drawer {
    .navigation-logo {
      display: none;
    }
  }
}

.theme--dark.v-btn.v-btn--icon {
  display: none !important;
}

@media (max-width: 1263px) {
  .theme--dark.v-btn.v-btn--icon {
    display: block !important;
  }
}
.v-app-bar {
  // position: relative;
  img {
    position: absolute;
    top: 0;
    right: 50px;
    height: 167%;
    user-select: none;
    @include tablets() {
      display: none;
    }
  }
}
.main-content {
  position: relative;
  padding: 40px;
  background-color: #eef3fa;
  opacity: 0.9;
  font-family: "DinPro", serif;
  font-size: 24px;
  @include adaptiv-value("padding", 40, 15, 1);
  @include adaptiv-value("padding-top", 40, 25, 1);
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url("./../assets/img/pattern.png");
  background-repeat: repeat;
  z-index: -100;
}
.theme--light.v-navigation-drawer {
  background: #f9f9f9;
}
.v-list-item__content {
  padding: 10px 0;
}
.v-slide-group__content {
  justify-content: space-around;
  background: rgba(0, 0, 0, 1);
}
.nav-link-item {
  width: 100%;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
}
.v-list--nav .v-list-item {
  padding: 0;
}
.nav-link-item {
  padding: 0 8px;
}
.router-link-exact-active {
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.v-slide-group__next,
.v-slide-group__prev {
  flex: 1 0 20px;
  min-width: 20px;
}
@media screen and (max-width: 450px) {
  .v-tab {
    font-size: 0.675rem;
    padding: 0 7px;
  }
  .v-slide-group__next,
  .v-slide-group__prev {
    flex: 1 0 20px;
    min-width: 20px;
  }
}
</style>
