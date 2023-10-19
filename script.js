// Get the display element
const display = document.querySelector(".display");

// Add a click event listener to all the buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

// Store the current calculation expression
let expression = "";

function handleClick(e) {
    const buttonValue = e.target.getAttribute("data-value");

    // Handle different button clicks
    switch (buttonValue) {
        case "=":
            try {
                // Replace the ÷ symbol with the regular division operator
                expression = expression.replace(/÷/g, '/');
                // Handle percentage operation correctly
                expression = expression.replace(/(\d+)%/g, (match, number) => parseFloat(number) / 100);
                // Evaluate the expression and display the result
                const result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
            break;
        case "AC":
            // Clear the display and the expression
            display.value = "";
            expression = "";
            break;
        case "DEL":
            // Remove the last character from the expression
            expression = expression.slice(0, -1);
            display.value = expression;
            break;
        default:
            // Append the button value to the expression
            expression += buttonValue;
            display.value = expression;
    }
}
