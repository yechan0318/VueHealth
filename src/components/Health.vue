<template>
  <div class="imgBox">
    <el-row :gutter="24">
      <el-col :span="12"
        ><div class="grid-content"></div>
        <i class="el-icon-edit"></i
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"></div>
        <i class="el-icon-edit"></i
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"></div>
        <i class="el-icon-edit"></i
      ></el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="6"
        ><div class="grid-content"></div>
        <i class="el-icon-edit"></i
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"></div>
        <i class="el-icon-edit"></i
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"></div>
        <i class="el-icon-edit"></i
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"></div>
        <i class="el-icon-edit"></i
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Health",
};
</script>

<style scoped>
.imgBox {
  margin: 3% 0;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-icon-edit {
  font-size: 200%;
}
</style>