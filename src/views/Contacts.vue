<template>
  <div class="contacts-page">
    <div class="section-title">Контакты техподдержки</div>
    <div class="contacts-data">
      <div class="contacts-data__item contacts-data__email">
        <div>E-mail:</div>
        <span>ufa.gard@gmail.com</span>
      </div>
      <div class="contacts-data__item contacts-data__phone">
        <div>Телефон:</div>
        <span>+7 (347) 237-60-16</span>
      </div>
    </div>
    <div class="contacts-form">
      <div class="contacts-form__title">Остались вопросы?</div>
      <v-form class="form" ref="form" v-model="valid" lazy-validation>
        <div class="contacts-form__item contacts-form__left">
          <div class="input-wrapper">
            <v-text-field
              v-model="formData.name"
              :rules="nameRules"
              label="Ваше имя"
              required
              outlined
            ></v-text-field>
          </div>

          <div class="input-wrapper">
            <v-text-field
              v-model="formData.email"
              :rules="emailRules"
              label="Ваш E-mail"
              required
              outlined
            ></v-text-field>
          </div>

          <div class="input-wrapper">
            <v-text-field
              v-model="formData.phone"
              :rules="emailRules"
              label="Ваш Телефон"
              required
              outlined
            ></v-text-field>
          </div>
        </div>
        <div class="contacts-form__item contacts-form__right">
          <div class="input-wrapper">
            <v-textarea
              class="message"
              v-model="formData.message"
              outlined
              name="input-7-4"
              label="Введите ваше сообщение"
              append-icon="mdi-comment"
              auto-grow
              row-height="51.5"
            ></v-textarea>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        email: null,
        message: null,
      },
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.contacts-data {
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", serif;
  margin: 50px 0 80px;
  &__item {
    flex: 0 1 48%;
    padding-bottom: 10px;
    border-bottom: 1px solid #a5a5a5;
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    span {
      color: #0064a7;
    }
  }
}
.contacts-form {
  padding: 60px 40px 40px;
  background: #f8f8f8;
  border-radius: 7px;
  &__title {
    color: #0064a7;
    font-size: 34px;
    margin-bottom: 60px;
  }
  .input-wrapper {
    margin-bottom: 20px;
  }
  .form {
    display: flex;
    justify-content: space-between;
    .message {
      height: 100%;
    }
  }
  &__item {
    flex: 0 1 48%;
  }
}
</style>