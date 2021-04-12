<template>
  <div class="primaryColor">
    <el-row :gutter="20">
      <el-col :span="16">
        <i class="el-icon-menu menuIcon"></i>
        <div class="titleText">우리가족 건강지킴이</div>
      </el-col>
      <el-col :span="8"><i class="el-icon-user"></i></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
.titleText {
  display: inline-block;
  font-weight: 800;
  font-size: 22px;
}
.el-icon-user {
  font-size: 16px;
}
.menuIcon {
  font-size: 18px;
}
</style>