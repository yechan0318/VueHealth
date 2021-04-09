<template>
  <div class="box">
    <div>
      <div class="dateText">오늘의 일정</div>
      <div class="boxIcon">
        see all<i class="el-icon-circle-plus plusIcon"></i>
      </div>
    </div>
    <div class="detailBorder">
      <div class="todayText">오늘 약/병원</div>
      <div class="todayBox">아침</div>
      <div class="stateClear">완료</div>
      <div class="todayBox magin-5">점심</div>
      <div class="stateClear">완료</div>
      <div class="todayBox magin-5">저녁</div>
      <div class="stateYet">예정</div>
      <div class="todayBox magin-5">취침전</div>
      <div class="stateNone">없음</div>
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
        <div class="now">현재 500</div>
        <div class="now goal">목표 5000</div>
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
  position: relative;
  border: 1px solid;
  margin-top: 13px;
  width: 100%;
  height: 26px;
  border-radius: 4px;
  background-color: rgb(2, 49, 180);
}
.dateText {
  margin-left: 3%;
  font-size: 15px;
  color: #ffff;
  font-weight: bold;
  font-family: sans-serif;
  display: inline-block;
  position: fixed;
  margin-top: 5px;
}

.boxIcon {
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
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  position: sticky;
  margin-top: 27px;
  height: 500%;
  border-radius: 4px;
}
.todayBox {
  display: inline-block;
  margin-left: 2%;
  color: rgb(2, 49, 180);
  font-size: 16px;
  font-family: sans-serif;
}
.todayText {
  font-family: sans-serif;
  margin-top: 3px;
  margin-left: 7px;
  margin-bottom: 3px;
  font-weight: 700;
  font-size: 16px;
}
.stateClear {
  display: inline-block;
  border: 1px solid;
  border-radius: 6px;
  background-color: rgb(2, 49, 180);
  font-size: 14px;
  color: #fff;
  padding: 0px 3px;
  font-weight: 700;
  text-align: center;
}
.stateNone {
  display: inline-block;
  border: 1px solid;
  border-radius: 6px;
  background-color: rgb(2, 49, 180);
  font-size: 14px;
  color: #fff;
  padding: 0px 3px;
  font-weight: 700;
  text-align: center;
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
}
.magin-5 {
  margin-left: 5%;
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
  position: sticky;
  margin-left: 2%;
  display: inline-block;
}
.goal {
  position: sticky;
  left: 79%;
  display: inline-block;
}
</style>