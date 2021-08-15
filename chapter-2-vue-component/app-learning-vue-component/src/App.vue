<template>
  <h1>Hello World !</h1>
  <FirstComponent></FirstComponent>
  <FirstComponent />
  <first-component></first-component>
  <first-component />
  <SecondComponent />
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";
export default {
  name: "App",
  components: {
    FirstComponent, // FirstComponent : FirstComponent
    SecondComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
