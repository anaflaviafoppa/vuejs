new Vue({
  el: '#app',
  data: {
    monsterCounter: 100,
    playerCounter: 100,
    playingGame: false,
    arrayAttack: [],
  },


  methods: {
    showAlert: function (max, min) {
      alert('press space')
    },
  },
});
