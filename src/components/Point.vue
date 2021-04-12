<template>
  <div class="pointBox">
    <div class="pointText">000님의 보유 포인트</div>
    <div class="point">500</div>
    <i class="el-icon-coin coin"></i>
  </div>
</template>

<script>
export default {
  name: "Point",
};
</script>

<style scoped>
.pointBox {
  position: relative;
  border: 1px solid #dedede;
  background-color: white;
  margin-top: 13px;
  width: 100%;
  height: 26px;
  padding-top: 5px;
  border-radius: 4px;
}
.point {
  position: absolute;
  left: 85%;
  font-size: small;
  font-weight: 900;
  top: 6px;
}
.pointText {
  display: inline-block;
  margin-left: 3%;
  font-size: 13px;
  color: #00000073;
}
.coin {
  position: absolute;
  left: 92%;
  top: 6px;
}
</style>