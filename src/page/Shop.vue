<template>
  <div>
    <el-container>
      <el-main>
        <ShopTitle />
        <ShopHome />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ShopTitle from "../components/ShopTitle";
import ShopHome from "../components/ShopHome";
export default {
  components: {
    ShopTitle,
    ShopHome,
  },
};
</script>

<style>
</style>