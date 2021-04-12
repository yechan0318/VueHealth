<template>
  <el-container>
    <el-main>
      <Title />
      <Point />
      <Card />
      <Daily-date />
    </el-main>
  </el-container>
  <Event />
  <router-link :to="{ name: 'Walk' }">Walk</router-link>
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
</style>