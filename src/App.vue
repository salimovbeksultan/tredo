<template>
  <main class="data-page">
    <div class="data-page-row">
      <data-sorting v-model="sorting"></data-sorting>
      <data-mode v-model="mode"></data-mode>
    </div>
    <div class="data-page-row">
      <input v-model="searchQuery" type="text" />
    </div>
    <data-table
      v-if="mode === 'table'"
      :sorting="sorting"
      :item-list="$store.state.data"
    ></data-table>
    <data-preview
      v-else
      :sorting="sorting"
      :item-list="$store.state.data"
    ></data-preview>
  </main>
</template>

<script>
import DataTable from "./components/DataTable.vue";
import DataSorting from "./components/DataSorting.vue";
import DataMode from "./components/DataMode.vue";
import DataPreview from "./components/DataPreview.vue";
import { computed } from "vue";

export default {
  name: "App",
  components: { DataTable, DataSorting, DataMode, DataPreview },
  mounted() {
    this.$store.dispatch("loadData");
  },
  data: function () {
    return {
      sorting: {
        field: "id",
        order: "asc",
      },
      mode: "table",
      searchQuery: "",
    };
  },
  provide() {
    return {
      query: computed(() => this.searchQuery),
    };
  },
};
</script>

<style>
.data-page {
  margin: 0px 24px 0px 24px;
}

.data-page-row {
  display: flex;
  padding-bottom: 8px;
}
</style>
