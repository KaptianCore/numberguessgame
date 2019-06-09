function guess() {
    let answer = 9;
    let input = 0;
    var promptwindow = prompt("What number between 1 - 10 am I thinking of?");
    if(promptwindow != answer) {
        console.log("NO, you are wrong")

    }
    else {
        console.log("YES, you are correct")
    }
}