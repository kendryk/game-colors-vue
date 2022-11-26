const vm = new Vue({
  el: "#app",
  data: {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
    sequence: [],
    squareMapping: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
  },
  methods: {
    addNewElemToSequence() {
      this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
    },

    allgray() {
      this.topLeft = false;
      this.topRight = false;
      this.bottomLeft = false;
      this.bottomRight = false;
    },

    newgame() {
      this.sequence = [];
      this.addNewElemToSequence();
      this[this.sequence[0]] = true;
      setTimeout(function () {
        vm.allgray();
      }, 300);
    },

    selectSquare(square) {
        console.log(square);
    }
  },
});