// function for found user input
function userInputValue(userInput) {
  const userInputValue = document.getElementById(userInput);
  const userInputValueString = userInputValue.value;
  const userInputValueInNumber = parseFloat(userInputValueString);
  return userInputValueInNumber;
}
// function for display result
function displayResult(id, result, name) {
  console.log(result);
  const container = document.getElementById(id);
  const li = document.createElement("li");
  li.innerHTML = `
    <ul>
        <li>${name}:  ${result}cm^2 <button  style="margin-left: 10px;" class="text-white bg-blue-600 px-2 py-1 rounded font-semibold" id="myButton">Convert m^2</button> </li><br>
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
// forrectangle calculation
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangle = document.getElementById("rectangle");
  const rectangleName = rectangle.innerText;

  const valueOfB = userInputValue("value-of-w");
  const valueOfH = userInputValue("value-of-l");
  const result = valueOfB * valueOfH;
  displayResult("display-result", result, rectangleName);
});

// for Parallelogram calculation

document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogram = document.getElementById("parallelogram");
    const parallelogramName = parallelogram.innerText;

    const valueOfB = userInputValue("value-b");
    const valueOfH = userInputValue("value-h");
    const result = valueOfB * valueOfH;
    displayResult("display-result", result, parallelogramName);
  });

document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogram = document.getElementById("parallelogram");
    const parallelogramName = parallelogram.innerText;
    const valueofb = 10;
    const valueofh = 12;
    const result = valueofb * valueofh;
    displayResult("display-result", result, parallelogramName);
  });

document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombus = document.getElementById("rhombus");
  const rhombusName = rhombus.innerText;
  const valueofb = 16;
  const valueofh = 8;
  const result = 0.5 * valueofb * valueofh;
  displayResult("display-result", result, rhombusName);
});

document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagon = document.getElementById("pentagon");
  const pentagonName = pentagon.innerText;
  const valueofb = 6;
  const valueofh = 10;
  const result = 0.5 * valueofb * valueofh;
  displayResult("display-result", result, pentagonName);
});
