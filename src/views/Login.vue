<template>
  <section class="login-section">
    <form
      :class="[{blur : !focusedForm},'login-section__form']"
      @click="focusedForm = true"
      @submit.prevent="handleSubmit">
      <fieldset class="login-section__fieldset title">
        Log Ind
        <input
          v-model="email"
          :class="[{'green-border' : filledEmail}, 'login-section__input']"
          type="email"
          name="email"
          required
          placeholder="E-mail">

        <input
          v-model="password"
          :class="[{'green-border' : filledPassword}, 'login-section__input']"
          type="password"
          name="password"
          required
          placeholder="Password">

        <button
          class="login-section__button"
          type="submit">
          <span v-if="!loading">
            Log ind
          </span>

          <div
            v-else
            class="lds-ring">
            <div></div><div></div>
          </div>
        </button>
      </fieldset>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      email: '',
      password: '',
      passwordSuccess: false,
      focusedForm: false
    };
  },
  computed: {
    filledEmail() {
      const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      return regex.test(this.email);
    },
    filledPassword() {
      return this.password;
    }
  },
  methods: {
    ...mapActions(['setLoggedIn']),
    handleSubmit() {
      if (this.email && this.password) {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (regex.test(this.email)) {
          this.loading = true;

          setTimeout(() => {
            this.setLoggedIn(true);

            this.$router.push('/contracts');

            this.loading = false;
          }, 500);
        } else {
          alert('Du skal skrive en gyldig Email');
        }
      }
    }
  }

};
</script>

<style lang="scss">
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 15px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 5px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.login-section {
  margin: auto;
  align-self: center;
  width: 75%;
  display: flex;
  flex-direction: column;

  &__fieldset {
    border: none;
    margin-left: auto;
    display: flex;
    flex-direction: column;
  }

  &__form {
    width: 50%;
    transition: all .3s ease-in;
  }

  .blur {
    opacity: .3;
  }

  &__input {
    width: 75%;
    margin-top: 1rem;
    transition: all .3s ease-in;
    border: #30B34A solid 0px ;
    padding: 4%;
    border-radius: 20px;
    box-shadow: 0px 2px 6px rgba($color: #000000, $alpha: .2);

    &:first-of-type {
      margin-top: 3rem;
    }

    &:focus {
      outline: none;
    }

    &.green-border {
      border-width: 1px ;
    }
  }

  &__button {
    padding: 4%;
    width: 50%;
    border: none;
    border-radius: 50px;
    color: #fff;
    font-weight: 400;
    background: #30B34A;
    margin-top: 3rem;
    font-weight: 600;
    &:focus {
      outline: none;
    }
  }

}
</style>
