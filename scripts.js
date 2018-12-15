function regexChecker() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let nameLengthRegex = /[^A-z]{1,}$/; //matches minimum length of string
  let nameCapsRegex = /^[A-Z]/; //matches first char for Caps
  if ( firstName.match(nameCapsRegex) && firstName.match(nameLengthRegex) &&
         lastName.match(nameCapsRegex) && lastName.match(nameLengthRegex) ){
    alert("Yay! Your inputs were all correct!");
    console.log(true + "\n" + firstName + " " + lastName);
  } else {
    alert("Oh no! Thats an invalid format!");
    console.log(false + "\n" + firstName + " " + lastName);
  } //END IF statement
} //END MyRegexChecker
/*
Helpful Resources
  https://codepen.io/AdamActual/pen/zyYjKZ
  https://github.com/genericCog/Regex_Caps_Length_JavaScript
  https://codeshare.io/adNRpM
  https://stackoverflow.com/questions/19932596/regex-to-not-allow-special-characters-javascript
  https://www.sitepoint.com/using-regular-expressions-to-check-string-length
  https://stackoverflow.com/questions/869809/combine-regexp
*/
