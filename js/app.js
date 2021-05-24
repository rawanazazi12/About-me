'use script';
alert('Hi, nice to meet you, let\'s play a funny game!');
let pets = prompt('Do you think that I like cats?');
switch (pets.toLowerCase()) {
case 'yes':
case 'y':
  alert('Aww yeah, it\'s correct I like cats^.^');
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
let drivingLicense = prompt('Do you think that I have a driving license?');
switch (drivingLicense.toUpperCase()) {
case 'YES':
case 'Y':
  alert('No dear, unfortunately I don\'t have');
  break;
case 'NO':
case 'N':
  alert('Yeah you are right, I\'m afraid driving');
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
let swimming = prompt('Do you guess that I can swim?');
switch (swimming.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Not really dear, I can\'t');
  break;
case 'NO':
case 'N':
  alert('Aww yes, you are correct I can\'t ');
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
let tall = prompt('Do you guess that I\'m tall?');
switch (tall.toLowerCase()) {
case 'yes':
case 'y':
  alert('Bravo, true ^.^ my tall is 1.66m ');
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
let maritalStatus = prompt('Do you think that I\'m single ?');
switch (maritalStatus.toLowerCase()) {
case 'yes':
case 'y':
  alert('You are right, I\'m single and feeling free ');
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

let userName=prompt('What is your name?');
alert('Greetings, dear'+" "+userName+" "+ 'you are very welcomed at our site');
alert('Hope you are having fun with us'+" "+userName+" "+ 'It\'s our pleasures to have you as one of our appreciated visitors');