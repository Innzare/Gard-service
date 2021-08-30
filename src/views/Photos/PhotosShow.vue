<template>
  <div class="photos-show-page">
    <router-link :to="{ name: 'photos' }">
      <div class="back-btn">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
          />
        </svg>
        Назад
      </div>
    </router-link>
    <v-row>
      <v-col
        v-for="(n, index) in currentArchive"
        :key="index"
        class="img-item d-flex child-flex"
        :cols="$vuetify.breakpoint.xs ? 6 : 4"
        @click="openPhoto(index)"
      >
        <v-img :src="n.src" aspect-ratio="1" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <v-dialog :max-width="dialogWidth" v-model="dialog">
      <img :src="openPhotoSrc" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PhotosShow",

  created() {
    this.currentArchive = this["archive" + this.id];
  },

  data() {
    return {
      dialog: false,
      openPhotoSrc: null,
      currentArchive: null,
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
    openPhoto(idx) {
      this.dialog = true;
      this.openPhotoSrc = this.currentArchive[idx].src;
    },
  },

  computed: {
    dialogWidth() {
      if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs)
        return "100%";
      return "60%";
    },
  },

  icons: {
    iconfont: "mdi",
  },

  props: {
    id: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped>
.photos-show-page {
  color: #000;
}
.img-item {
  cursor: pointer;
}
img {
  width: 100%;
}
.back-btn {
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
  color: #000;
  transition: color 0.3s;
  &:hover {
    color: #0063a7;
  }
  svg {
    margin-right: 10px;
  }
}
</style>