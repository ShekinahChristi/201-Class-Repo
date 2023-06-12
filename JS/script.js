'use strict';

let userName = prompt('Hi what is your name?');
// console.log('Hi' + userName + 'welcome to my page about me!!');
alert('Hi' + userName + 'welcome to my page!');
//function writeUsersName()
//document.write(userName)

// truthy
// falsy
let userPoints = 0;

function birthPlace(userinput){

let answer1 = prompt(userinput);
console.log('Was I born in Nashville?');

if (answer1 === 'yes' || answer1 === 'y') {
  alert('Correct, on to the next question');
userPoints++;
  // console.log('Correct, on to the next question');
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Nope try again');
} // console.log('Nope try again');
else {
  alert('That answer is not valid');
 
}
}
birthPlace('Was I born in Nashville?');

function birthdate(userinput){
let answer2 = prompt(userinput);

if (answer2 === 'yes' || answer2 === 'y') {
  // console.log('Right again, Keep going!!');
  alert('Right again, Keep going!!' );
  userPoints++;
} else if (answer2 === 'no' || answer2 === 'n') {
  // console.log('Only 11 other months right, who could have known');
  alert('Only 11 other months right, who could have known');
} else {
  alert('That answer is not valid');

}
}
birthdate('My birthday is in June?');


function childhood(userinput){
let answer3 = prompt(userinput);

if (answer3 === 'yes' || answer3 === 'y') {
  // console.log('It was lonely but your right');
  alert('It was lonely but your right' );

} else if (answer3 === 'no' || answer3 === 'n') {
  // console.log('I wish but try again friend.');
  alert('I wish but try again friend.');
} else {
  alert('That answer is not valid');
}
}
childhood('I was an only child growing up?');


function sports(userinput){
let answer4 = prompt(userinput);

if (answer4 === 'yes' || answer4 === 'y') {
  // console.log('Ah yes, I loved running back and shortstop');
  alert('Ah yes, I loved running back and shortstop' );

} else if (answer4 === 'no' || answer4 === 'n') {
  // console.log('Man I wouldnt know what id do if you were right');
  alert('Man I wouldnt know what id do if you were right');
}else {
  alert('That answer is not valid');
}
}
sports('I played football and baseball growing up?');


function collegeschool(userinput){
let answer5 = prompt(userinput);

if (answer5 === 'yes' || answer5 === 'y') {
  // console.log('Yes I did, graduate from The Land Of Golden Sunshine, The best HBCU in the land.');
  alert('Yes I did, graduate from the The Land Of Golden Sunshine, The best HBCU in the land.' );

} else if (answer5 === 'no' || answer5 === 'n') {
  // console.log('And miss my chance to meet Oprah, I do not think so!');
  alert('And miss my chance to meet Oprah, I do not think so!');
} else {
  alert('That answer is not valid');
}
}
collegeschool('Did I graduate from Tennessee State University');

let number ='';
let i = 0;
while (number !== '6'){
  console.log('First game :' , i);
  number = prompt ('guess a number between 1 and 10');
  if(number < 6){
    alert('too low');
  }else if (number > 6){
    alert('too high');
  }
}
i++;
if(i<6){
  number = '6';
  console.log(number);
}

for (let i = 0; i < 4; i++){
  console.log('Second game :' , i);
  let number2 = prompt('guess a number between 1 and 10');
  if(number2 === '5'){
    alert('correct!');
  }
}

alert('You have gained ${userPoints}');

alert('You have ${userPoints}');


