console.log('test_mastermind');

var modelSize = 4
//var model = [];

/*
GRIS :: #bbbbbb
VERT :: #61b15a
ROUGE :: #f05454
MARROn :: 825959
*/

var paletteColor = [
    [1,"#bedcfa"],
    [2,"#adce74"],
    [3,"#d35d6e"],
    [4,"#fcf876"],
];

/*
[5,"#cc0e74"],
[6,"#ffa5a5"],
[7,"#150485"],
[8,"#835858"],
[9,"#6a2c70"],
[10,"#cf7500"],
[11,"#da9ff9"],
[12,"#d1c145"],
*/

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

class Mastermind {

    constructor(size) {
        var tbl_init = []
        for(var i=1; i <= size; i++){
            tbl_init.push(i);
        }
        this.MODEL = shuffle(tbl_init);
        console.log(this.MODEL);
    }

    compare(other) {
        for(var i=0; i < this.MODEL.length ; i++){
            for(var j=0; j < other.length ; j++){
                if(this.MODEL[i] == other[j]){
                    if(i == j){
                        console.log("VERT");
                    } else {
                        console.log("ROUGE");
                    }
                }
            }
        }
    }
}

//------------------------------------------------------

var test2 = new Mastermind(modelSize);
//console.log(test2.MODEL);

var test3 = [1,2,3,4];

test2.compare(test3);
