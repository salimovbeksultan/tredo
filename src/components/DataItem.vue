<template>
  <tr v-show="fitsQuery" class="data-item">
    <td class="picture-column">
      <img class="data-item-picture" :src="imageUrl" />
    </td>
    <td>
      <div>{{ item.name }}</div>
    </td>
    <td>
      <div>{{ item.age }}</div>
    </td>
    <td>
      <div>{{ item.phone }}</div>
    </td>
    <td><slot name="action"></slot></td>
  </tr>
</template>

<script>
export default {
  name: "DataItem",
  props: {
    item: Object,
  },
  computed: {
    imageUrl() {
      return require(`../assets/images/${this.item.image}.svg`);
    },
    fitsQuery() {
      console.log(this.query);
      let tempQuery = this.query.toLowerCase();
      let tempName = this.item.name.toLowerCase();

      return tempName.includes(tempQuery);
    },
  },
  inject: {
    query: {
      from: "query",
      default: "",
    },
  },
  created() {
    console.log(this.query);
  },
};
</script>

<style>
.data-item {
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #cfcfcf;
}

.data-item td {
  padding-top: 16px;
  padding-bottom: 16px;
}

.data-item-picture {
  height: 30px;
  width: 30px;
}

.picture-column {
  width: 36px;
  text-align: center;
}
</style>
