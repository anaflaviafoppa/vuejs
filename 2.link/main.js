new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://vuejs.org/',
  },
  methods: {
    sayHello: function () {
      return this.title;
    },
  },
});
