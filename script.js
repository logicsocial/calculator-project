function appendValue(value) {
    let display = document.getElementById("display");
    let operators = ["+", "-", "*", "/"];
    let lastChar = display.value.slice(-1);

    if (display.value === "" && ["+", "*", "/"].includes(value)) return;
    if (operators.includes(value) && operators.includes(lastChar)) return;

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    if (display.value === "") return;

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1500);
    }
}
