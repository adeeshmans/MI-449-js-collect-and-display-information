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

  madlibParagraph1.innerHTML =
    '<h1>Hi, my name is ' + fname + ' ' + lname + '</h1>' +
    ' ' + '<p>' + discription + '</p>' +

    '<em>Hella Charming</em>!!!' +
    ' <p>If you are interested in a date, you can email me at <a href="mailto:email" target="_blank">' +
    email + '</a>' +

    ' ' + 'or give me a call at <a href="tel:phone" target="_blank">' + phone + '</a>' + '</p>'

  madlibParagraph2.textContent =
    '<h1>Hi, my name is ' + fname + ' ' + lname + '</h1>' +
    ' ' + '<p>' + discription + '</p>' +

    '<em>Hella Charming</em>!!!' +

    '<p>If you are interested in a date, you can email me at <a href="mailto:email" target="_blank">' +
    email + '</a>' +

    ' ' + 'or give me a call at <a href="tel:phone" target="_blank">' + phone + '</a>' + '</p>'
}

firstInput.addEventListener('input', updateMadlib)
secondInput.addEventListener('input', updateMadlib)
discribeInput.addEventListener('input', updateMadlib)
emailInput.addEventListener('input', updateMadlib)
phoneInput.addEventListener('input', updateMadlib)

// Long version of the code
// // FIRSTNAME
// firstInput.addEventListener('input', function () {
//   var fname = firstInput.value
//   var lname = secondInput.value

//   madlibParagraph1.innerHTML = '<strong>' + fname + ' ' + lname + '</strong>'

//   // shows the code and inputs
//   madlibParagraph2.textContent = '<strong>' + fname + ' ' + lname + '</strong>'
// })

// // LASTNAME
// secondInput.addEventListener('input', function () {
//   var fname = firstInput.value
//   var lname = secondInput.value

//   madlibParagraph1.innerHTML = '<strong>' + fname + ' ' + lname + '</strong>'

//   // shows the code and inputs
//   madlibParagraph2.textContent = '<strong>' + fname + ' ' + lname + '</strong>'
// })

// // brief
// discribeInput.addEventListener('input', function () {
//   var fname = firstInput.value
//   var lname = secondInput.value
//   var discription = discribeInput.value

//   madlibParagraph1.innerHTML =
//     '<strong>' +
//     fname +
//     ' ' +
//     lname +
//     ' ' +
//     discription +
//     '</strong> is <em>Hella Charming</em>!!!'

//   // shows the code and inputs
//   madlibParagraph2.textContent =
//     '<strong>' +
//     fname +
//     ' ' +
//     lname +
//     ' ' +
//     discription +
//     '</strong> is <em>Hella Charming</em>!!!'
// })

// // Contact
// emailInput.addEventListener('input', function () {
//   var fname = firstInput.value
//   var lname = secondInput.value
//   var discription = discribeInput.value
//   var email = emailInput.value

//   madlibParagraph1.innerHTML =
//     '<strong>' +
//     fname +
//     ' ' +
//     lname +
//     ' ' +
//     discription +
//     '</strong> is <em>Hella Charming</em>!!!' +
//     ' <strong>Contact info </strong><strong>' +
//     email +
//     ' '

//   // shows the code and inputs
//   madlibParagraph2.textContent =
//     '<strong>' +
//     fname +
//     ' ' +
//     lname +
//     ' ' +
//     discription +
//     '</strong> is <em>Hella Charming</em>!!!' +
//     ' <strong>Contact info </strong><strong>' +
//     email +
//     ' '
// })

// phoneInput.addEventListener('input', function () {
//   var fname = firstInput.value
//   var lname = secondInput.value
//   var discription = discribeInput.value
//   var email = emailInput.value
//   var phone = phoneInput.value

//   madlibParagraph1.innerHTML =
//     '<strong>' +
//     fname +
//     ' ' +
//     lname +
//     ' ' +
//     discription +
//     '</strong> is <em>Hella Charming</em>!!!' +
//     ' Contact info <strong>' +
//     email +
//     ' ' +
//     phone +
//     '</strong>'

//   // shows the code and inputs
//   madlibParagraph2.textContent =
//     '<strong>' +
//     fname +
//     ' ' +
//     lname +
//     ' ' +
//     discription +
//     '</strong> is <em>Hella Charming</em>!!!' +
//     ' <strong>Contact info </strong><strong>' +
//     email +
//     ' ' +
//     phone +
//     '</strong>'
// })
