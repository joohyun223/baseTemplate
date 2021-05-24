import TModalBtn from './TModalBtn.vue';
import TModalWrap from './TModalWrap.vue';
import TModalHeader from './TModalHeader.vue';
import TModalFooter from './TModalFooter.vue';


export default {
  name      : 'TModal',
  components: {
    TModalBtn,
    TModalWrap,
    TModalHeader,
    TModalFooter
  },
  data: () => {
    return {
      html   : null,
      body   : null,
      dimEl  : null,
      modalEl: null
    }; 
  },
  props: {
    btntext           : {default: ''},
    ariaLabelledby    : {default: ''},
    headerText        : {default: ''},
    footerCloseText   : {default: ''},
    footerSaveText    : {default: ''},
    modaldialogClasses: {default: ''}
  },
  mounted: function() {
    
    this.html = document.body.parentNode;
    this.body = document.body;
    this.dimEl = document.createElement('div');
  },
  methods: {
    showModal: function(evt) {
      let parents = evt.target.parentElement;
      let nextSibling = parents.nextSibling;
      
      this.modalEl = nextSibling;
      
      this.dimEl.classList.add('modal-backdrop');
      this.dimEl.classList.add('fade');
      this.dimEl.classList.add('show');
            
      this.modalEl.classList.add('show');
      this.modalEl.removeAttribute('aria-hidden');
      this.modalEl.setAttribute('aria-modal', true);
      this.modalEl.setAttribute('role', 'dialog');
      this.modalEl.style.display = 'block';

      this.body.classList.add('modal-open');
      this.body.appendChild(this.dimEl);

      this.scrollDisabled();
      this.bodyClickClose();

      this.$emit('showModal', evt);
    },
    closeModal: function(evt) {

      this.modalEl.classList.remove('show');
      this.modalEl.setAttribute('aria-hidden', true);
      this.modalEl.removeAttribute('aria-modal');
      this.modalEl.removeAttribute('role');
      this.modalEl.style.display = 'none';

      this.body.classList.remove('modal-open');
      this.body.removeChild(this.dimEl);

      this.scrollEnabled();

      this.$emit('closeModal', evt);
    },
    confirmBtnClicked: function() {
      this.$emit('confirmBtnClicked');
    },
    bodyClickClose: function() {
      const vm = this;

      document.addEventListener('click', function(evt) {

        if (evt.target.classList.contains('modal')) {

          vm.closeModal(evt);
        }
        
      });
    },
    scrollEnabled: function() {

      this.html.style.overflowY = 'scroll';
    },
    scrollDisabled: function() {

      this.html.style.overflowY = 'hidden';
    }
  }
};