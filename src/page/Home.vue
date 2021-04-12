<template>
  <div>
    <Title />
    <Point />
    <Card />
    <Daily-date />
  </div>
</template>

<script>
import Title from "../components/Title";
import Point from "../components/Point";
import Card from "../components/Card";
import DailyDate from "../components/dailyDate.vue";
export default {
  name: "Home",
  components: { Title, Point, Card, DailyDate },
};
</script>

<style>
</style>