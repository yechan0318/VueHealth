<template>
  <div>
    <Title />
    <Point />
    <Health />
    <Daily-date />
  </div>
</template>

<script>
import Title from "../components/Title";
import Point from "../components/Point";
import Health from "../components/Health";
import DailyDate from "../components/dailyDate.vue";
export default {
  name: "Home",
  components: { Title, Point, Health, DailyDate },
};
</script>

<style>
</style>