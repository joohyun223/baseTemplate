<template>
  <header class="p-3 title" role="tab">
    <a href="#" v-on=$listeners>
      <slot></slot>
    </a>
  </header>
</template>
<script>
export default {
  name: 'TAccordionH'
};
</script>
<style scoped>
header {border-bottom:1px solid #ccc;}
header > a{position:relative;display:block;padding:21px 20px 22px;}
header > a::before {
  content:"";
  position: absolute;
  display: inline-block;
  right:0;
  width: 0;
  height: 0;
  border-top: 8px solid #000;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid transparent;
  margin-top: 8px;
  margin-left: 9px;  
}
li.on header > a::before {
  border-top: 8px solid transparent;
  border-bottom: 8px solid #000;
  margin-top: 0px;
}
</style>