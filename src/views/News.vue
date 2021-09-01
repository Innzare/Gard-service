<template>
  <div class="news-page">
    <div class="section-title">Новости компании</div>
    <div class="news-wrapper">
      <div class="news">
        <div
          class="news-item"
          v-for="(newsItem, idx) in news"
          :key="idx"
          @click="openNews(newsItem)"
        >
          <div class="news-item__img">
            <img src="@/assets/img/news.png" alt="" />
          </div>

          <p class="title">{{ newsItem.title }}</p>
          <span class="date">{{ newsItem.date }}</span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="pl-sm-5 pl-0"
            >Новости компании</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-toolbar-items></v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Дата: {{ openedNews.date }}</v-subheader>
        </v-list>
        <v-card-text>
          <div class="row d-flex justify-center">
            <div class="col-lg-9 col-12">
              <div class="text-h3">{{ openedNews.title }}</div>
              <v-img
                contain
                max-height="600"
                class="mt-10"
                :src="openedNews.imgSrc"
              ></v-img>
              <div class="text-lg-body-1 body-2 mt-10">
                {{ openedNews.text }}
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      page: 1,
      openedNews: {
        title: null,
        text: null,
        date: null,
        imgSrc: null,
      },
      news: [
        {
          title: "Новость 1",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis alias fugit dolorem tempora optio eum aspernatur ea provident nesciunt asperiores obcaecati, saepe, recusandae corrupti iusto doloremque unde tenetur velit!
          Eos placeat non rerum aspernatur a velit, quo ea at possimus doloremque quasi natus corrupti molestias rem magni commodi omnis deleniti dignissimos. Odit nostrum voluptatem magni, voluptas impedit omnis? Minima!
          Blanditiis et eaque voluptas magnam nisi architecto est eum debitis reiciendis consequuntur doloribus similique ex autem facere odit, ducimus excepturi labore ea, unde quibusdam necessitatibus nihil! Unde eveniet enim voluptate.
          Quam distinctio blanditiis hic quos nam modi minus rerum aliquam facere fuga explicabo debitis culpa, suscipit non. Deserunt beatae aut, explicabo iusto sunt quae maiores minus voluptatem dicta tempora recusandae.
          Laboriosam libero sed asperiores vitae temporibus maiores quidem culpa aut nesciunt debitis iure assumenda voluptates voluptate, eos quae sapiente, totam et deserunt dolorum sint adipisci, dolores recusandae a ratione? Explicabo?`,
          date: "12.12.12",
          imgSrc: require("@/assets/img/gard-car.png"),
        },
        {
          title: "Новость 2",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis alias fugit dolorem tempora optio eum aspernatur ea provident nesciunt asperiores obcaecati, saepe, recusandae corrupti iusto doloremque unde tenetur velit!
          Eos placeat non rerum aspernatur a velit, quo ea at possimus doloremque quasi natus corrupti molestias rem magni commodi omnis deleniti dignissimos. Odit nostrum voluptatem magni, voluptas impedit omnis? Minima!
          Blanditiis et eaque voluptas magnam nisi architecto est eum debitis reiciendis consequuntur doloribus similique ex autem facere odit, ducimus excepturi labore ea, unde quibusdam necessitatibus nihil! Unde eveniet enim voluptate.
          Quam distinctio blanditiis hic quos nam modi minus rerum aliquam facere fuga explicabo debitis culpa, suscipit non. Deserunt beatae aut, explicabo iusto sunt quae maiores minus voluptatem dicta tempora recusandae.
          Laboriosam libero sed asperiores vitae temporibus maiores quidem culpa aut nesciunt debitis iure assumenda voluptates voluptate, eos quae sapiente, totam et deserunt dolorum sint adipisci, dolores recusandae a ratione? Explicabo?`,
          date: "24.08.16",
          imgSrc: require("@/assets/img/gard-car.png"),
        },
        {
          title: "Новость 3",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis alias fugit dolorem tempora optio eum aspernatur ea provident nesciunt asperiores obcaecati, saepe, recusandae corrupti iusto doloremque unde tenetur velit!
          Eos placeat non rerum aspernatur a velit, quo ea at possimus doloremque quasi natus corrupti molestias rem magni commodi omnis deleniti dignissimos. Odit nostrum voluptatem magni, voluptas impedit omnis? Minima!
          Blanditiis et eaque voluptas magnam nisi architecto est eum debitis reiciendis consequuntur doloribus similique ex autem facere odit, ducimus excepturi labore ea, unde quibusdam necessitatibus nihil! Unde eveniet enim voluptate.
          Quam distinctio blanditiis hic quos nam modi minus rerum aliquam facere fuga explicabo debitis culpa, suscipit non. Deserunt beatae aut, explicabo iusto sunt quae maiores minus voluptatem dicta tempora recusandae.
          Laboriosam libero sed asperiores vitae temporibus maiores quidem culpa aut nesciunt debitis iure assumenda voluptates voluptate, eos quae sapiente, totam et deserunt dolorum sint adipisci, dolores recusandae a ratione? Explicabo?`,
          date: "31.12.21",
          imgSrc: require("@/assets/img/gard-car.png"),
        },
        {
          title: "Новость 4",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis alias fugit dolorem tempora optio eum aspernatur ea provident nesciunt asperiores obcaecati, saepe, recusandae corrupti iusto doloremque unde tenetur velit!
          Eos placeat non rerum aspernatur a velit, quo ea at possimus doloremque quasi natus corrupti molestias rem magni commodi omnis deleniti dignissimos. Odit nostrum voluptatem magni, voluptas impedit omnis? Minima!
          Blanditiis et eaque voluptas magnam nisi architecto est eum debitis reiciendis consequuntur doloribus similique ex autem facere odit, ducimus excepturi labore ea, unde quibusdam necessitatibus nihil! Unde eveniet enim voluptate.
          Quam distinctio blanditiis hic quos nam modi minus rerum aliquam facere fuga explicabo debitis culpa, suscipit non. Deserunt beatae aut, explicabo iusto sunt quae maiores minus voluptatem dicta tempora recusandae.
          Laboriosam libero sed asperiores vitae temporibus maiores quidem culpa aut nesciunt debitis iure assumenda voluptates voluptate, eos quae sapiente, totam et deserunt dolorum sint adipisci, dolores recusandae a ratione? Explicabo?`,
          date: "28.04.20",
          imgSrc: require("@/assets/img/gard-car.png"),
        },
        {
          title: "Новость 5",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis alias fugit dolorem tempora optio eum aspernatur ea provident nesciunt asperiores obcaecati, saepe, recusandae corrupti iusto doloremque unde tenetur velit!
          Eos placeat non rerum aspernatur a velit, quo ea at possimus doloremque quasi natus corrupti molestias rem magni commodi omnis deleniti dignissimos. Odit nostrum voluptatem magni, voluptas impedit omnis? Minima!
          Blanditiis et eaque voluptas magnam nisi architecto est eum debitis reiciendis consequuntur doloribus similique ex autem facere odit, ducimus excepturi labore ea, unde quibusdam necessitatibus nihil! Unde eveniet enim voluptate.
          Quam distinctio blanditiis hic quos nam modi minus rerum aliquam facere fuga explicabo debitis culpa, suscipit non. Deserunt beatae aut, explicabo iusto sunt quae maiores minus voluptatem dicta tempora recusandae.
          Laboriosam libero sed asperiores vitae temporibus maiores quidem culpa aut nesciunt debitis iure assumenda voluptates voluptate, eos quae sapiente, totam et deserunt dolorum sint adipisci, dolores recusandae a ratione? Explicabo?`,
          date: "16.12.19",
          imgSrc: require("@/assets/img/gard-car.png"),
        },
        {
          title: "Новость 6",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis alias fugit dolorem tempora optio eum aspernatur ea provident nesciunt asperiores obcaecati, saepe, recusandae corrupti iusto doloremque unde tenetur velit!
          Eos placeat non rerum aspernatur a velit, quo ea at possimus doloremque quasi natus corrupti molestias rem magni commodi omnis deleniti dignissimos. Odit nostrum voluptatem magni, voluptas impedit omnis? Minima!
          Blanditiis et eaque voluptas magnam nisi architecto est eum debitis reiciendis consequuntur doloribus similique ex autem facere odit, ducimus excepturi labore ea, unde quibusdam necessitatibus nihil! Unde eveniet enim voluptate.
          Quam distinctio blanditiis hic quos nam modi minus rerum aliquam facere fuga explicabo debitis culpa, suscipit non. Deserunt beatae aut, explicabo iusto sunt quae maiores minus voluptatem dicta tempora recusandae.
          Laboriosam libero sed asperiores vitae temporibus maiores quidem culpa aut nesciunt debitis iure assumenda voluptates voluptate, eos quae sapiente, totam et deserunt dolorum sint adipisci, dolores recusandae a ratione? Explicabo?`,
          date: "01.02.21",
          imgSrc: require("@/assets/img/gard-car.png"),
        },
      ],
      dialog: false,
    };
  },
  methods: {
    openNews(news) {
      this.dialog = true;
      this.openedNews.title = news.title;
      this.openedNews.text = news.text;
      this.openedNews.date = news.date;
      this.openedNews.imgSrc = news.imgSrc;
    },
  },
  components: {},
};
</script>

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

.news {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &-item {
    flex: 0 1 32%;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 30px;
    cursor: pointer;
    @include tablets() {
      flex: 0 1 49%;
      margin-bottom: 15px;
    }
    @include phones() {
      flex: 0 1 100%;
      margin-bottom: 15px;
    }
    &__img {
      overflow: hidden;
      border-radius: 5px;
      margin-bottom: 15px;
      // height: 400px;
      img {
        transition: 0.5s;
        width: 100%;
      }
    }
    p {
      transition: color 0.3s;
    }
    &:hover {
      .news-item__img img {
        transform: scale(1.15);
      }
      p {
        color: #5eb760;
      }
    }
  }
}
</style>