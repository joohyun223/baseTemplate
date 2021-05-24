import TAccordionHeader from './TAccordionHeader.vue';
import TAccordionCon from './TAccordionCon.vue';
export default {
  name      : 'TAccordion',
  components: {
    TAccordionHeader,
    TAccordionCon
  },
  props: {
    contents: {},
    type    : {default: undefined}
  },
  methods: {
    open: function(target) {
      const vm = this;
      const con = vm.classSearch(target, 'content');
      const tit = vm.classSearch(target, 'title');
      if (vm.type === 'individual') {
        target.parentNode.childNodes.forEach(el => {
          vm.close(el);
        });
      }
      target.className += ' on';
      const titH = tit.offsetHeight;
      con.style.display = 'block';
      target.style.height = titH+'px';
      target.style.height = titH+con.offsetHeight+'px';
    },
    close: function(target) {
      const vm = this;
      const con = vm.classSearch(target, 'content');
      const tit = vm.classSearch(target, 'title');
      target.classList.remove('on');
      target.style.height = tit.offsetHeight + 'px';
      target.addEventListener('transitionend', function() {
        if (!target.classList.contains('on')) {
          target.style.height = '';
          con.style.display = 'none';
        }
      }, {once: 'true'});
    },
    evtBind: function(e) {
      e.preventDefault();
      const con = e.target.parentNode.parentNode;
      if (con.classList.contains('on')) {
        this.close(con);
      } else {
        this.open(con);
      }
    },
    classSearch: (target, hasClass) => {
      const children = target.childNodes;
      for (let i=0; i < children.length; i++) {
        const classList = children[i].classList;
        if (classList.contains(hasClass)) {
          return children[i];
        }
      }
    }
  }
};