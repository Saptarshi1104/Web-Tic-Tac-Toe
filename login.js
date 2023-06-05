function login(){
    let utterance = new SpeechSynthesisUtterance("Successfully Logged In!")
    speechSynthesis.speak(utterance)
    const player1_name = document.getElementById("id1").value;
    const player2_name = document.getElementById("id2").value;
    localStorage.setItem("player1", player1_name)
    localStorage.setItem("player2", player2_name)
    window.location = "game.html"
}