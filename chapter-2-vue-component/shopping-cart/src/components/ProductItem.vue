<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="productItem.image" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ productItem.name }}</h5>
      <div class="card-text text-danger">
        <h4 class="">{{ productItem.price }} VNĐ</h4>
      </div>
      <button class="btn btn-danger" @click="handleAddCart(productItem)">
        Mua
      </button>
      <button class="btn btn-info ml-2">Chi Tiết</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productItem: {
      type: Object,
    },
    handleAddCart: {
      type: Function,
    },
  },
};
</script>

<style></style>
