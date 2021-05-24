import TFormGroup from '@/components/form/TFormGroup.vue';
export default {
  components: {
    TFormGroup
  },
  props: {
    optionList: {
      default: null,
      type   : Array
    },
    classes    : {default: ''},
    safeId     : {default: ''},
    placeholder: {default: '' },
    value      : {default: '' },
    label      : {default: ''},
    multiple   : {
      type   : Boolean,
      default: false
    }
  },
  mounted: function() {
  }
};