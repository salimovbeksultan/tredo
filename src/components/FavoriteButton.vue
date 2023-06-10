<template>
  <button
    @click="handleClick"
    class="favorite-button"
    :class="{ active: isFavorite }"
  >
    <img class="favorite-button-icon" src="@/assets/images/star.svg" />
  </button>
</template>

<script>
export default {
  name: "FavoriteButton",
  props: {
    item: Object,
  },
  methods: {
    handleClick() {
      if (!this.isFavorite) {
        this.$store.dispatch("addFavorite", this.item);
      } else {
        this.$store.dispatch("removeFavorite", this.item.id);
      }
    },
  },
  computed: {
    isFavorite() {
      let item = this.item;
      return this.$store.state.favorites.some(function (obj) {
        return obj.id === item.id;
      });
    },
  },
};
</script>

<style>
.favorite-button {
  border: none;
  background-color: transparent;
  opacity: 0.5;
}

.favorite-button-icon {
  max-height: 20px;
  max-width: 20px;
}

.favorite-button-icon:hover {
  cursor: pointer;
}

.favorite-button.active {
  opacity: 1;
}
</style>
