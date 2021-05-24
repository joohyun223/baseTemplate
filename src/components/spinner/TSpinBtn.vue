<template>
    <button :class="spinBtnClasses" class="btn" type="button" disabled>
        <span :class="spinClasses" role="status" aria-hidden="true"></span>
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'TDropBtn',
  data: () => {
    return {
    //   isShow: false
    };
  },
  props: {
    spinBtnClasses: {default: ''},
    spinClasses   : {default: ''}

  }
};
</script>

<style>

</style>