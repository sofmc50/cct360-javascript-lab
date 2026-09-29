function changeMessage() {
    document.getElementById("message").innerHTML = "The message changed with JavaScript!";
}

function changeColour() {
    document.getElementsByClassName("activity")[0].style.backgroundColor = "lightblue";
}

function askQuestion() {
    var answer = confirm("Do you enjoy learning JavaScript?");

    if (answer == true) {
        document.getElementById("answer").innerHTML = "You selected OK.";
    } else {
        document.getElementById("answer").innerHTML = "You selected Cancel.";
    }
}
