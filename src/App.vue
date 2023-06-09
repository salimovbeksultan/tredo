<template>
  <main class="data-page">
    <div class="data-page-row">
      <data-sorting v-model="sorting"></data-sorting>
      <data-mode v-model="mode"></data-mode>
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
}
</style>
