
Operators

let a = 1;
console.log(a); // 1
a = a + 1;
console.log(a); // 2
a = a + 1;
console.log(a); // 3



Variables/ClassLab

let firstName = 'Jessa';
let lastName = 'Jakima';
let birthYear = 1917;
let needCoffee = true;
let currentYear = 2022;
let currentAge = currentYear - birthYear;
console.log(currentAge);



Conditionals

let isOn = true;

if(isOn == true) {
    console.log('The light is on!');
}


let isOn = true; 

if(isOn) {
    console.log('The light is on, yay!');
}
// COULD ALSO BE   let isOn: true


let weather = 75;
if(weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('Don\'t wear a jacket');
}


// And, Or, Not

if(weather < 70 && rain) {
    console.log('wear the jacket');
}else {
    console.log('wear the Tshirt');
}

if (weather > 70 || rain) {
    console.log('wear the shorts');
} else {
    console.log('wear the jacket');
}

weather = 68;
let rain = false;

if(!rain) {
    console.log('sunscreen');
}



// [ELSE / if

let grade = 88;
grade = 74;
grade = 0;

if(grade > 75) {
    console.log('passing');
} else if(grade >= 69) {
    console.log('Please see the teacher');
} else {
    console.log('Failing');
}



