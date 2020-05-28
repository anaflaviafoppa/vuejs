new Vue({
  el: '#app',
  data: {
    counter: 0,
    increaseSecond: 0,
  },
  //Dependent properties
  computed: {
    output: function () {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
  },
  //watch - Execute ode upon data changes:
  watch: {
    //proprietie that I want watch:
    counter: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000);
    },
  },
  methods: {
    result: function () {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
  },
});
