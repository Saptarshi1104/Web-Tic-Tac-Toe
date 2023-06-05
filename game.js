//Loading Toast
window.onload = (event) => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    setTimeout(function () {
        bsAlert.show();
    }, 1000);
};

// Defining Game Variables
var XO_value = "O"
const player_1 = localStorage.getItem("player1")
const player_2 = localStorage.getItem("player2")
const button_1 = document.getElementById("btn1")
const button_2 = document.getElementById("btn2")
const button_3 = document.getElementById("btn3")
const button_4 = document.getElementById("btn4")
const button_5 = document.getElementById("btn5")
const button_6 = document.getElementById("btn6")
const button_7 = document.getElementById("btn7")
const button_8 = document.getElementById("btn8")
const button_9 = document.getElementById("btn9")
var result_text = document.getElementById("result").innerHTML;

//Text Upload
document.getElementById("player1").innerHTML = "<b><i>Player 1 Name: </i></b>" + player_1
document.getElementById("player2").innerHTML = "<b><i>Player 2 Name: </i></b>" + player_2

//Playing Audio
const audio = document.getElementById('piano_audio')
audio.play()
audio.volume = 0.2

//Defining Speech Synthesis
let utterance = new SpeechSynthesisUtterance("Hello! The Tic Tac Toe Game is about to begin!")
speechSynthesis.speak(utterance)

//Game Functions
function func_1(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    button_1.disabled = true;
    document.getElementById("btn1").innerHTML = XO_value
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_2(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn2").innerHTML = XO_value
    button_2.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_3(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn3").innerHTML = XO_value
    button_3.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_4(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn4").innerHTML = XO_value
    button_4.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_5(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn5").innerHTML = XO_value
    button_5.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_6(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn6").innerHTML = XO_value
    button_6.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_7(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn7").innerHTML = XO_value
    button_7.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_8(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn8").innerHTML = XO_value
    button_8.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function func_9(){

    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    document.getElementById("btn9").innerHTML = XO_value
    button_9.disabled = true
    var box_1 = document.getElementById("btn1").innerHTML;
    var box_2 = document.getElementById("btn2").innerHTML;
    var box_3 = document.getElementById("btn3").innerHTML;
    var box_4 = document.getElementById("btn4").innerHTML;
    var box_5 = document.getElementById("btn5").innerHTML;
    var box_6 = document.getElementById("btn6").innerHTML;
    var box_7 = document.getElementById("btn7").innerHTML;
    var box_8 = document.getElementById("btn8").innerHTML;
    var box_9 = document.getElementById("btn9").innerHTML;
    if(box_1 == "X" && box_2 == "X" && box_3 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "X" && box_5 == "X" && box_6 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "X" && box_8 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_4 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "X" && box_5 == "X" && box_8 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_6 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "X" && box_5 == "X" && box_9 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "X" && box_5 == "X" && box_7 == "X"){
        let utterance = new SpeechSynthesisUtterance("Hurray! X wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>X has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_2 == "O" && box_3 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_4 == "O" && box_5 == "O" && box_6 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_7 == "O" && box_8 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_4 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn4").classList.add('btn-success')
        document.getElementById("btn4").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_2 == "O" && box_5 == "O" && box_8 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn2").classList.add('btn-success')
        document.getElementById("btn2").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn8").classList.add('btn-success')
        document.getElementById("btn8").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_6 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn6").classList.add('btn-success')
        document.getElementById("btn6").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_1 == "O" && box_5 == "O" && box_9 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn1").classList.add('btn-success')
        document.getElementById("btn1").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn9").classList.add('btn-success')
        document.getElementById("btn9").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if(box_3 == "O" && box_5 == "O" && box_7 == "O"){
        let utterance = new SpeechSynthesisUtterance("Hurray! O wins!")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>O has won the match"
        document.getElementById("btn3").classList.add('btn-success')
        document.getElementById("btn3").classList.remove('btn-outline-warning')
        document.getElementById("btn5").classList.add('btn-success')
        document.getElementById("btn5").classList.remove('btn-outline-warning')
        document.getElementById("btn7").classList.add('btn-success')
        document.getElementById("btn7").classList.remove('btn-outline-warning')
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
    else if((box_1 == "X" | box_1 == "O") && (box_2 == "X" | box_2 == "O") && (box_3 == "X" | box_3 == "O") && (box_4 == "X" | box_4 == "O") && (box_5 == "X" | box_5 == "O") && (box_6 == "X" | box_6 == "O") && (box_7 == "X" | box_7 == "O") && (box_8 == "X" | box_8 == "O") && (box_9 == "X" | box_9 == "O")){
        let utterance = new SpeechSynthesisUtterance("Match ends in a draw")
        speechSynthesis.speak(utterance)
        document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Match ends in a draw!"
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
function logout(){
    localStorage.removeItem("player1");
    localStorage.removeItem("player2");
    window.location = "index.html";
}
function reset(){
    if (XO_value == "O"){
        XO_value = "X"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> O"
    }
    else if (XO_value == "X"){
        XO_value = "O"
        document.getElementById("turn").innerHTML = "<b><i>Turn of: </i></b> X"
    }
    button_1.disabled = false
    button_2.disabled = false
    button_3.disabled = false
    button_4.disabled = false
    button_5.disabled = false
    button_6.disabled = false
    button_7.disabled = false
    button_8.disabled = false
    button_9.disabled = false
    document.getElementById("btn1").innerHTML = "1"
    document.getElementById("btn2").innerHTML = "2"
    document.getElementById("btn3").innerHTML = "3"
    document.getElementById("btn4").innerHTML = "4"
    document.getElementById("btn5").innerHTML = "5"
    document.getElementById("btn6").innerHTML = "6"
    document.getElementById("btn7").innerHTML = "7"
    document.getElementById("btn8").innerHTML = "8"
    document.getElementById("btn9").innerHTML = "9"
    document.getElementById("result").innerHTML = "<b><i>Match Result: </i></b>Game in Progress"
    let utterance = new SpeechSynthesisUtterance("Another Match Starts")
    speechSynthesis.speak(utterance)
    if ( document.getElementById("btn1").classList.contains('btn-success') ){
        document.getElementById("btn1").classList.remove('btn-success')
        document.getElementById("btn1").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn2").classList.contains('btn-success') ){
        document.getElementById("btn2").classList.remove('btn-success')
        document.getElementById("btn2").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn3").classList.contains('btn-success') ){
        document.getElementById("btn3").classList.remove('btn-success')
        document.getElementById("btn3").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn4").classList.contains('btn-success') ){
        document.getElementById("btn4").classList.remove('btn-success')
        document.getElementById("btn4").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn5").classList.contains('btn-success') ){
        document.getElementById("btn5").classList.remove('btn-success')
        document.getElementById("btn5").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn6").classList.contains('btn-success') ){
        document.getElementById("btn6").classList.remove('btn-success')
        document.getElementById("btn6").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn7").classList.contains('btn-success') ){
        document.getElementById("btn7").classList.remove('btn-success')
        document.getElementById("btn7").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn8").classList.contains('btn-success') ){
        document.getElementById("btn8").classList.remove('btn-success')
        document.getElementById("btn8").classList.add('btn-outline-warning')
    }
    if ( document.getElementById("btn9").classList.contains('btn-success') ){
        document.getElementById("btn9").classList.remove('btn-success')
        document.getElementById("btn9").classList.add('btn-outline-warning')
    }
}
function alert_func(){
    alert("In order to get better result, set the layout to Landscape. Also change the scale to 68 and enable Background Graphics.")
}