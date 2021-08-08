<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên</th>
        <th scope="col">Giá</th>
        <th scope="col">Số Lượng Trong Kho</th>
        <th scope="col">Số Lượng</th>
        <th scope="col">Hành Động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in cartList" :key="cart.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }}</td>
        <td>{{ cart.quantityInStock }}</td>
        <td>
          <button class="btn btn-success">
            <i class="fa fa-arrow-up"></i>
          </button>
          <span class="mx-2">{{ cart.amount }}</span>
          <button class="btn btn-success">
            <i class="fa fa-arrow-down"></i>
          </button>
        </td>
        <td>
          <button class="btn btn-danger">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    cartList: {
      type: Array,
    },
  },
};
</script>

<style></style>
