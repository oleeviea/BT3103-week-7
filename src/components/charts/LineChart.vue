<template>
  <div class="chart">
    <h2>Line Chart</h2>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
h2 {
    background-color:rgb(161, 189, 241);
    color:white;
    padding: 30px;
}
</style>