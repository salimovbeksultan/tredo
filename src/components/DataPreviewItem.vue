<template>
  <div class="data-preview-item">
    <div class="data-preview-content">
      <div class="data-row">
        <img class="data-item-picture" :src="imageUrl" />
        <span style="padding-left: 6px">{{ item.name }}</span>
        <slot name="action"></slot>
      </div>
      <div class="data-row">
        <span>{{ item.age }}</span>
      </div>
      <div class="data-row">
        <span>{{ item.phone }}</span>
      </div>
      <div class="data-row">
        <span>{{ item.phrase }}</span>
      </div>
    </div>
    <div v-if="item.video">
      <video controls class="data-preview-video" :src="videoUrl"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataPreviewItem",
  props: {
    item: Object,
  },
  computed: {
    imageUrl() {
      return require(`../assets/images/${this.item.image}.svg`);
    },
    videoUrl() {
      if (this.item.video)
        return require(`../assets/videos/${this.item.video}.mp4`);
      else return null;
    },
  },
};
</script>

<style>
.data-preview-item {
  background-color: #ffffff;
  border: 1px solid #727272;
  box-shadow: #c2c2c2 0px 3px 8px;
  width: fit-content;
  padding: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.data-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
}

.data-preview-content {
  width: 40vw;
}

.data-preview-video {
  height: 300px;
  width: 300px;
}
</style>
