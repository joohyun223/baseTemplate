import { createPopper } from '@popperjs/core';

const RIGHT_MOUSE_BUTTON_WHICH = 3;
const TAB_KEYCODE = 9;
const ESCAPE_KEYCODE = 27;

export default {
  components: {
  },
  data() {
    return {
      visible: false,
      btnAttr: {
        type: this.btnType==='button'?'button':null,
        role: this.btnType==='a'?'button':null,
        href: this.btnType==='a'?'#':null
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
      this.visible? this.openPopper(): this.removePopper();
      this.$emit('dropClicked', this.visible?true:false);
    },
    btnClick: function(evt) {
      this.$emit('splitClicked', evt);
    },
    openPopper: function() {
      if (this.$popper) {
        this.removePopper();
      }
      
      this.$popper = createPopper(this.$refs.toggle, this.$refs.menu, {
        placement: this.placement,
        modifiers: {
        },
        onFirstUpdate() {
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
      if (event.target === this.$refs.toggle) {
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
    }
  },
  computed: {
    menuVisible: function() {
      return this.visible?'show': '';
    },
    computedExpaned: function() {
      return this.visible;
    }
  },
  mounted: function() {
    document.addEventListener('click', this.clearMenu);
    document.addEventListener('keydown', this.keyDownListener);
  },
  created: function() {
  }
};