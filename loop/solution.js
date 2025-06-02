var numberOfBottles = 99

while (numberOfBottles >= 0) {
    var bottleWord = "bottles";
    var nextBottleWord = "bottles";
    var nextNumberOfBottles = numberOfBottles - 1;

    // ganti kate bottle menjadi bottles jika numberOfBottles adalah 1
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } 
    if (nextNumberOfBottles === 1) {
        nextBottleWord = "bottle";
    } else if (nextNumberOfBottles === 0) {
        nextBottleWord = "bottles";
    }

    if(numberOfbottles > 0){
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
    } else {
        console.log("No more bottles of beer on the wall.");
    }

    if(nextNumberOfBottles >= 0) {
      console.log("no more bottles of beer on the wall.");
    }else {
      console.log(nextNumberOfBottles + " " + nextBottleWord + " of beer on the wall.");
    }
}