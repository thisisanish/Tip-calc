// OHH yeahhh lets go
//function goes here
function calcuateTip(){
//storing the data into the variables
var billAmount=document.getElementById("billAmount").value;
var serviceQuality = document.getElementById("serviceQuality").value;
var numPeople = document.getElementById("totalPeople").value;

// Quick Validation

if (billAmount == "" || serviceQuality == 0) {
  window.alert("Please Enter some values to get this baby up and running!");
  return; //returns to the same function and stops it from contuining
}
// check to see if the input is  or less thant or equal to 1
  if (numPeople=="" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display="none"; //hides ease or that eleent
  }
  else {
    document.getElementById("each").style.display ="block";
  }

  // some bitchy maths
  var total = (billAmount*serviceQuality)/numPeople; //calcuates
  total = Math.round(total*100)/100; // rounds off
  total = total.toFixed(2); // rounds off to exact 2 decimal places



  //display the Tip

  document.getElementById("totalTip").style.display="block";
  document.getElementById("tip").innerHTML = total;
  return;
}






//hide the tip Amount
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

// clicking the button calls my custom function;calcuateTip

document.getElementById("calcuate").onclick = function(){
  calcuateTip();
}
