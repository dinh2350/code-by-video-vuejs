<template>
  <div class="modal" v-if="isOpen" @click="onCloseModal">
    <div class="modal__container" @click.stop>
      <div class="modal__header">
        <h1>ADD USER</h1>
        <div class="modal__close" @click="onCloseModal">X</div>
      </div>
      <hr />
      <div class="modal__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    onClose: {
      type: Function,
    },
  },
  methods: {
    onCloseModal() {
      this.onClose();
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal__container {
  width: 700px;
  height: 70vh;
  margin: auto;
  margin-top: 70px;
  background-color: white;
  border: 1px solid #888;
  padding: 10px 20px;
  overflow-y: scroll;
}
.modal__container::-webkit-scrollbar {
  width: 3px;
}

.modal__container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.modal__container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal__header .modal__close {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  font-size: 30px;
}
.modal__header .modal__close:hover {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
