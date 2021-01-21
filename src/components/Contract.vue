<template>
  <article class="contract">
    <div class="contract__title">
      <span class="contract__icon">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="paperclip"
          class="svg-inline--fa fa-paperclip fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"><path
            fill="currentColor"
            d="M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z"></path></svg>
      </span>

      {{ contract.company }}
    </div>

    <p class="contract__job-description">
      {{ contract.jobDescription }}
    </p>

    <div class="contract__information">
      <ul class="contract__information-list">
        <li>
          {{ contract.worker }}
        </li>

        <li>
          {{ contract.email }}
        </li>

        <li>
          {{ contract.phone }}
        </li>
      </ul>

      <div class="contract__information-price">
        <p class="contract__price-description">
          {{ contract.priceDescription }}
        </p>

        <p class="contract__price">
          {{ contract.price }}
        </p>
      </div>
    </div>

    <div :class="[status.toLowerCase(), 'contract__status']">
      {{ contract.status.toUpperCase() }}
    </div>

    <div
      v-if="status === 'Kladde'"
      class="contract__actions">
      <button class="contract__button">
        Send Kontrakt
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    contract: {
      type: Object,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
  .contract {
    font-size: 14px;
    background-color: #F7F7F7;
    color: #727272;
    border-radius: 10px;
    padding: 5%;
    font-weight: 600;
    position: relative;
    width: 100%;
    margin-bottom: 10%;
    line-height: 1.5;

    &__title {
      font-weight: 600;
      font-size: 1rem;
      width: 100%;
      display: inline-flex;
    }

    &__icon {
      width: 20px;
      height: 20px;
      margin-right: 2%;
    }

    &__job-description {
      width: 75%;
    }

    &__information {
      width: 100%;
      align-items: flex-end;
      display: inline-flex;
      justify-content: space-between;
    }

    &__price {
      font-size: 1.3rem;
      margin: 0;

      &-description {
        margin: 0;
        color: #30B34A;
      }
    }

    &__status {
      position: absolute;
      min-width: 20%;
      background-color: #4A4A4A;
      border-radius: 50px;
      color: #ffffff;
      text-align: center;
      font-weight: 600;
      padding: 1% 4%;
      top: 0%;
      left: 80%;
      transform: translate(-50%, -50%);

      &.kladde {
        background-color: #D9D9D9;
        color: #4A4A4A;
      }

      &.accepteret {
        background-color: #D7F5DD;
        color: #30B34A;
      }

      &.sendt {
        background-color: #F7EFB1;
        color: #D6A500;
      }

      &.revision {
        background-color: #FCE8E8;
        color: #FD8282;
      }
    }

    &__actions {
      width: 100%;
      display: flex;
      margin-top: 3%;
      justify-content: flex-end;
    }

    &__button {
      border: none;
      outline: none;
      background-color: #30B34A;
      border-radius: 50px;
      font-weight: 600;
      width: 70%;
      padding: 4%;
      color: #ffffff;
      box-shadow: 0px 3px 6px rgba($color: #000000, $alpha: .3);
    }
  }
</style>
