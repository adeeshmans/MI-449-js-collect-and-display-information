var firstInput = document.getElementById('fname')
var secondInput = document.getElementById('lname')
var discribeInput = document.getElementById('discription')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var madlibParagraph1 = document.getElementById('madlib1')
var madlibParagraph2 = document.getElementById('madlib2')

// FIRSTNAME
firstInput.addEventListener('input', function () {
  var fname = firstInput.value
  var lname = secondInput.value

  madlibParagraph1.innerHTML = '<strong>' + fname + ' ' + lname + '</strong>'

  // shows the code and inputs
  madlibParagraph2.textContent = '<strong>' + fname + ' ' + lname + '</strong>'
})

// LASTNAME
secondInput.addEventListener('input', function () {
  var fname = firstInput.value
  var lname = secondInput.value

  madlibParagraph1.innerHTML = '<strong>' + fname + ' ' + lname + '</strong>'

  // shows the code and inputs
  madlibParagraph2.textContent = '<strong>' + fname + ' ' + lname + '</strong>'
})

// brief
discribeInput.addEventListener('input', function () {
  var fname = firstInput.value
  var lname = secondInput.value
  var discription = discribeInput.value

  madlibParagraph1.innerHTML =
    '<strong>' +
    fname +
    ' ' +
    lname +
    ' ' +
    discription +
    '</strong> is <em>Hella Charming</em>!!!'

  // shows the code and inputs
  madlibParagraph2.textContent =
    '<strong>' +
    fname +
    ' ' +
    lname +
    ' ' +
    discription +
    '</strong> is <em>Hella Charming</em>!!!'
})

// Contact
emailInput.addEventListener('input', function () {
  var fname = firstInput.value
  var lname = secondInput.value
  var discription = discribeInput.value
  var email = emailInput.value

  madlibParagraph1.innerHTML =
    '<strong>' +
    fname +
    ' ' +
    lname +
    ' ' +
    discription +
    '</strong> is <em>Hella Charming</em>!!!' +
    ' <strong>Contact info </strong><strong>' +
    email +
    ' '

  // shows the code and inputs
  madlibParagraph2.textContent =
    '<strong>' +
    fname +
    ' ' +
    lname +
    ' ' +
    discription +
    '</strong> is <em>Hella Charming</em>!!!' +
    ' <strong>Contact info </strong><strong>' +
    email +
    ' '
})

phoneInput.addEventListener('input', function () {
  var fname = firstInput.value
  var lname = secondInput.value
  var discription = discribeInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  madlibParagraph1.innerHTML =
    '<strong>' +
    fname +
    ' ' +
    lname +
    ' ' +
    discription +
    '</strong> is <em>Hella Charming</em>!!!' +
    ' Contact info <strong>' +
    email +
    ' ' +
    phone +
    '</strong>'

  // shows the code and inputs
  madlibParagraph2.textContent =
    '<strong>' +
    fname +
    ' ' +
    lname +
    ' ' +
    discription +
    '</strong> is <em>Hella Charming</em>!!!' +
    ' <strong>Contact info </strong><strong>' +
    email +
    ' ' +
    phone +
    '</strong>'
})
