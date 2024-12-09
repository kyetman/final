let fname = "";
function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    
    let feedback = document.getElementById("feedback").value;
    greetParagraph.innerHTML = "Thank you for you feedback, " + fname + "!";
}
