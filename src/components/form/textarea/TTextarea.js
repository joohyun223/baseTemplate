import TFormGroup from '@/components/form/TFormGroup.vue';
export default {
  components: {
    TFormGroup
  },
  props: {
    classes: {default: ''},
    safeId : {default: null},
    label  : {default: false},
    rows   : {default: 1}
  }
};