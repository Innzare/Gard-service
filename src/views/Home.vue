<template>
  <div class="home-page">
    <div class="first-block-wrapper">
      <div class="container">
        <div class="section-title">Компания «ГАРД Сервис»</div>
        <div class="content-block about-block">
          <div class="about-block__text">
            <p>
              <span style="color: green; font-weight: bold">ГАРД®</span> -
              аэрозольная технология примененяемая в решении практических задач
              на службе здоровья человека, в сельском и лесном хозяйстве, в
              животноводстве, в охране природы и в промышленности.
            </p>
            <p>
              Мы занимаемся оказанием услуг при помощи установок собственного
              производства. Мы не производим технику на продажу, поскольку
              считаем, что в сфере аэрозольных технологий должны быть
              задействованы исключительно специалисты, которые знают все
              тонкости работ, связанных с применение пестицидов. Остерегайтесь
              лиц, действующих от нашего имени!
            </p>
            <p class="p-adaptive">
              Нас Вы всегда можете найти по телефону:
              <span style="font-weight: bold"
                ><a href="tel:+73472376016">+ 7 (347) 237-60-16.</a></span
              >
            </p>
            <p class="p-adaptive">Мы всегда рады Вам помочь!</p>
          </div>
          <div class="about-block__img">
            <div class="adaptive">
              <p>
                Нас Вы всегда можете найти по телефону:
                <span style="font-weight: bold"
                  ><a href="tel:+73472376016">+ 7 (347) 237-60-16.</a></span
                >
              </p>
              <p>Мы всегда рады Вам помочь!</p>
            </div>
            <v-parallax src="@/assets/img/5.jpg"> </v-parallax>
          </div>
        </div>
      </div>
    </div>
    <div class="our-achievements">
      <div class="container">
        <div class="section-title">Наши достижения</div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="section-title">Установка ГАРД</div>
        <div class="first-block">
          <div class="first-block__item first-block__left">
            <p><span>Г</span>енератор</p>
            <p><span>А</span>эрозольной</p>
            <p><span>Р</span>егулируемой</p>
            <p><span>Д</span>исперсности</p>
          </div>
          <div class="first-block__item first-block__right">
            <p>
              Это универсальная многооперационная установка, имеющая широкую
              область применения при использовании разрешенных химических и
              биологических препаратов за счет совмещения в одном механизме
              функций генератора аэрозоля регулируемой дисперсности частиц и
              дистанционного мелко, средне и крупнокапельного опрыскивателя.
            </p>
            <v-btn x-large color="success" dark> Узнать больше ... </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="second-block">
      <div class="container">
        <div class="slider">
          <v-carousel show-arrows-on-hover height="700px">
            <v-carousel-item
              v-for="(img, i) in images"
              :key="i"
              :src="img.src"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
    <div class="our-advantages">
      <div class="container">
        <div class="section-title">Наши преимущества</div>
      </div>
    </div>
    <div class="our-partners">
      <div class="container">
        <div class="section-title">Наши партнеры</div>
      </div>
    </div>
    <div class="our-partners">
      <div class="container">
        <div class="section-title">Контакты</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      images: [
        {
          src: require("@/assets/img/gard5.jpg"),
        },
        {
          src: require("@/assets/img/gard4.jpg"),
        },
        {
          src: require("@/assets/img/gard.jpg"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["typesTabs"]),
  },
  components: {},
};
</script>

<style lang="scss">
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
.home-page {
  @include laptop() {
    .v-parallax__image-container {
      img {
        bottom: 90px !important;
      }
    }
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

.content-block {
  @include adaptiv-value("margin-bottom", 50, 20, 1);
  @include adaptiv-value("font-size", 24, 14, 1);
}

.about-block {
  display: flex;
  @include laptop() {
    flex-direction: column;
  }
  .p-adaptive {
    @include tablets() {
      display: none;
    }
  }
  .adaptive {
    display: none;
    @include tablets() {
      width: 100%;
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.637);
      p {
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0;
        }
        span {
          display: block;
        }
      }
      &:last-child {
        margin-top: 0px;
      }
    }
  }
  &__text {
    margin-right: 30px;
    flex: 0 1 70%;
  }
  &__img {
    position: relative;
    flex: 0 0 30%;
    overflow: hidden;
    border-radius: 5px;
    height: 100%;
    box-shadow: 0 0 7px 7px rgba(0, 0, 0, 0.2);
    @include laptop() {
      max-height: 300px;
      .v-parallax__image-container {
        img {
          bottom: 90px !important;
        }
      }
    }
    img {
      height: 100%;
    }
  }
}

.first-block {
  display: flex;
  margin-bottom: 50px;
  @include tablets() {
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  &__left {
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include tablets() {
      margin-right: 0;
      margin-bottom: 10px;
    }
    p {
      font-size: 32px;
      font-weight: bold;
      &:last-child {
        margin-bottom: 0;
      }
      @include adaptiv-value("font-size", 32, 22, 1);
      @include adaptiv-value("margin-bottom", 16, 5, 1);
      span {
        color: rgb(24, 173, 24);
      }
    }
  }
  &__right {
    padding: 10px 0;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    // flex: 0 1 60%;
    @include adaptiv-value("font-size", 24, 14, 1);
    @include tablets() {
      flex: 0 1 100%;
    }
  }
  .v-btn {
    width: auto;
    @include phones() {
      width: 100%;
      @include adaptiv-value("font-size", 16, 14, 1);
    }
  }
}

.second-block {
  width: 70%;
  @include laptop() {
    width: 100%;
  }
  margin: 0 auto 50px;
  .v-carousel {
    height: calc(
      200px + (500 - 200) * ((100vw - 320px) / (1200 - 320))
    ) !important;
  }
  .slider {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 5px;
    border: 2px solid #a4bbdd;
    box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>

<style lang="scss">
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
.home-page {
  .slider {
    .v-carousel__item {
      height: calc(
        200px + (500 - 200) * ((100vw - 320px) / (1200 - 320))
      ) !important;
    }
    .v-window__container {
      height: calc(
        200px + (500 - 200) * ((100vw - 320px) / (1200 - 320))
      ) !important;
    }
    .v-carousel__controls {
      height: calc(
        30px + (50 - 30) * ((100vw - 320px) / (1200 - 320))
      ) !important;
    }
    .v-btn__content i {
      font-size: calc(
        13px + (18 - 13) * ((100vw - 320px) / (1200 - 320))
      ) !important;
    }
    .v-btn--icon.v-size--small {
      @include adaptiv-value("width", 38, 18, 1);
      @include adaptiv-value("height", 38, 18, 1);
    }
  }
}
</style>
