new Vue({
  el: '#app',
  data: {
    monsterCounter: 100,
    playerCounter: 100,
    playingGame: false,
    arrayAttack: [],
  },

  computed: {
    styleFunctionMonster: function () {
      return {
        backgroundColor: 'rgba(121, 7, 242, 0.2)',
        width: this.monsterCounter * 2 + 'px',
        height: 20 + 'px',
      };
    },

    styleFunctionPlayer: function () {
      return {
        backgroundColor: 'green',
        width: this.playerCounter * 2 + 'px',
        height: 20 + 'px',
      };
    },
  },

  methods: {
    playAttack: function (max, min) {
      const number1 = Math.floor(Math.random() * (max + 2 - min) + min);
      const number2 = Math.floor(Math.random() * (max - min) + min);

      if (this.monsterCounter - number1 >= 0) {
        this.monsterCounter = this.monsterCounter - number1;
        this.arrayAttack.push(`THE MONSTER RECIVE ${number1}`);
      }

      if (this.playerCounter - number2 >= 0) {
        this.playerCounter = this.playerCounter - number2;
        this.arrayAttack.push(`YOU RECIVE ${number2}`);
      }
    },
    playHeal: function (max, min) {
      const number2 = Math.floor(Math.random() * (max - min) + min);
      if (this.playerCounter + number2 <= 100) {
        this.playerCounter = this.playerCounter + number2;
      }
    },
    restart: function () {
      this.monsterCounter = 100;
      this.playerCounter = 100;
      this.playingGame = false;
      this.arrayAttack = [];
    },
  },
});
