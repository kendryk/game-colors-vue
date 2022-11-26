const vm = new Vue({
  el: "#app",
  data: {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
    sequence: [],
    tmp: [],
    squareMapping: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
  },
  computed: {
    score() {
      const value = this.sequence.length - 1;
      return value < 0 ? "score : 0 " : `score : ${value}`;
    },
  },

  methods: {
    addNewElemToSequence() {
      this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
      this.tmp = this.sequence.slice();
    },

    allgray() {
      this.topLeft = false;
      this.topRight = false;
      this.bottomLeft = false;
      this.bottomRight = false;
    },

    newgame() {
      this.sequence = [];
      this.nextTurn();
    },

    nextTurn() {
      this.addNewElemToSequence();
      this.allgray();
      this.playSequence(this.tmp[0]);
    },

    playSequence(square) {
      this[square] = true;
      setTimeout(function () {
        vm.allgray();
        vm.tmp.shift();
        if (vm.tmp[0]) {
          setTimeout(function () {
            vm.playSequence(vm.tmp[0]);
          }, 400);
        } else {
          vm.tmp = vm.sequence.slice();
        }
      }, 400);
    },

    selectSquare(square) {
      if (square === this.tmp[0]) {
        this[square] = true;
        setTimeout(function () {
          vm.allgray();
          vm.tmp.shift();
          if (!vm.tmp[0]) {
            vm.nextTurn();
          }
        }, 400);
      } else {
        alert("LOST");
      }
    },
  },
});
