import TFormGroup from '@/components/form/TFormGroup.vue';

export default {
  components: {
    TFormGroup
  },
  props: {
    classes    : {default: ''},
    type       : {default: 'text'},
    safeId     : {default: null},
    placeholder: { default: '' },
    value      : { default: '' },
    readonly   : { default: false },
    disabled   : { default: false },
    label      : {default: ''},
    ariaDescby : {default: ''},
    horizontal : Boolean
  },
  computed: {
    computedClasses: function() {
      return this.isHorizontal ? 'form-inline': '';
    },
    isHorizontal: function() {
      return Boolean(this.horizontal);
    }
  },
};