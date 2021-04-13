<template>
  <div class="walkpageWrap">
    <img src="@/assets/walkBanner.jpeg" style="width: 100%" />
    <el-container>
      <el-main>
        <el-row class="infoWalk p-5">
          <el-col :span="12" class="pl-10">홍동완님</el-col>
          <el-col :span="12" class="text-right pr-10"
            ><span class="stepText">300</span> 걸음</el-col
          >
        </el-row>

        <div class="my-10">
          <div class="titleText">Today 브리핑</div>
          <el-row :gutter="5" class="my-5">
            <el-col :span="12">
              <div class="briefingWrap walkBriefing">
                <div class="font-bold">걷기운동</div>
                <div class="font-bold">4시간 30분</div>
                <div>맞춤권장: 1시간 10분</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="briefingWrap powerWalkingBriefing">
                <div class="font-bold">파워워킹</div>
                <div class="font-bold">30분</div>
                <div>맞춤권장: 20분</div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="5" class="my-5">
            <el-col :span="12">
              <div class="briefingWrap sleepBriefing">
                <div class="font-bold">수면</div>
                <div class="font-bold">4시간 30분</div>
                <div>맞춤권장: 7시간</div>
              </div> </el-col
            ><el-col :span="12">
              <div class="briefingWrap burnKcal">
                <div class="font-bold">걷기운동</div>
                <div class="font-bold">4시간 30분</div>
                <div>맞춤권장: 1시간 10분</div>
              </div>
            </el-col>
          </el-row>
        </div>

        <hr />

        <div>
          <div class="titleText">2021년 4월 15일 목요일</div>
          <div class="mt-5">금일 건강관리 점수 : 종합 B+</div>
          <div class="explainText">
            전체평균: B+[상위 10%], 내가 가입한 그룹 평균 B-[상위 6%]
          </div>

          <el-row :gutter="0">
            <el-col :span="6"
              ><Pie
                seriesName="걷기운동"
                :seriesData="[
                  { value: 20, name: '달성중' },
                  { value: 14, name: '목표치' },
                ]"
              />
              <div class="pieChartTitle">걷기운동 : A-</div></el-col
            >
            <el-col :span="6"
              ><Pie
                seriesName="파워워킹"
                :seriesData="[
                  { value: 7000, name: '달성중' },
                  { value: 3000, name: '목표치' },
                ]"
              />
              <div class="pieChartTitle">파워워킹 : B-</div></el-col
            >
            <el-col :span="6"
              ><Pie
                seriesName="수면"
                :seriesData="[
                  { value: 5, name: '수면시간' },
                  { value: 2, name: '부족한 수면시간' },
                ]"
              />
              <div class="pieChartTitle">수면 : C</div></el-col
            >
            <el-col :span="6"
              ><Pie
                seriesName="소모칼로리"
                :seriesData="[
                  { value: 10000, name: '달성중' },
                  { value: 3000, name: '목표치' },
                ]"
              />
              <div class="pieChartTitle">소모칼로리 : B+</div></el-col
            >
          </el-row>
        </div>

        <hr />
        <div>
          <div class="titleText">월간통계</div>
          <br />
          <Line />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Pie from "../chart/Pie.vue";
import Line from "../chart/Line.vue";

export default {
  name: "Walk",
  components: {
    Pie,
    Line,
  },
};
</script>

<style scoped>
.walkpageWrap {
  background-color: white;
}
.pieChartTitle {
  color: #666666;
  text-align: center;
  font-size: 13px;
  letter-spacing: -1px;
}
.stepText {
  color: #fff001;
  font-weight: bold;
}
.titleText {
  color: #666666;
}
.explainText {
  color: #383eae;
  font-size: 13px;
}
.infoWalk {
  background-color: #353bad;
  color: white;
  border-radius: 5px;
}
.briefingWrap {
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
}
.walkBriefing {
  background-color: #8bcde7;
}
.powerWalkingBriefing {
  background-color: #75a8e7;
}
.sleepBriefing {
  background-color: #4689cc;
}
.burnKcal {
  background-color: #cc56ff;
}
</style>