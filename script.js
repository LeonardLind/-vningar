/* function myFirstJavaScript() {
    alert("Hello world");
    let accept = confirm("Är du säker?");
    
    if (accept) {
        console.log("Ja, jag är säker");
    }
}
*/

let Leo = "Carvy"
console.log(Leo)

/*
let x = 5; 
let y = 10; 
*/

let z = (x + y);
console.log(x + y)

let pColor = document.getElementById("redId");
pColor.style.color = "green";

let divId = document.getElementById("divId");
divId.id = "divNyId";

let textSomÄndras = document.getElementById("textSomÄndras");
textSomÄndras.innerHTML = "Jag har ändras"; 


/* 
    function btn() {
    let btn = document.getElementById("btn");
    btn.innerHTML = "Du klickade på knappen"; 
    console.log("Du klickade på knappen")
}
*/

const button = document.getElementById("btn");
button.addEventListener("click", function() {
    let btn = document.getElementById("btn");
    btn.innerHTML = "Du klickade på knappen"; 
    console.log("Du klickade på knappen")
});


/*const submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    const textInput = document.getElementById("textInput").value;
    let answer = document.getElementById("answer");
    answer.innerHTML = textInput;
}); */

let submit = document.getElementById("submit");
let answer = document.getElementById("textAnswer");
submit.addEventListener("click", function(reload) {
    reload.preventDefault();
    let textInput = document.getElementById("textInput").value;
    textAnswer.innerHTML = textInput;
});


let submitMath = document.getElementById("submitMath"); 
let mathAnswer = document.getElementById("mathAnswer");
submitMath.addEventListener("click", function(reload) {
    reload.preventDefault();
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    mathAnswer.innerHTML = x + y;
});

let btn = document.getElementById("btn");
btn.addEventListener("click", () => { 
    let x = Number(document.getElementById("x2").value);
    let y = Number(document.getElementById("y2").value);
    document.getElementById("result2").innerHTML = x + y;
});


let merEllerMindreSubmit = document.getElementById("merEllerMindreSubmit");
let merEllerMindre = document.getElementById("merEllerMindre");
merEllerMindreSubmit.addEventListener("click", function(reload) {
    reload.preventDefault(); 
    let merEllerMindreInput = document.getElementById("merEllerMindreInput").value;
    if (merEllerMindreInput >= 100) {
        merEllerMindre.innerHTML = "Det var ett stort tal";
    } else {
        merEllerMindre.innerHTML = "Det var ett litet tal";
    }
});


function spellOutName() {
    const name = "Leonard"; 
    let result = "";
    for (let i = 0; i < name.length; i++) {
        result += name[i];
        if (i < name.length - 1) { 
            result += " ";
        }
    }
    console.log(result);
}

spellOutName();




