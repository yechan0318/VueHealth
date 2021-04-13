<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  setup: () => {
    const option = ref({
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["걸음수", "파워워킹", "수면시간", "소모칼로리"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1달전",
          "3월 18일",
          "3월 23일",
          "3월 28일",
          "4월 3일",
          "5일전",
          "4월 13일",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "걸음수",
          type: "line",
          data: [120, 232, 101, 134, 90, 230, 210],
        },
        {
          name: "파워워킹",
          type: "line",
          data: [220, 332, 191, 234, 290, 330, 310],
        },
        {
          name: "수면시간",
          type: "line",
          data: [150, 132, 201, 154, 190, 330, 410],
        },
        {
          name: "소모칼로리",
          type: "line",
          data: [320, 132, 301, 334, 390, 330, 320],
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 200px;
}
</style>
