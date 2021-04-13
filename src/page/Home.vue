<template>
  <el-container class="homepageWrap">
    <el-main>
      <Title />
      <Point />
      <Card />
      <Daily-date />
    </el-main>
  </el-container>
  <Event />
</template>

<script>
import Title from "../components/Title";
import Point from "../components/Point";
import Card from "../components/Card";
import DailyDate from "../components/dailyDate.vue";
import Event from "../components/Event.vue";
export default {
  name: "Home",
  components: { Title, Point, Card, DailyDate, Event },
};
</script>

<style>
.homepageWrap {
  background-color: #f4f3f0;
}
</style>