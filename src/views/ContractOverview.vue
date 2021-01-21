<template>
  <section class="contract-section">
    <p class="title">
      Kontrakter
    </p>

    <div class="contract-section__drafts">
      <contract
        v-for="(contract, idx) in drafts"
        :key="idx"
        :contract="contract"
        :status="contract.status">
      </contract>
    </div>

    <div class="contract-section__send">
      <contract
        v-for="(contract, idx) in send"
        :key="idx"
        :contract="contract"
        :status="contract.status">
      </contract>
    </div>

    <div class="contract-section__accepted">
      <contract
        v-for="(contract, idx) in accepted"
        :key="idx"
        :contract="contract"
        :status="contract.status">
      </contract>
    </div>

    <div class="contract-section__revisions">
      <contract
        v-for="(contract, idx) in revisions"
        :key="idx"
        :contract="contract"
        :status="contract.status">
      </contract>
    </div>

    <section class="contract-section__add-contract">
      <button class="contract-section__add-contract-icon">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="plus"
          class="svg-inline--fa fa-plus fa-w-12"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-250 -125 900 900">
          <path
            fill="#fff"
            d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z">
          </path>
        </svg>
      </button>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Contract from '../components/Contract.vue';

export default {
  components: {
    Contract
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'drafts',
      'send',
      'accepted',
      'revisions'
    ])
  }

};
</script>

<style lang="scss">
  .contract-section {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 1% 3%;
    justify-content: space-between;

    & > div {
      width: 22%;
      margin-right: 2%;
    }

    .title {
      margin-top: 1%;
      width: 100%;
    }

    &__add-contract {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      &-icon {
        cursor: pointer;
        width: 80px;
        height: 60px;
        border: none;
        outline: none;
        border-radius: 50px;
        background-color: #30B34A;
      }
    }
  }
</style>
