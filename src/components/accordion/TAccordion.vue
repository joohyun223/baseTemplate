<template>
    <ul class="list">
        <li v-for="val in contents" :key="val.id" class="mb-2">
          <TAccordionHeader @click="evtBind">
            {{val.tit}}
          </TAccordionHeader>
          <TAccordionCon>
            {{val.con}}
          </TAccordionCon>
        </li>
    </ul>
</template>
<script>
import js from './TAccordion.js';
export default js;
</script>
<style scoped>
  .list > li{font:400 22px gothamB,notokrL;overflow:hidden;transition: all 0.25s ease-out;}
  .list > li .content{display: none;}
  .list > li.toggleOn .content{display: block;}
  .list > li:last-child.toggleOn{border-bottom:0}
  .list > li.toggleOn{border-top:1px solid #000}
</style>