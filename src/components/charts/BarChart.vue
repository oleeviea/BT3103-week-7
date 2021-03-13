<template>
  <div class="chart">
    <h2>Bar Chart</h2>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    'chart':Chart
  }
};
</script>

<style>
h2 {
    background-color:rgb(161, 189, 241);
    color:white;
    padding: 30px;
}
</style>