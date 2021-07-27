<template>
  <v-app id="inspire" class="overflow-y-none">
    <v-navigation-drawer
      v-model='drawer'
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Звоните по номеру:
          </v-list-item-title>
          <v-list-item-subtitle>
            +7(347)237-60-16
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
            <router-link class="nav-link-item" :to="{ name: item.link }" >
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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green"
      dark
      shrink-on-scroll
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

      
      <template v-slot:extension v-if="$route.name === 'types' || $route.name === 'about'">
        <v-tabs 
            background-color="rgba(0,0,0,.3)" 
            show-arrows 
            grow 
            align-with-title 
            v-if="$route.name === 'types'"
         >
            <v-tab>Растениеводство</v-tab>
            <v-tab>Животноводство и птицеводство</v-tab>
            <v-tab>Лесное хозяйство</v-tab>
            <v-tab>Здравоохранение</v-tab>
            <v-tab>Мчс</v-tab>
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

    <v-main
    >
      <div class="main-content">
         <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
   created() {
      window.addEventListener('resize', this.updateWidth);
      if(this.width <= 450) {
         this.drawer = false
      }
   },
   data: () => (
   {
      width: 0,
      drawer: null,
      items: [
         { title: 'Главная', icon: 'mdi-home', link: '/' },
         { title: 'Виды обработок', icon: 'mdi-sprout', link: 'types' },
         { title: 'Новости', icon: 'mdi-newspaper-variant-multiple-outline', link: 'news' },
         { title: 'Фотографии', icon: 'mdi-image', link: 'photos' },
         { title: 'Видеозаписи', icon: 'mdi-video', link: 'videos' },
         { title: 'Партнеры', icon: 'mdi-handshake-outline', link: 'partners' },
         { title: 'Контакты', icon: 'mdi-card-account-phone', link: 'contacts' },
         { title: 'О компании', icon: 'mdi-information-outline', link: 'about' },
      ],
   }),
   methods: {
      updateWidth() {
         this.width = window.innerWidth;
      },
   },
   computed: {
      navigationOpener() {
         return this.width > 450;
      },
      pageTitle () {
         if (this.$route.name === 'types') {
            return 'Виды обработок'
         } else if (this.$route.name === 'news') {
            return 'Новости'
         } else if (this.$route.name === 'photos') {
            return 'Фотографии'
         } else if (this.$route.name === 'videos') {
            return 'Видеозаписи'
         } else if (this.$route.name === 'partners') {
            return 'Партнеры'
         } else if (this.$route.name === 'contacts') {
            return 'Контакты'
         } else if (this.$route.name === 'about') {
            return 'О компании'
         } else {
            return 'GARD - сервис'
         }
      },
      barSrc () {
         if (this.$route.name === '/') {
            return require('@/assets/img/6.jpg')
         } else if (this.$route.name === 'about') {
            return require('@/assets/img/4.jpg')
         } else if (this.$route.name === 'types') {
            return require('@/assets/img/2.jpg')
         } else {
            return require('@/assets/img/3.jpg')
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.main-content {
  padding: 40px;
  background: #EEF3FA;
  font-family: 'DinPro', serif;
  font-size: 24px;
}
.theme--light.v-navigation-drawer {
   background: #F9F9F9;
}
.v-list-item__content {
  padding: 10px 0;
}
.v-slide-group__content {
  justify-content: space-around;
  background: rgba(0,0,0,1);
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
   transition: all .5s;
   background: rgba(0, 0, 0, 0.1);
   border-radius: 4px;
}
.v-slide-group__next, .v-slide-group__prev {
   flex: 1 0 20px;
   min-width: 20px;
}
@media screen and (max-width: 450px) {
   .v-tab {
      font-size: 0.675rem;
      padding: 0 7px;
   }
   .v-slide-group__next, .v-slide-group__prev {
      flex: 1 0 20px;
      min-width: 20px;
   }
}
</style>
