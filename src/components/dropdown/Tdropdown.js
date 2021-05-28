import { createPopper } from '@popperjs/core';

const RIGHT_MOUSE_BUTTON_WHICH = 3;
const TAB_KEYCODE = 9;
const ESCAPE_KEYCODE = 27;

export default {
  components: {
  },
  data() {
    return {
      visible         : false,
      menuWidth       : null,
      menuHeight      : null,
      menuScrollHeight: 150,
      btnAttr         : {
        type: this.btnType==='button'?'button':null,
        role: this.btnType==='a'?'button':null,
        href: this.btnType==='a'?'#':null
      },
      scrollbarStyle: {
        height: '50px',
        top   : '0px'
      },
      scrollData: {
        paddingV    : 0,
        remainderV  : 0,
        scrollTop   : 0,
        cScrollH    : 0,
        delta       : 0,
        mouseDownPos: 0,
        mouseMovePos: 0
      }
    };
  },
  props: {
    splitBtn: {
      type   : String,
      default: ''
    },
    safeId: {
      type   : String,
      default: ''
    },
    btnText: {
      type   : String,
      default: 'Dropdown Button'
    },
    btnType: {
      type     : String,
      validator: function(type) {
        return [
          'a', 'button'
        ].includes(type);
      },
      default: 'button'
    },
    classes: {
      type   : String,
      default: ''
    },
    placement: {
      type     : String,
      validator: function(position) {
        return [
          '', 'top-end', 'top', 'top-start',
          'bottom-end', 'bottom', 'bottom-start',
          'right-start', 'right', 'right-end',
          'left-start', 'left', 'left-end'
        ].includes(position);
      },
      default: 'bottom-start'
    }
  },
  methods: {
    btnToggle: function(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.visible = !this.visible;
      this.visible? this.openDropdown(): this.removePopper();
      this.$emit('dropClicked', this.visible?true:false);
    },
    btnClick: function(evt) {
      this.$emit('splitClicked', evt);
    },
    openDropdown: function() {
      if (this.$popper) {
        this.removePopper();
      }
      let _self = this;
      this.$popper = createPopper(this.$refs.toggle, this.$refs.menu, {
        placement: this.placement,
        modifiers: {
        },
        onFirstUpdate() {
          //scrollbar attr setting
          let dWidth = _self.$refs.dropdown.clientWidth;
          let iWidth = _self.$refs.itemWrap.clientWidth;
          _self.menuWidth = dWidth>iWidth? dWidth+'px':null;
          _self.menuHeight = _self.$refs.itemWrap.clientHeight;
          _self.menuScrollHeight = _self.$refs.itemWrap.scrollHeight;
          _self.scrollbarStyle.height = Math.pow(_self.$refs.itemWrap.clientHeight, 2)/_self.$refs.itemWrap.scrollHeight+'px';
          _self.scrollData.remainderV = _self.$refs.itemWrap.clientHeight - _self.scrollData.paddingV - parseInt(_self.scrollbarStyle.height);

        }
      });
    },
    removePopper: function() {
      this.$popper.destroy();
    },
    clearMenu: function(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH ||
        event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }
      if (event.target === this.$refs.toggle || event.target === this.$refs.menu || event.target === this.$refs.scrollbar) {
        return;
      }

      if (!this.visible) {
        return;
      }
      this.btnToggle();
    },
    keyDownListener: function(event) {
      if (event.which === ESCAPE_KEYCODE && this.visible) {
        this.btnToggle();
      }
    },
    dropWheel: function(evt) {
      this.scrollData.cScrollH = this.menuScrollHeight - this.$refs.itemWrap.clientHeight - this.scrollData.paddingV;

      if (this.scrollData.cScrollH===0) { 
        return; 
      }
      evt.preventDefault();

      this.scrollData.delta = 0;

      if (evt.detail) {
        this.scrollData.delta = evt.detail * -40;
      } else {
        this.scrollData.delta = evt.wheelDelta;
      }
      
      this.scrollData.scrollTop = this.$refs.itemWrap.scrollTop + Math.round(this.scrollData.delta * -1) / 10;

      this.$refs.itemWrap.scrollTop = this.scrollData.scrollTop;
      if (this.scrollData.scrollTop < 0) {
        this.scrollData.scrollTop = 0;
      } else if (this.scrollData.scrollTop > this.scrollData.cScrollH) {
        this.scrollData.scrollTop = this.scrollData.cScrollH;
      }

      this.scrollbarStyle.top = this.scrollData.scrollTop / this.scrollData.cScrollH * this.scrollData.remainderV + 'px';
    },
    dropScrollMousedown: function(evt) {
      this.scrollData.mouseDownPos = evt.pageY - parseInt(this.scrollbarStyle.top);
      this.scrollData.cScrollH = this.menuScrollHeight - this.$refs.itemWrap.clientHeight - this.scrollData.paddingV;
      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseleave', this.mouseLeave);
      document.addEventListener('mouseup', this.mouseLeave);
    },
    mouseMoveHandler: function(evt) {
      this.scrollData.mouseMovePos = evt.pageY - this.scrollData.mouseDownPos;
      if (this.scrollData.mouseMovePos < 0) {
        this.scrollData.mouseMovePos = 0;
      } else if (this.scrollData.mouseMovePos >= this.scrollData.remainderV) {
        this.scrollData.mouseMovePos = this.scrollData.remainderV;
      }
      this.scrollbarStyle.top = this.scrollData.mouseMovePos+'px';
      this.$refs.itemWrap.scrollTop = this.scrollData.mouseMovePos / this.scrollData.remainderV * (this.scrollData.cScrollH+this.scrollData.paddingV);
    },
    mouseLeave: function() {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
      document.removeEventListener('mouseleave', this.mouseLeave);
      document.removeEventListener('mouseup', this.mouseLeave);
      document.removeEventListener('mouseout', this.mouseLeave);
    },
    setDatas: function() {
      this.scrollData.paddingV = parseInt(window.getComputedStyle(this.$refs.scrollbarWrap).paddingTop) + parseInt(window.getComputedStyle(this.$refs.scrollbarWrap).paddingBottom);
    }
  },
  computed: {
    menuVisible: function() {
      return this.visible?'show': '';
    },
    showScrollbar: function() {
      return this.menuScrollHeight> this.menuHeight?true:false;
    }
  },
  mounted: function() {
    this.setDatas();
    document.addEventListener('click', this.clearMenu);
    document.addEventListener('keydown', this.keyDownListener);
  },
  created: function() {
  }
};