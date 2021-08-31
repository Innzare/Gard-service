<template>
  <div class="photos-page">
    <div class="section-title">Фотографии «ГАРД СЕРВИС»</div>
    <div class="link-to-photos">
      <div
        class="link-to-photos-item"
        v-for="item in gallery"
        :key="item.bckg"
        @click.stop="to(item.id)"
      >
        <div class="link-to-photos-item__img">
          <img max-width="" :src="item.bckg" alt="" />
        </div>
        <span>Перейти к фотографиям</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photos",

  components: {},

  data() {
    return {
      gallery: [
        {
          id: 1,
          bckg: require("@/assets/img/photos/gard/bckg.jpg"),
        },
        {
          id: 2,
          bckg: require("@/assets/img/photos/mob-gard/bckg.jpg"),
        },
        {
          id: 3,
          bckg: require("@/assets/img/photos/agriTekAstana2011/bckg.jpg"),
        },
        {
          id: 4,
          bckg: require("@/assets/img/photos/agrokompleks2012/bckg.jpg"),
        },
      ],
      archive1: [
        {
          src: require("@/assets/img/photos/gard/1.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/2.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/3.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/4.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/5.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/6.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/7.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/8.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/9.jpg"),
        },
        {
          src: require("@/assets/img/photos/gard/10.jpg"),
        },
      ],
      archive2: [
        {
          src: require("@/assets/img/photos/mob-gard/1.jpg"),
        },
        {
          src: require("@/assets/img/photos/mob-gard/2.jpg"),
        },
        {
          src: require("@/assets/img/photos/mob-gard/3.jpg"),
        },
        {
          src: require("@/assets/img/photos/mob-gard/4.jpg"),
        },
        {
          src: require("@/assets/img/photos/mob-gard/5.jpg"),
        },
        {
          src: require("@/assets/img/photos/mob-gard/6.jpg"),
        },
        {
          src: require("@/assets/img/photos/mob-gard/7.jpg"),
        },
        {
          src: require("@/assets/img/photos/mob-gard/8.jpg"),
        },
      ],
      archive3: [
        {
          src: require("@/assets/img/photos/agriTekAstana2011/1.jpg"),
        },
        {
          src: require("@/assets/img/photos/agriTekAstana2011/2.jpg"),
        },
        {
          src: require("@/assets/img/photos/agriTekAstana2011/3.jpg"),
        },
        {
          src: require("@/assets/img/photos/agriTekAstana2011/4.jpg"),
        },
        {
          src: require("@/assets/img/photos/agriTekAstana2011/5.jpg"),
        },
        {
          src: require("@/assets/img/photos/agriTekAstana2011/6.jpg"),
        },
      ],
      archive4: [
        {
          src: require("@/assets/img/photos/agrokompleks2012/1.jpg"),
        },
        {
          src: require("@/assets/img/photos/agrokompleks2012/2.jpg"),
        },
        {
          src: require("@/assets/img/photos/agrokompleks2012/3.jpg"),
        },
        {
          src: require("@/assets/img/photos/agrokompleks2012/4.jpg"),
        },
        {
          src: require("@/assets/img/photos/agrokompleks2012/5.jpg"),
        },
        {
          src: require("@/assets/img/photos/agrokompleks2012/6.jpg"),
        },
        {
          src: require("@/assets/img/photos/agrokompleks2012/7.jpg"),
        },
      ],
    };
  },

  methods: {
    to(num) {
      this.$router.push({
        path: `/photos-show/${num}`,
      });
    },
  },
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

.photos-page {
  .link-to-photos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-item {
      display: flex;
      flex-wrap: wrap;
      cursor: pointer;
      margin-bottom: 20px;
      flex: 0 1 32%;
      background-color: rgb(255, 255, 255);
      padding: 15px;
      transition: all 0.3s;
      border-radius: 5px;
      @include tablets() {
        flex: 0 1 100%;
      }
      &:hover {
        background-color: rgb(255, 255, 255);
        box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.349);
      }
      &__img {
        margin-bottom: 20px;
        img {
          width: 100%;
          border-radius: 5px;
        }
      }
      span {
        display: inline-block;
        font-size: 18px;
        opacity: 0.7;
      }
    }
  }
}
</style>