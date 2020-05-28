new Vue({
  el: '#app',
  data: {
    show: false,
  },

  computed: {
    divClasses: function () {
      return { red: this.attachRed, blue: !this.attachRed };
    },
    styleFunction: function () {
      return {
        backgroundColor: this.color3,
        width: this.width + 'px',
      };
    },
  },
});
