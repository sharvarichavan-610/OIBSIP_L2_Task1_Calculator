const input = document.querySelector(".input");
const output = document.querySelector(".output");

const buttons = document.querySelectorAll("button");
buttons.forEach(key => {
    key.addEventListener("click", calculate);
});

function calculate() {
    let buttonText = this.innerText;

    if(buttonText === "AC") {
        input.innerText = "";
        output.innerText = "0";
        output.style.fontSize = "25px";
        return;
    }

    if(buttonText === "DEL") {
        input.textContent = input.textContent.substr(0, input.textContent.length-1);
        return;
    }

    if(buttonText === "="){
        let val = eval(input.innerText); 
        output.innerText = val.toFixed(2);
        output.style.animation = "big 0.3s ease-in-out";
        input.style.animation = "small 0.3s ease-in-out";
        output.style.animationFillMode = "forwards";
        input.style.animationFillMode = "forwards";
    }

    else {
        input.textContent += buttonText;
    }
}