<template>
  <div class="news-page">
    <div class="section-title">Новости компании</div>
    <div class="news-wrapper">
      <div class="news">
        <div class="news-item" v-for="(news, idx) in 9" :key="idx">
          <div class="news-item__img">
            <img src="@/assets/img/news.png" alt="" />
          </div>

          <p class="title">Новость</p>
          <span class="date">12.08.21</span>
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
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      page: 1,
    };
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