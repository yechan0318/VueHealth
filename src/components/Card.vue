<template>
  <div class="cardWrap">
    <el-row :gutter="3">
      <el-col :span="12">
        <div class="card" style="background-color: #8d8d8d">
          <i class="el-icon-edit"></i>검진결과
        </div>
      </el-col>
      <el-col :span="6">
        <div class="card" style="background-color: #8bcde7">
          <i class="el-icon-edit"></i><br />복약관리
        </div>
      </el-col>
      <el-col :span="6">
        <div class="card" style="background-color: #95d8be">
          <i class="el-icon-edit"></i><br />건강체크
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="3">
      <el-col :span="6">
        <div class="card" style="background-color: #f8a190">
          <i class="el-icon-edit"></i><br />가족건강수첩
        </div> </el-col
      ><el-col :span="6">
        <div class="card" style="background-color: #db7e9d">
          <i class="el-icon-edit"></i><br />추천건강식품
        </div> </el-col
      ><el-col :span="6">
        <div class="card" style="background-color: #a9aae0">
          <i class="el-icon-edit"></i><br />보험청구
        </div> </el-col
      ><el-col :span="6">
        <div class="card" style="background-color: #c4d684">
          <i class="el-icon-edit"></i><br />병원/약국찾기
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Health",
};
</script>

<style scoped>
.cardWrap {
  margin: 3% 0;
}
.card {
  height: 66px;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
  border-radius: 6px;
  font-size: 14px;
}
.healthCheck {
  background-color: #8d8d8d;
}
.el-row {
  margin-bottom: 8px;
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