<template>
  <div>
    <Home />
  </div>
</template>

<script>
import Home from "../src/page/Home";

export default {
  name: "App",
  components: { Home },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 4%;
}

.primaryColor {
  color: #0c039e;
}
</style>
