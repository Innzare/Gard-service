<template>
<div class="home-page">
  <div class="first-block-wrapper">
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
            Это универсальная многооперационная установка, имеющая широкую область применения при использовании разрешенных химических и биологических препаратов за счет совмещения в одном механизме функций генератора аэрозоля регулируемой дисперсности частиц и дистанционного мелко, средне и крупнокапельного опрыскивателя.
          </p>
          <v-btn
            x-large
            color="success"
            dark
          >
            Узнать больше ...
          </v-btn>
        </div>
      </div>
    </div>
  </div>
   <div class="second-block">
     <div class="container">
        <div class="slider">
          <v-carousel
            show-arrows-on-hover
            height='700px'
          >
            <v-carousel-item
              v-for="(img,i) in images"
              :key="i"
              :src="img.src"
            ></v-carousel-item>
          </v-carousel>
        </div>
     </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        images: [
          {
            src: require('@/assets/img/gard5.jpg'),
          },
          {
            src: require('@/assets/img/gard4.jpg'),
          },
          {
            src: require('@/assets/img/gard.jpg'),
          },
        ],
      }
    },
    components: {
    },
  }
</script>

<style lang="scss" scoped>
.first-block {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  &__left {
    margin-right: 100px;
    p {
      font-size: 32px;
      font-weight: bold;
      span {
        color: rgb(24, 173, 24);
      }
    }
  }
  &__right {
    padding: 10px 0;
    font-size: 22px;
    flex: 0 1 60%;
  }
}

.second-block {
  .slider {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 5px;
    border: 2px solid #a4bbdd;
    box-shadow: 0 0 7px 3px rgba(0,0,0,.2);
  }
}
</style>
