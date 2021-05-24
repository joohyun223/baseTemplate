export default {
  name : 'TPagination',
  props: {
    countPerView: {default: 1},
    totalData   : {default: 1},
    totalPage   : {default: 1},
    first       : {default: 1},
    last        : {default: 5},
    prev        : {default: 0},
    next        : {default: 6},
    nav         : {default: true},
    onChange    : {default: ()=>{}},
    pageChange  : {default: ()=>{}}
  },
  data() {
    return {
      currentPage : 1,
      activeNumber: 1
    };
  },
  watch: {
    activeNumber() {
      this.onChange(this.activeNumber + (this.currentPage - 1) * this.countPerView);
    },
    currentPage() {
      this.pageChange();
    }
  },
  methods: {
    numberClick(evt) {
      const con = this.$el.querySelectorAll('.number');
      for (let i = 0; i < con.length; i++) {
        if (con[i] === evt.target.parentNode) {
          this.activeNumber = i+1;
        }
      }
    },
    prevBtn() {
      if (this.activeNumber-1 <= 0) {
        this.prevCurrent();
        return false;
      }
      this.activeNumber--;
    },
    nextBtn() {
      const nextNumber = this.activeNumber+1;
      const countPerView = this.countPerView;
      if (nextNumber > countPerView || nextNumber + (this.currentPage - 1) * countPerView > this.totalData) {
        this.nextCurrent();
        return false;
      }
      this.activeNumber++;
    },
    prevCurrent() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.activeNumber = this.countPerView;
      }
    },
    nextCurrent() {
      if (this.currentPage * this.countPerView < this.totalData) {
        this.currentPage += 1;
        this.activeNumber = 1;
      }
    },
    firstNumber() {
      if (this.activeNumber === 1 && this.currentPage !== 1) {
        this.onChange(this.activeNumber + (this.currentPage - 1) * this.countPerView);
      } else {
        this.activeNumber = 1;
      }
      this.currentPage = 1;
    },
    lastNumber() {
      if (this.activeNumber === this.totalData%this.countPerView) {
        this.onChange(this.totalData);
      } else {
        this.activeNumber = this.totalData%this.countPerView;
      }
      this.currentPage = Math.ceil(this.totalData/this.countPerView);
      
    }
  }
};