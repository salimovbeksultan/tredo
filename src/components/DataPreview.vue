<template>
  <section class="data-preview">
    <data-preview-item
      v-for="item in sortedItemList"
      :key="item.id"
      :item="item"
    >
      <template v-slot:action>
        <favorite-button :item="item"></favorite-button>
      </template>
    </data-preview-item>
  </section>
</template>

<script>
import DataPreviewItem from "./DataPreviewItem.vue";
import FavoriteButton from "./FavoriteButton.vue";

export default {
  name: "DataPreview",
  props: {
    itemList: Array,
    sorting: Object,
  },
  components: { DataPreviewItem, FavoriteButton },
  computed: {
    sortedItemList() {
      let tempList = [...this.itemList];
      let sorting = this.sorting;
      return tempList.sort(function (a, b) {
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
.data-preview {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
