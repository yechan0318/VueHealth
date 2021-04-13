<template>
  <div class="Event-Box">
    <div class="eventText">이벤트</div>
    <el-row>
      <el-col :span="20"
        ><div class="eventImg">
          <img src="@/assets/aprilEvent.jpeg " style="width: 100%" />
        </div>
      </el-col>
      <el-col :span="20"
        ><div class="eventImg">
          <img src="@/assets/friendsEvent.jpeg" style="width: 100%" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Event-Box {
  background-color: #ffff;
}
.eventText {
  font-size: 17px;
  font-family: sans-serif;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 5px;
}
.el-col {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.eventImg {
  margin-left: 20px;
  width: 105%;
}
</style>