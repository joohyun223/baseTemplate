<template>
  <ul class="pagination">
    <li class="page-item firstBtn">
      <button class="page-link" @click="firstNumber">«</button>
    </li>
    <li class="page-item leftBtn">
      <button class="page-link" @click="prevBtn">‹</button>
    </li>

    <li class="page-item number" v-for="val in countPerView*currentPage > totalData? countPerView-(countPerView*currentPage - totalData): countPerView" :key="val.id" :class="{active:val === activeNumber}">
      <button class="page-link" @click="numberClick">{{val+(currentPage-1)*countPerView}}</button>
    </li>

    <li class="page-item rightBtn">
      <button class="page-link" @click="nextBtn">›</button>
    </li>
    <li class="page-item lastBtn">
      <button class="page-link" @click="lastNumber">»</button>
    </li>
  </ul>
</template>
<script>
import js from './TPagination.js';
export default js;
</script>
<style scoped>
</style>