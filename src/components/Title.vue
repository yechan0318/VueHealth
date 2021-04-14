<template>
  <div class="primaryColor">
    <el-row :gutter="20">
      <el-col :span="16">
        <IconBase
          width="25"
          height="25"
          icon-name="LogoIcon"
          iconViewBox="0 0 17.08 17.31"
          ><LogoIcon
        /></IconBase>
        <div class="titleText ml-5">건강지킴이 헬미</div>
      </el-col>
      <el-col :span="8"><i class="el-icon-user"></i></el-col>
    </el-row>
  </div>
</template>

<script>
import IconBase from "./IconBase";
import LogoIcon from "../assets/icons/logoIcon";

export default {
  name: "Title",
  components: {
    IconBase,
    LogoIcon,
  },
};
</script>

<style scoped>
.titleText {
  display: inline-block;
  font-weight: 800;
  font-size: 22px;
}
.el-icon-user {
  font-size: 25px;
  margin-left: 80px;
}
.menuIcon {
  font-size: 18px;
}
</style>