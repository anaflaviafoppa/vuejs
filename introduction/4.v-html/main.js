new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://vuejs.org/',
    finishedLink: '<a href="https://vuejs.org/">VUE ORG</a>',
  },
  methods: {
    sayHello: function () {
      this.title = 'Hello!';
      return this.title;
    },
  },
});
