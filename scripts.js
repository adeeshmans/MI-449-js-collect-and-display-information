var firstInput = document.getElementById("fname");
var secondInput = document.getElementById("lname");
// var discrbeInput = document.getElementById("discription");
// var emailInput = document.getElementById("email");
// var phoneInput = document.getElementById("phone");
var madlibParagraph1 = document.getElementById("madlib1");
// var madlibParagraph2 = document.getElementById("madlib2");

firstInput.addEventListener("input", function() {
  var fname = firstInput.value;
  var lname = secondInput.value;

  madlibParagraph1.innerHTML =
    "There once were three <strong>" +
    fname +
    "</strong> that were very <strong>" +
    lname +
    "</strong> because they couldn't stop <strong>";
});

// firstInput.addEventListener("input", updateMadlib);
// secondInput.addEventListener("input", updateMadlib);

// var updateMadlib = function() {
//   var fname = firstInput.value;
//   var lname = secondInput.value;

//   madlibParagraph1.innerHTML = "Hi, my name is" + fname + lname;
// };
