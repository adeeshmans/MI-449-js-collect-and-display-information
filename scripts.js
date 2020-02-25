var firstInput = document.getElementById('fname')
var secondInput = document.getElementById('lname')
var discribeInput = document.getElementById('discription')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var madlibParagraph1 = document.getElementById('madlib1')
var madlibParagraph2 = document.getElementById('madlib2')

// Refactored code
var updateMadlib = function () {
  var fname = firstInput.value
  var lname = secondInput.value
  var discription = discribeInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var string = '<h1>Hi, my name is ' + fname + ' ' + lname + '</h1>' + ' ' + '<p>' + discription + '</p>' + ' <p>If you are interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank ">' +
    email + '</a>' + ' ' + 'or give me a call at <a href="tel:' + phone + ' " target = "_blank" > ' + phone + ' </a>' + '</p > '

  madlibParagraph1.innerHTML = string
  madlibParagraph2.textContent = string
}

firstInput.addEventListener('input', updateMadlib)
secondInput.addEventListener('input', updateMadlib)
discribeInput.addEventListener('input', updateMadlib)
emailInput.addEventListener('input', updateMadlib)
phoneInput.addEventListener('input', updateMadlib)
