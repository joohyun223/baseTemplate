import TFormGroup from '@/components/form/TFormGroup.vue';
export default {
  components: {
    TFormGroup
  },
  props: {
    classes : {default: ''},
    type    : {default: 'checkbox'},
    safeId  : {default: null},
    value   : { default: '' },
    disabled: { default: false },
    label   : {default: ''}
  },
  methods: {
  }
};