new Vue({
    el: '#app',
    data: {
        topLeft: false,
        topRight: false,
        bottomLeft: false,
        bottomRight: false,
        sequence: [],
        squareMapping : ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
        },
    methods: {
        addNewElemToSequence(){
            this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
        },

        newgame() {
            this.sequence = [];
            this.addNewElemToSequence();
        }
    }
})