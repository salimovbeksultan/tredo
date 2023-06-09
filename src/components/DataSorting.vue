<template>
  <section class="data-sorting">
    <div class="data-sorting-row">
      <button
        class="data-sorting-button"
        :class="{ active: value.field === 'id' }"
        @click="setSorting('field', 'id')"
      >
        ID
      </button>
      <button
        class="data-sorting-button"
        :class="{ active: value.field === 'name' }"
        @click="setSorting('field', 'name')"
      >
        Имя
      </button>
      <button
        class="data-sorting-button"
        :class="{ active: value.field === 'age' }"
        @click="setSorting('field', 'age')"
      >
        Возраст
      </button>
    </div>
    <div class="data-sorting-row">
      <button
        class="data-sorting-button"
        :class="{ active: value.order === 'asc' }"
        @click="setSorting('order', 'asc')"
      >
        По возрастанию
      </button>
      <button
        class="data-sorting-button"
        :class="{ active: value.order === 'desc' }"
        @click="setSorting('order', 'desc')"
      >
        По убыванию
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "DataSorting",
  props: {
    value: Object,
  },
  methods: {
    setSorting(field, newValue) {
      let tempValue = this.value;
      tempValue[field] = newValue;
      this.$emit("input", tempValue);
    },
  },
};
</script>

<style>
.data-sorting {
  display: flex;
  flex-direction: column;
}

.data-sorting-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 16px;
}

.data-sorting-button {
  background-color: #ffffff;
  border: 1px solid black;
  padding: 8px 10px 8px 10px;
  margin-right: 8px;
}

.data-sorting-button.active {
  background-color: #cfcfcf;
}

.data-sorting-button:hover {
  cursor: pointer;
}
</style>
