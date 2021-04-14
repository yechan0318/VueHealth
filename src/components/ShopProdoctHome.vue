<template>
  <div>
    <el-row>
      <el-col :span="19"><div class="newProductText">신상품</div></el-col>
      <el-col :span="5"
        ><div class="newProductTextMore">
          더 보기 <i class="el-icon-arrow-right"></i></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"
        ><div class="newProdoct">
          <img src="@/assets/danoX.jpeg " style="width: 100%" />헬미X디디미니
          <br />밀키트 2종
        </div></el-col
      >
      <el-col :span="8"
        ><div class="newProdoct">
          <img src="@/assets/danoCube.jpeg " style="width: 100%" />헬미 닭가슴살
          <br />큐브 3종
        </div></el-col
      >
      <el-col :span="8"
        ><div class="newProdoct">
          <img src="@/assets/danoRice.jpeg " style="width: 100%" />헬미 자이언트
          <br />브라운라이스소울
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="8"
        ><div class="newProdoct">
          <img src="@/assets/cookTool.jpeg " style="width: 100%" />조리도구 3종
        </div></el-col
      >
      <el-col :span="8"
        ><div class="newProdoct">
          <img src="@/assets/danoTea.jpeg " style="width: 100%" />헬미 클린티
          2종
        </div></el-col
      >
      <el-col :span="8"
        ><div class="newProdoct">
          <img src="@/assets/danoCheeze.jpeg " style="width: 100%" />헬미
          구워먹는 <br />치즈
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="19"
        ><div class="newProductText my-10">후기로 검증된 홈트 제품</div></el-col
      >
      <el-col :span="5"
        ><div class="newProductTextMore my-10">
          더 보기 <i class="el-icon-arrow-right"></i></div
      ></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"
        ><div><img src="@/assets/yoga1.jpeg " style="width: 100%" /></div
      ></el-col>
      <el-col :span="12"
        ><div>
          <img src="@/assets/yoga2.jpeg " style="width: 100%" /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.newProdoct {
  text-align: center;
  margin: 10px 8px;
  font-size: 15px;
}
.newProductText {
  font-size: 20px;
  font-weight: bold;
}
.newProductTextMore {
  padding-left: 11px;
  font-size: 16px;
  color: #00000073;
}
</style>