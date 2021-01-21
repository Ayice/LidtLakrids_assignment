<template>
  <nav class="navigation">
    <ul
      v-if="isLoggedIn"
      class="navigation__list">
      <router-link
        to="dashboard"
        tag="li"
        class="navigation__items">
        <span class="navigation__items-icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="tachometer-alt-fastest"
            class="svg-inline--fa fa-tachometer-alt-fastest fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"><path
              fill="currentColor"
              d="M400 240c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm-272 48c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm160-96c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm155.28 104.47l-101.87 20.38C329.96 299.49 310.35 288 288 288c-35.35 0-64 28.65-64 64 0 11.72 3.38 22.55 8.88 32h110.25c3.54-6.08 5.73-12.89 7.18-19.99l102.41-20.48c13-2.59 21.41-15.23 18.81-28.23s-15.31-21.61-28.25-18.83zM176 176c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zM288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm212.27 400H75.73C57.56 397.63 48 359.12 48 320 48 187.66 155.66 80 288 80s240 107.66 240 240c0 39.12-9.56 77.63-27.73 112z"></path></svg>
        </span>
        <p>
          Dashboard
        </p>
      </router-link>

      <router-link
        tag="li"
        to="budgets"
        class="navigation__items">
        <span class="navigation__items-icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="coins"
            class="svg-inline--fa fa-coins fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M320 0C214 0 128 35.8 128 80v52.6C53.5 143.6 0 173.2 0 208v224c0 44.2 86 80 192 80s192-35.8 192-80v-52.7c74.5-11 128-40.5 128-75.3V80c0-44.2-86-80-192-80zm16 428.3C326 440 275.6 464 192 464S58 440 48 428.3v-39.5c35.2 16.6 86.6 27.2 144 27.2s108.8-10.6 144-27.2v39.5zm0-96C326 344 275.6 368 192 368S58 344 48 332.3v-44.9c35.2 20 86.6 32.6 144 32.6s108.8-12.7 144-32.6v44.9zM192 272c-79.5 0-144-21.5-144-48s64.5-48 144-48 144 21.5 144 48-64.5 48-144 48zm272 28.3c-7.1 8.3-34.9 22.6-80 30.4V283c31-4.6 58.7-12.1 80-22.2v39.5zm0-96c-7.1 8.3-34.9 22.6-80 30.4V208c0-7.2-2.5-14.2-6.8-20.9 33.8-5.3 64-14.8 86.8-27.8v45zM320 144c-5 0-9.8-.3-14.7-.5-26-7.9-56.8-13.2-90.4-14.9C191 120 176 108.6 176 96c0-26.5 64.5-48 144-48s144 21.5 144 48-64.5 48-144 48z">

            </path>
          </svg>
        </span>

        <p>
          Budgetter
        </p>
      </router-link>

      <router-link
        tag="li"
        to="/contracts"
        class="navigation__items">
        <span class="navigation__items-icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="file-contract"
            class="svg-inline--fa fa-file-contract fa-w-12"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"><path
              fill="currentColor"
              d="M196.66 363.33l-13.88-41.62c-3.28-9.81-12.44-16.41-22.78-16.41s-19.5 6.59-22.78 16.41L119 376.36c-1.5 4.58-5.78 7.64-10.59 7.64H96c-8.84 0-16 7.16-16 16s7.16 16 16 16h12.41c18.62 0 35.09-11.88 40.97-29.53L160 354.58l16.81 50.48a15.994 15.994 0 0 0 14.06 10.89c.38.03.75.05 1.12.05 6.03 0 11.59-3.41 14.31-8.86l7.66-15.33c2.78-5.59 7.94-6.19 10.03-6.19s7.25.59 10.19 6.53c7.38 14.7 22.19 23.84 38.62 23.84H288c8.84 0 16-7.16 16-16s-7.16-16-16-16h-15.19c-4.28 0-8.12-2.38-10.16-6.5-11.93-23.85-46.24-30.33-65.99-14.16zM369.83 97.98L285.94 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h287.94c26.5 0 48.07-21.5 48.07-47.99V131.97c0-12.69-5.17-24.99-14.17-33.99zM255.95 51.99l76.09 76.08h-76.09V51.99zM336 464.01H47.99V48.09h159.97v103.98c0 13.3 10.7 23.99 24 23.99H336v287.95zM88 112h80c4.42 0 8-3.58 8-8V88c0-4.42-3.58-8-8-8H88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm0 64h80c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"></path></svg>
        </span>

        <p>
          Kontrakter
        </p>
      </router-link>

      <router-link
        to="/schedule"
        tag="li"
        class="navigation__items">
        <span class="navigation__items-icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="calendar-day"
            class="svg-inline--fa fa-calendar-day fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"><path
              fill="currentColor"
              d="M112 368h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V160h352v298z"></path></svg>
        </span>

        <p>
          Tidsplan
        </p>
      </router-link>

      <router-link
        tag="li"
        to="/questions"
        class="navigation__items">
        <span class="navigation__items-icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="concierge-bell"
            class="svg-inline--fa fa-concierge-bell fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"><path
              fill="currentColor"
              d="M496 400h-16v-48c0-112.82-83.49-205.89-192-221.46V112h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h48v18.54C115.49 146.11 32 239.18 32 352v48H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-64 0H80v-48c0-97.05 78.95-176 176-176s176 78.95 176 176v48z"></path></svg>
        </span>

        <p>
          Spørgsmål
        </p>
      </router-link>
    </ul>

    <ul
      v-if="isLoggedIn"
      class="navigation__user-actions">
      <router-link
        tag="li"
        to="/profile"
        class="navigation__user-actions-profile">
        LP
      </router-link>

      <router-link
        to="#"
        tag="li"
        class="navigation__user-actions-settings">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="cog"
          class="svg-inline--fa fa-cog fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"><path
            fill="currentColor"
            d="M452.515 237l31.843-18.382c9.426-5.441 13.996-16.542 11.177-27.054-11.404-42.531-33.842-80.547-64.058-110.797-7.68-7.688-19.575-9.246-28.985-3.811l-31.785 18.358a196.276 196.276 0 0 0-32.899-19.02V39.541a24.016 24.016 0 0 0-17.842-23.206c-41.761-11.107-86.117-11.121-127.93-.001-10.519 2.798-17.844 12.321-17.844 23.206v36.753a196.276 196.276 0 0 0-32.899 19.02l-31.785-18.358c-9.41-5.435-21.305-3.877-28.985 3.811-30.216 30.25-52.654 68.265-64.058 110.797-2.819 10.512 1.751 21.613 11.177 27.054L59.485 237a197.715 197.715 0 0 0 0 37.999l-31.843 18.382c-9.426 5.441-13.996 16.542-11.177 27.054 11.404 42.531 33.842 80.547 64.058 110.797 7.68 7.688 19.575 9.246 28.985 3.811l31.785-18.358a196.202 196.202 0 0 0 32.899 19.019v36.753a24.016 24.016 0 0 0 17.842 23.206c41.761 11.107 86.117 11.122 127.93.001 10.519-2.798 17.844-12.321 17.844-23.206v-36.753a196.34 196.34 0 0 0 32.899-19.019l31.785 18.358c9.41 5.435 21.305 3.877 28.985-3.811 30.216-30.25 52.654-68.266 64.058-110.797 2.819-10.512-1.751-21.613-11.177-27.054L452.515 275c1.22-12.65 1.22-25.35 0-38zm-52.679 63.019l43.819 25.289a200.138 200.138 0 0 1-33.849 58.528l-43.829-25.309c-31.984 27.397-36.659 30.077-76.168 44.029v50.599a200.917 200.917 0 0 1-67.618 0v-50.599c-39.504-13.95-44.196-16.642-76.168-44.029l-43.829 25.309a200.15 200.15 0 0 1-33.849-58.528l43.819-25.289c-7.63-41.299-7.634-46.719 0-88.038l-43.819-25.289c7.85-21.229 19.31-41.049 33.849-58.529l43.829 25.309c31.984-27.397 36.66-30.078 76.168-44.029V58.845a200.917 200.917 0 0 1 67.618 0v50.599c39.504 13.95 44.196 16.642 76.168 44.029l43.829-25.309a200.143 200.143 0 0 1 33.849 58.529l-43.819 25.289c7.631 41.3 7.634 46.718 0 88.037zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 144c-26.468 0-48-21.532-48-48 0-26.467 21.532-48 48-48s48 21.533 48 48c0 26.468-21.532 48-48 48z"></path></svg>
      </router-link>

      <li
        class="navigation__user-actions-logout"
        @click="handleLogout">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="sign-out-alt"
          class="svg-inline--fa fa-sign-out-alt fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"><path
            fill="currentColor"
            d="M272 112v51.6h-96c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C323.8 48 272 69.3 272 112zm192 144L320 400v-99.7H176v-88.6h144V112l144 144zM96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"></path></svg>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['setLoggedIn']),
    handleLogout() {
      this.setLoggedIn(false);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
.navigation {
  transition: all .3s ease-in;
  padding: 1%;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  background-color: #F7F7F7;

  &__list {
    width: 100%;
  }

  &__items {
    align-items: center;
    text-align: center;
    padding: 5% 0;
    font-weight: 500;
    background-color: #fff;
    width: 100%;
    margin-top: 1rem;
    border-radius: 5px;
    display: inline-flex;
    cursor: pointer;
    justify-content: center;

    p {
      width: 60%;
      margin: 0;
      text-align: left;
    }

    &-icon {
      margin-right: 1rem;
      width: 10%;
    }

    &.router-link-active {
      color: #30B34A;

      svg {
        border: #30B34A;
      }
    }
  }

   &__user-actions {
    width: 100%;
    display: inline-flex;
    justify-content: space-evenly;

    li {
      cursor: pointer;
      width: 30px;
    }

    &-profile {
      width: 30px;
      height: 30px;
      font-weight: 500;
      font-size: 12px;
      color: #fff;
      background-color: purple;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-settings {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
