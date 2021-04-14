<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="소개" name="info">User</el-tab-pane>
      <el-tab-pane label="홈" name="home"><ShopProdoctHome /></el-tab-pane>
      <el-tab-pane label="인기" name="popular">Role</el-tab-pane>
      <el-tab-pane label="1개담기" name="addCart">Task</el-tab-pane>
      <el-tab-pane label="다노's" name="dano">Task</el-tab-pane>
      <el-tab-pane label="마이페이지" name="mypage">Task</el-tab-pane>
      <el-tab-pane label="신규상품" name="newProduct">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ShopProdoctHome from "./ShopProdoctHome.vue";
export default {
  components: { ShopProdoctHome },
  data() {
    return {
      activeName: "home",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>


<style>
</style>