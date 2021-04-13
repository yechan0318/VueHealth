<template>
  <div>
    <hr />
    <el-row :gutter="20">
      <el-col :span="6"
        ><router-link :to="{ name: 'Home' }"
          ><div class="icon">
            <i class="el-icon-s-home"
              ><br />
              <div class="iconText">홈</div></i
            >
          </div></router-link
        ></el-col
      >
      <el-col :span="6">
        <router-link :to="{ name: 'Walk' }"
          ><div class="icon">
            <IconBase width="45" height="50" icon-name="WalkingMan"
              ><WalkingMan
            /></IconBase>
            <div class="iconText">워크/커뮤니티</div>
          </div></router-link
        >
      </el-col>
      <el-col :span="6"
        ><div class="icon">
          <i class="el-icon-shopping-cart-full"
            ><br />
            <div class="iconText">쇼핑</div></i
          >
        </div></el-col
      >
      <el-col :span="6"
        ><div class="icon">
          <IconBase width="45" height="45" icon-name="Challenger"
            ><Challenger
          /></IconBase>
          <div class="iconText">챌린지</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Challenger from "../assets/icons/challenger";
import WalkingMan from "../assets/icons/walkingMan";
import IconBase from "./IconBase.vue";
export default {
  components: {
    IconBase,
    Challenger,
    WalkingMan,
  },
};
</script>

<style scoped>
.icon {
  font-size: 30px;
  text-align: center;
}
.iconText {
  font-size: 14px;
  font-weight: 700;
}
</style>