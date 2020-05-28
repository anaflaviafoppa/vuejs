new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://vuejs.org/',
  },
  methods: {
    sayHello: function () {
      this.title="Hello!"
      return this.title;
    },
  },
});
