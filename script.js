let firstNumber = ''
let secondNumber = ''
let operator = ''
let buttons = document.getElementsByClassName("btn");
let optBtns = document.getElementsByClassName("operator")

function handleButton(event) {
    let value = event.srcElement.innerHTML;
    let displayValue = document.getElementById("display")

    if (value != "=") {
        if (value == "+" ||
            value == "-" ||
            value == "*" ||
            value == "/" ||
            value == "%"
        ) {
            for (let x of optBtns) {
                x.disabled = true
            }

        } else {
            console.log("else number")
            for (let x of optBtns) {
                x.disabled = false
            }
        }
        displayValue.innerHTML = displayValue.innerHTML + value; // append

    } else {
        console.log('exception : ', value)
        if (value == "=") {
            let answer = eval(displayValue.innerHTML)
            console.log("i will print out here ", answer)
            displayValue.innerHTML = answer
        }
    }
}

for (let btn of buttons) {
    btn.addEventListener("click", handleButton)
}

