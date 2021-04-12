<template>
  <div>
    <div class="box">
      <div>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content dateText">오늘의 일정</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content dateTextIcon">
              see all <i class="el-icon-circle-plus plusIcon"></i>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="detailBorder">
      <el-row>
        <el-col :span="24">
          <div class="grid-content todayText">오늘 약/병원</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"
          ><div class="todayBox">아침</div>
          <div class="stateClear">완료</div></el-col
        >
        <el-col :span="6"
          ><div class="todayBox">점심</div>
          <div class="stateClear">완료</div></el-col
        >
        <el-col :span="6"
          ><div class="todayBox">저녁</div>
          <div class="stateYet">예정</div></el-col
        >
        <el-col :span="6"
          ><div class="todayBox">취침전</div>
          <div class="stateNone">없음</div></el-col
        >
      </el-row>
      <hr class="hr" />
      <div>
        <div class="todayText">오늘 걷기</div>
        <el-progress
          :percentage="10"
          :color="customColor"
          :text-inside="true"
          :stroke-width="20"
          class="todayGoal"
        ></el-progress>
        <el-row>
          <el-col :span="18">
            <div class="now">현재 500</div>
          </el-col>
          <el-col :span="6">
            <div class="now">목표 5000</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? "Full" : `${percentage}%`;
    },
  },
  data() {
    return {
      customColor: "rgb(2, 49, 180)",
    };
  },
};
</script>

<style scoped>
.box {
  border: 1px solid #ffff;
  margin-top: 13px;
  border-radius: 7px;
  background-color: rgb(2, 49, 180);
  padding: 3px;
}
.dateText {
  margin-left: 3%;
  font-size: 15px;
  color: #ffff;
  font-weight: bold;
  font-family: sans-serif;
  display: inline-block;
  margin-top: 5px;
}

.dateTextIcon {
  position: fixed;
  display: inline-block;
  font-family: sans-serif;
  left: 74%;
  color: #ffff;
  font-weight: bold;
  font-size: 15px;
  padding-top: 1%;
}
.plusIcon {
  margin: 5px;
  font-size: 20%;
}
.detailBorder {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
}
.todayBox {
  display: inline-block;
  color: rgb(2, 49, 180);
  font-size: 16px;
  font-family: sans-serif;
  margin-left: 4px;
}
.todayText {
  font-family: sans-serif;
  margin-top: 8px;
  margin-left: 7px;
  margin-bottom: 3px;
  font-weight: 700;
  font-size: 16px;
}
.stateClear {
  display: inline-block;
  border: 1px solid #ffff;
  border-radius: 6px;
  background-color: rgb(2, 49, 180);
  font-size: 14px;
  color: #ffff;
  padding: 0px 3px;
  font-weight: 700;
  text-align: center;
  margin-left: 2px;
}
.stateNone {
  display: inline-block;
  border: 1px solid #ffff;
  border-radius: 6px;
  background-color: rgb(2, 49, 180);
  font-size: 14px;
  color: #ffff;
  padding: 0px 3px;
  font-weight: 700;
  text-align: center;
  margin-left: 2px;
}
.stateYet {
  display: inline-block;
  border: 1px solid;
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  color: rgb(253, 46, 46);
  padding: 0px 3px;
  font-weight: 700;
  text-align: center;
  margin-left: 2px;
}
.hr {
  width: 95%;
  margin: 9px;
}
.todayGoal {
  margin-left: 1%;
  width: 97%;
}
.now {
  font-size: 13px;
  margin-left: 4px;
  color: #0c039e;
  font-weight: 500;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>