<template>
  <div>
    <router-view></router-view>
    <br />
    <br />
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.primaryColor {
  color: #0c039e;
}
.font-bold {
  font-weight: bold;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.mt-5 {
  margin-top: 5px;
}
.mb-5 {
  margin-bottom: 5px;
}
.ml-5 {
  margin-left: 5px;
}
.mr-5 {
  margin-right: 5px;
}
.my-5 {
  margin-top: 5px;
  margin-bottom: 5px;
}
.my-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.p-5 {
  padding: 5px;
}
.pl-5 {
  padding-left: 5px;
}
.pr-5 {
  padding-right: 5px;
}
.pl-10 {
  padding-left: 10px;
}
.pr-10 {
  padding-right: 10px;
}
</style>
