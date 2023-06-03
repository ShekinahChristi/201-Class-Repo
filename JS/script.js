'use strict';

let userName = prompt('Hi what is your name?');
// console.log('Hi' + userName + 'welcome to my page about me!!');
alert('Hi' + userName + 'welcome to my page!');

let yes = true;
let no = false;

let answer1 = prompt('Was I born in Nashville?');
if (answer1 === yes) {
  alert('Correct, on to the next question');
  // console.log('Correct, on to the next question');
} else if (answer1 === no){
  alert('Nope try again');
  // console.log('Nope try again');
}

let answer2 = prompt('My birthday is in June?');
if (answer2 === yes){
  // console.log('Right again, Keep going!!');
} else if(answer2 === no) {
  // console.log('Only 11 other months right, who could have known');
}

let answer3 = prompt('I was an only child growing up?');
if(answer3 === yes){
  // console.log('It was lonely but your right');
} else if (answer3 === no){
  // console.log('I wish but try again friend.');
}

let answer4 = prompt('I played football and baseball growing up?');
if(answer4 === yes){
  // console.log('Ah yes, I loved running back and shortstop');
} else if (answer4 === no){
  // console.log('Man I wouldnt know what id do if you were right');
}

let answer5 = prompt('Did I graduate from Tennessee State University');
if (answer5 === yes){
  // console.log('Yes I did, graduate from The Land Of Golden Sunshine, The best HBCU in the land.');
} else if(answer5 === no){
  // console.log('And miss my chance to meet Oprah, I do not think so!');
}
