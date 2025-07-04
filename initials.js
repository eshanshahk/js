/**
The function should basically take an input name(a string) and convert the same to initials, for e.g John Doe to JD.

Here are few conditions to be met:

A single-worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
A two-worded name must return the first letter of each of the words in the name. Eg. John Doe should have an initial JD
A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
The function should return all initials in uppercase
 * 
 */
function result(firstName, secondName) {
  let letter1 = firstName.split("");
  let letter2 = secondName.split("");
  console.log(letter1[0] + letter2[0])
}

let firstName = "Eshan";
let secondName = "Shah";
result(firstName, secondName);