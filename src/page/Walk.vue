<template>
  <div>
    <img src="@/assets/walkBanner.jpeg" style="width: 100%" />
    <el-container>
      <el-main>
        <el-row class="infoWalk p-5">
          <el-col :span="12" class="pl-10">000 님</el-col>
          <el-col :span="12" class="text-right pr-10">000 걸음</el-col>
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
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Walk",
};
</script>

<style>
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