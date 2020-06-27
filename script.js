
//We first set up our objects by targeting HTML id's
var totalEl = document.getElementById("total");
var tipEl = document.getElementById("tipPercent");
var submitEl = document.getElementById("submit");
var splitEl = document.getElementById("split");



//Logic for calculating tip
function calculateTip(total, tipPercentage) {

  //multiply the total by the tip and make sure we get a number with at least 2 decimals and return results
  var roundResult = (total * tipPercentage).toFixed(2);
  return roundResult;

}


//Logic for calculating total
function calculateTotal (total, tipAmount){

  //ParseFloat makes sure we dont loose any decimals along the way as we add the total and tip amount
  return parseFloat(total) + parseFloat(tipAmount);

}



//Logic for combining tip and total
function addTip (event) {

  event.preventDefault();

  //Set tip percentage and multiply tip by .01 so it works with our calculateTip function
  var tipPercentage = tipEl.value * .01;

  //Set total
  var total = totalEl.value

  //Set variables and use functions to calculate Tip and total
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);

  //Display the tip amount within the tip-amount id
  document.querySelector("#tip-amount").textContent = tipAmount;

  //Display the new total through the new-total id and use .toFixed(2) so we dont loose our decimals
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);

}

function splitTotal (event) {
  event.preventDefault();

  var total = document.querySelector("#new-total").textContent;
  var numPeople = document.querySelector("#num-people").value;

  var newTotal = (total / numPeople).toFixed(2);
  document.getElementById("split-total").textContent = newTotal;

}


submitEl.addEventListener("click", addTip);
splitEl.addEventListener("click", splitTotal);