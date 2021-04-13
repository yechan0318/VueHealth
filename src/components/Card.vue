<template>
  <div class="cardWrap">
    <el-row :gutter="3">
      <el-col :span="12">
        <div class="card" style="background-color: #8d8d8d">
          <IconBase width="50" height="50" icon-name="checkResult"
            ><CheckResult /></IconBase
          >검진결과
        </div>
      </el-col>
      <el-col :span="6">
        <div class="card" style="background-color: #8bcde7">
          <IconBaseP width="45" height="50" icon-name="phillManage"
            ><PhillManage
          /></IconBaseP>
          <br />복약관리
        </div>
      </el-col>
      <el-col :span="6">
        <div class="card" style="background-color: #95d8be">
          <IconBase width="45" height="50" icon-name="healthCheck"
            ><HealthCheck /></IconBase
          ><br />건강체크
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="3">
      <el-col :span="6">
        <div class="card" style="background-color: #f8a190">
          <IconBaseP width="45" height="50" icon-name="HealthNote"
            ><HealthNote /></IconBaseP
          ><br />가족건강수첩
        </div> </el-col
      ><el-col :span="6">
        <div class="card" style="background-color: #db7e9d">
          <IconBase width="45" height="50" icon-name="HealthFood"
            ><HealthFood /></IconBase
          ><br />추천건강식품
        </div> </el-col
      ><el-col :span="6">
        <div class="card" style="background-color: #a9aae0">
          <IconBase width="45" height="50" icon-name="Insurance"
            ><Insurance /></IconBase
          ><br />보험청구
        </div> </el-col
      ><el-col :span="6">
        <div class="card" style="background-color: #c4d684">
          <IconBase width="45" height="50" icon-name="FindHospital"
            ><FindHospital /></IconBase
          ><br />병원/약국찾기
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IconBaseP from "./IconBaseP.vue";
import IconBase from "./IconBase.vue";
import CheckResult from "../assets/icons/checkResult.vue";
import PhillManage from "../assets/icons/phillManage.vue";
import HealthCheck from "../assets/icons/healthCheck.vue";
import HealthNote from "../assets/icons/healthNote";
import HealthFood from "../assets/icons/healthFood";
import Insurance from "../assets/icons/insurance";
import FindHospital from "../assets/icons/findHospital";

export default {
  name: "Health",
  components: {
    IconBaseP,
    IconBase,
    CheckResult,
    PhillManage,
    HealthCheck,
    HealthNote,
    HealthFood,
    Insurance,
    FindHospital,
  },
};
</script>

<style scoped>
.cardWrap {
  margin: 5% 0;
}
.card {
  height: 66px;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
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