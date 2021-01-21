<template>
  <main
    id="app"
    class="app">
    <navigation></navigation>

    <section
      class="content-container"
      role="main">
      <transition
        class="test"
        name="slide-in"
        mode="out-in">
        <router-view />
      </transition>
    </section>
  </main>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap');

  body {
    margin: 0;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li a{
      color: #333;
      text-decoration: none;
    }
  }

  button, input[type="submit"] {
    cursor: pointer;
  }

  .app {
    position: absolute;
    inset: 0;
    font-family: "Roboto", sans-serif;
    display: inline-flex;
    padding: 1%;
  }

  .content-container {
    display: flex;
    width: 100%;
    overflow-x: hidden;
  }

  .title {
    color: #4A4A4A;
    font-size: 3rem;
    font-weight: 500;
  }

  .slide-in-enter-active, .slide-in-leave-active {
  transition: all .5s;
}
.slide-in-enter /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-5000px);
}

.slide-in-leave-to {
  transform: translateX(5000px);
}

</style>
