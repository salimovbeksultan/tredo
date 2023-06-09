<template>
  <table class="data-table">
    <data-item
      v-for="item in sortedItemList"
      :key="item.id"
      :item="item"
    ></data-item>
  </table>
</template>

<script>
import DataItem from "./DataItem.vue";

export default {
  name: "DataTable",
  components: { DataItem },
  props: {
    itemList: Array,
    sorting: Object,
  },
  watch: {
    sorting: {
      handler(newValue) {
        this.sortData(newValue);
      },
      deep: true,
    },
    "$store.state.data"(newValue) {
      this.sortedItemList = [...newValue];
    },
  },
  data: function () {
    return {
      sortedItemList: [],
    };
  },
  mounted() {
    this.sortedItemList = [...this.$store.state.data];
    this.sortData(this.sorting);
  },
  methods: {
    sortData(sorting) {
      this.sortedItemList.sort(function (a, b) {
        let valueA = a[sorting.field];
        let valueB = b[sorting.field];

        if (sorting.order === "asc") {
          if (valueA < valueB) {
            return -1;
          } else if (valueA > valueB) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (valueA > valueB) {
            return -1;
          } else if (valueA < valueB) {
            return 1;
          } else {
            return 0;
          }
        }
      });
    },
  },
};
</script>

<style>
.data-table {
  width: 100%;
  border: 1px solid #dddddd;
  background-color: #fafafa;
  box-shadow: #c2c2c2 0px 3px 8px;
  border-collapse: collapse;
}
</style>
