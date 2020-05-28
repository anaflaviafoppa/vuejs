new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  methods: {
    handClick: function () {
      return this.counter++;
    },
  },
});
