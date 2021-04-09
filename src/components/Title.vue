<template>
  <div class="title">
    <i class="el-icon-menu menuIcon"></i>
    <div class="titleText">우리가족 건강지킴이</div>
    <i class="el-icon-user titleIcon"></i>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
.title {
  position: relative;
  margin-top: 7%;
}
.titleText {
  display: inline-block;
  font-size: 125%;
  font-weight: 800;
  color: #0c039e;
}
.titleIcon {
  position: absolute;
  left: 94%;
  font-size: 158%;
}

.menuIcon {
  font-size: x-large;
  color: #0c039e;
}
</style>