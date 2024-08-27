function checkAnswers() {
    const answer1 = document.getElementById("q1").value.toLowerCase();
    const answer2 = document.getElementById("q2").value.toLowerCase();
    const answer3 = document.getElementById("q3").value.toLowerCase();
    const answer4 = document.getElementById("q4").value.toLowerCase();
    const answer5 = document.getElementById("q5").value.toLowerCase();
    const answer6 = document.getElementById("q6").value.toLowerCase();
    const answer7 = document.getElementById("q7").value.toLowerCase();
    const answer8 = document.getElementById("q8").value.toLowerCase();
    const answer9 = document.getElementById("q9").value.toLowerCase();


    if (answer1 === "mohinee kharka gupta" && answer2 === "19/03/2024" && answer3 === "24/01/2024" && answer4 === "asta" && answer5 === "1" && answer6 === "mohinee kharka gupta" && answer7 === "tinkies" && answer8 === "suzume" && answer9 === "mohinee kharka gupta") {
        document.getElementById("questions-section").style.display = "none";
        document.getElementById("password-section").style.display = "block";
    } else {
        alert("Oops! Some answers are incorrect. Please try again.");
    }
}

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "Soundproof") {
        document.getElementById("password-section").style.display = "none";
        document.getElementById("gift-section").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
