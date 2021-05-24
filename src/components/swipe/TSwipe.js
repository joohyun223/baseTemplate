import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
export default {
  name      : 'TSwiper',
  components: {
    Swiper
  },
  props: {
    init         : {},
    speed        : {default: 500},
    width        : {default: null},
    wrapWidth    : {default: 'auto'},
    navigation   : {default: false},
    pagination   : {default: false},
    loop         : {default: false},
    autoplay     : {default: () => {}},
    slidesPerView: {default: 1}
  },
  data() {
    return {
      swiper: {}
    };
  },
  mounted() {
    const vm = this;
    let options = {
      width        : vm.width,
      speed        : vm.speed,
      loop         : vm.loop,
      autoplay     : vm.autoplay,
      navigation   : vm.navigation,
      pagination   : vm.pagination,
      slidesPerView: vm.slidesPerView
    };
    vm.$el.style.width = vm.wrapWidth;
    vm.swiper = new Swiper(vm.$el, options);
    const swiper = vm.swiper;
    this.$el.setAttribute('data-swiper', swiper);
    swiper.on('slideChangeTransitionStart', function() {
      vm.$emit('trans-start');
    });
    swiper.on('slideChangeTransitionEnd', function() {
      vm.$emit('trans-end');
    });
  },
  methods: {
    slideTo(idx, speed, runCallbacks) {
      this.swiper.slideTo(idx, speed, runCallbacks);
    },
    slideToLoop(idx, speed, runCallbacks) {
      this.swiper.slideToLoop(idx, speed, runCallbacks);
    },
    update() {
      this.swiper.update();
    },
    getImg(filenname) {
      return require(process.env.VUE_APP_SWIPE_IMG_PATH+filenname);
    }
  }
};