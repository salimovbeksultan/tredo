<template>
  <section>
    <button
      class="data-sorting-button"
      :class="{ active: value === 'table' }"
      @click="changeMode('table')"
    >
      Таблица
    </button>
    <button
      class="data-sorting-button"
      :class="{ active: value === 'preview' }"
      @click="changeMode('preview')"
    >
      Превью
    </button>
  </section>
</template>

<script>
export default {
  name: "DataMode",
  props: {
    value: String,
  },
  methods: {
    changeMode(mode) {
      this.$emit("input", mode);
    },
  },
};
</script>
