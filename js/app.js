'use script';
alert('Hi, nice to meet you, let\'s play a funny game!');

let score =0;
// Question1
function question1(){
  let pets = prompt('Do you think that I like cats?');
  switch (pets.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Aww yeah, it\'s correct I like cats^.^');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Oh no, it\'s not correct :( I like cats');
    break;
  default:
    alert('Please answer with yes/no or y/n');
    break;
  }
  pets=pets.toLocaleLowerCase();
  if(pets==='yes'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }else if(pets==='y'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }
}
question1();

// Question2
function question2(){
  let drivingLicense = prompt('Do you think that I have a driving license?');
  switch (drivingLicense.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert('No dear, unfortunately I don\'t have');
    break;
  case 'NO':
  case 'N':
    alert('Yeah you are right, I\'m afraid driving');
    score++;
    break;
  default:
    alert('Please answer with yes/no or y/n');
    break;
  }
  drivingLicense=drivingLicense.toUpperCase();
  if(drivingLicense==='NO'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }else if(drivingLicense==='N'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }
}
question2();
// Question3
function question3(){
  let swimming = prompt('Do you guess that I can swim?');
  switch (swimming.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert('Not really dear, I can\'t');
    break;
  case 'NO':
  case 'N':
    alert('Aww yes, you are correct I can\'t ');
    score++;
    break;
  default:
    alert('Please answer with yes/no or y/n');
    break;
  }
  swimming=swimming.toUpperCase();
  if(swimming==='NO'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }else if(swimming==='N'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }
}
question3 ();
// Question4
function question4 (){
  let tall = prompt('Do you guess that I\'m tall?');
  switch (tall.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Bravo, true ^.^ my tall is 1.66m ');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Haha not true, my tall is 1.66m');
    break;
  default:
    alert('Please answer with yes/no or y/n');
    break;
  }
  tall=tall.toLowerCase();
  if(tall==='yes'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }else if(tall==='y'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }
}
question4();
// Question5
function question5(){
  let maritalStatus = prompt('Do you think that I\'m single ?');
  switch (maritalStatus.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('You are right, I\'m single and feeling free ');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Oops you\'re wrong, I\'m single');
    break;
  default:
    alert('Please answer with yes/no or y/n');
    break;
  }
  maritalStatus=maritalStatus.toLowerCase();
  if(maritalStatus==='yes'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }else if(maritalStatus==='y'){
  //console.log('Congratulations, you\'re answer is correct');//
    alert('Congratulations, you\'re answer is correct');
  }
}
question5();

// Question6

for (let i = 0; i <4; i++) {
  let age = prompt('Guess How old am I? pick a number from 20 to 25');
  age = Number(age);
  if (age === 23) { score++;
    alert('Bravo, your guessing is correct');
    break;
  } else if (19 < age && age < 22) {
    alert('Nope, your guessing is too low');
  } else if (age === 25) {
    alert('Nope, your guessing is too high');
  } else if (age === 22 || age === 24) {
    alert('Awww dear not really, but you are too close');
  } else {
    alert('Please only choose a number from 20 to 25');
    // console.log(i);
  }
  if(i===3){
    alert('I am 23, Thanks for your trials ^-^');
  }
}
// Question7

let typesOfMovies = ['horror', 'thriller', 'comedy', 'action'];

outerLoop: {
  for (let j = 1; j <= 6; j++) {
    let favMovie = prompt('What is my favourite type of movies do you think ?');
    favMovie = favMovie.toLowerCase();
    for (let k = 0; k < typesOfMovies.length; k++) {
      if (favMovie === typesOfMovies[0] || favMovie === typesOfMovies[1]) {score++;
        alert('Great! Your answer is correct');
        break outerLoop;
      }
      else if (favMovie === typesOfMovies[2] || favMovie === typesOfMovies[3]) { score++;
        alert('Well done! correct guess');
        break outerLoop;
      }
      else {
        alert('Nope! your guess is not correct');
        break;
      }
    }
  }

}

alert(`My favourite movies types are ${typesOfMovies}`);
if(score===7){
  alert(`Wow Congratulations ^-^ dear you got ${score}/7`);
}else{
  alert(`Your final score is ${score}/7`);
}
let userName = prompt('What is your name ?');
alert('Greetings, dear' + ' ' + userName + ' ' + 'you are very welcomed at our site');
alert('Hope you are having fun with us' + ' ' + userName + ' ' + 'It\'s our pleasures to have you as one of our appreciated visitors');









