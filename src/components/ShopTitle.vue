<template>
  <div>
    <el-row>
      <el-col :span="18"
        ><div class="titleText primaryColor">종합쇼핑몰</div></el-col
      >
      <el-col :span="6"
        ><div>
          <i class="el-icon-shopping-cart-2 icon"></i>
          <i class="el-icon-menu icon"></i></div
      ></el-col>
    </el-row>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  font-size: 27px;
  margin-left: 18px;
  color: #00000073;
}
.titleText {
  font-weight: 800;
  font-size: 22px;
}
hr {
  color: #0c039e;
  margin: 0px 0px;
}
</style>