<template>
  <div class="swiper-container">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="img in init" :key="img.id"  :style="img.style">
        <img :src="getImg(img.src)" alt="" />
      </li>
    </ul>
    <div class="swiper-pagination" v-if="this.pagination"></div>
    <div class="swiper-button-prev" v-if="this.navigation" v-on=$listeners></div>
    <div class="swiper-button-next" v-if="this.navigation" v-on=$listeners></div>
  </div>
</template>
<script>
import js from '@/components/swipe/TSwipe.js';
export default js;
</script>
<style scoped>
  .swiper-wrapper{text-align: center;}
  /* ios 대응 */
  .swiper-slide  {-webkit-transform: translateZ(0)!important; -webkit-backface-visibility: hidden!important;}
</style>
