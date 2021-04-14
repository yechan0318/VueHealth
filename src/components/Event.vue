<template>
  <el-container>
    <el-main>
      <div class="Event-Box">
        <div class="eventText">이벤트</div>

        <div class="eventImg">
          <img src="@/assets/friendsEvent.jpeg" style="width: 100%" />
        </div>

        <div class="eventImg">
          <img src="@/assets/aprilEvent.jpeg" style="width: 100%" />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.Event-Box {
  background-color: #ffff;
  padding-top: 15px;
}
.eventText {
  font-size: 17px;
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
}
.el-col {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>