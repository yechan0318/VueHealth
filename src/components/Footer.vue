<template>
  <div>
    <hr />
    <el-row :gutter="20">
      <el-col :span="6"
        ><router-link :to="{ name: 'Home' }"
          ><div class="icon">
            <IconBase
              width="40"
              height="45"
              icon-name="FooterHome"
              iconViewBox="0 0 21.09 20.56"
              ><FooterHome /></IconBase
            ><br />
            <div class="iconText">홈</div>
          </div></router-link
        ></el-col
      >
      <el-col :span="6">
        <router-link :to="{ name: 'Walk' }"
          ><div class="icon">
            <IconBase
              width="45"
              height="45"
              icon-name="WalkingMan"
              iconViewBox="0 0 23.91 29.31"
              ><WalkingMan
            /></IconBase>
            <div class="iconText">워크/커뮤니티</div>
          </div></router-link
        >
      </el-col>
      <el-col :span="6"
        ><div class="icon">
          <IconBase
            width="45"
            height="45"
            icon-name="FooterCart"
            iconViewBox="0 0 21.41 27.71"
            ><FooterCart /></IconBase
          ><br />
          <div class="iconText">쇼핑</div>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="icon">
          <IconBase
            width="45"
            height="45"
            icon-name="Challenger"
            iconViewBox="0 0 29.14 20.72"
            ><Challenger
          /></IconBase>
          <div class="iconText">챌린지</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Challenger from "../assets/icons/challenger.vue";
import WalkingMan from "../assets/icons/walkingMan.vue";
import IconBase from "./IconBase.vue";
import FooterHome from "../assets/icons/footerHome.vue";
import FooterCart from "../assets/icons/footerCart.vue";
export default {
  components: {
    IconBase,
    Challenger,
    WalkingMan,
    FooterHome,
    FooterCart,
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