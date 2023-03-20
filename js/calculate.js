// function for found user input
function userInputValue(userInput) {
  const userInputValue = document.getElementById(userInput);
  const userInputValueString = userInputValue.value;
  const userInputValueInNumber = parseFloat(userInputValueString);
  return userInputValueInNumber;
}

function displayResult(result, value, name) {
  const container = document.getElementById(result);
  const li = document.createElement("li");
  li.innerHTML = `
    <ul>
        <li>${name}:  ${value} <button  style="margin-left: 10px;" class="text-white bg-blue-600 px-2 py-1 rounded font-semibold" id="myButton">Convert m^2</button> </li><br>
    </ul>
    
`;
  container.appendChild(li);
}

document.getElementById("btn-triangle").addEventListener("click", function () {
  const trianle = document.getElementById("triangle");
  const triangleName = trianle.innerText;

  const valueOfB = userInputValue("value-of-b");
  const valueOfH = userInputValue("value-of-h");
  const result = 0.5 * valueOfB * valueOfH;
  displayResult("display-result", result, triangleName);
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangle = document.getElementById("rectangle");
  const rectangleName = rectangle.innerText;

  const valueOfB = userInputValue("value-of-b");
  const valueOfH = userInputValue("value-of-h");
  const result = valueOfB * valueOfH;
  displayResult("display-result", result, rectangleName);
});
