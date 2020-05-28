new Vue({
  el: '#app',
  data: {
    attachRed: false,
    color: 'green',
    color2: 'blue',
    color3: 'purple',
    width: 100,
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
