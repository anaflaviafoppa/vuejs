new Vue({
  el: '#app',
  data: {
    show: false,
    ingredients: ['meat', 'fruit', 'cookies'],
    persons: [
      {
        name: 'Ana',
        age: 27,
        color: 'pink',
      },
      {
        name: 'Felipe',
        age: 30,
        color: 'black',
      },
    ],
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
