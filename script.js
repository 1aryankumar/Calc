
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

let expression = "";

function handleClick(e) {
    const buttonValue = e.target.getAttribute("data-value");

    switch (buttonValue) {
        case "=":
            try {
           
                const result = eval(expression);
                display.value = result;
                expression = result;
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
            break;
        case "AC":
        
            display.value = "";
            expression = "";
            break;
        case "DEL":
        
            expression = expression.slice(0, -1);
            display.value = expression;
            break;
        default:
         
            expression += buttonValue;
            display.value = expression;
    }
}
