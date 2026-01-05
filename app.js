const myUl = document.getElementById("myUl"); //ul ke variable a nilam
const li = document.createElement("li"); //li create korlam
li.innerText = "Home"; //li  er vitor content dilam
myUl.appendChild(li); //ul er vitor li ke pathiye dilam

//bmi calculator start from here
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = e.target.weight.value;
  const height = e.target.height.value;
  const bmi = (weight / Math.pow(height, 2)).toFixed(2);

  const result = document.getElementById("result");
  const h2 = document.createElement("p");
  const h3 = document.createElement("p");

  h2.innerText = `Your BMI is ${bmi}`;
  h3.innerText = `You are ${
    bmi > 24.9 ? "overWeight" : bmi >= 18.6 ? "normal" : "underweight"
  }`;

  result.appendChild(h2);
  result.appendChild(h3);
});
