// console.log("hello world");
// console.log("welcome to class");

//js variables and values (var, let and cost)
// let x = 2;
// x = 9
// const y = 4;

// console.log(x);
// console.log(y);

//convention and rules in naming var
//have a logical var name
// const b = "ola"
// const firstName = "ola"

//compound names - come1casing
//const lastName = "fUNSHO"

//illegal cant start with number, but can start with _ $
// const $year = 2003

//variables are case sensitive

// const country = "Nigeria";
// let state = "lagos";

// console.log(country);
// console.log(state);
// state = "ibadan";
// console.log(state);

//JS DATA TYPES - (Primitive, complex)
//under primitive we have strings, numbers. boolean, null, undefined
//strings - text, quotes
// const firstName = "john";
// const lastName = "Doe";
// const middleName = "Owen";
// const currentJob = "Product Manager";
// const year = 2003
// const email = "olabayoa@yahoo.com";
// // string concatenation simply means joining and plus(+) sign is used
// const fullName = firstName + ' ' + middleName + ' ' + lastName;
// console.log(fullName);
// //my name is john and i work as a product manager
// const description = "my name is " + firstName + " I work as a " + currentJob;
// console.log(description);

// //you can message me on this email, olabayoa@yahoo.com
// const contact = "you can message me on this email, " + email;
// console.log(contact);
// //getting characters -
// console.log(firstName[2]);
// console.log(currentJob[8]);
// console.log(middleName[1]);
// //string lenght
// console.log(firstName.length);
// console.log(description.length);
// //string methods
// // transform -to upperr or lower case
// console.log(fullName.toLocaleUpperCase());
// console.log(fullName.toLocaleLowerCase());

// //extracting parts of string - slice or slice substring or substr
// const email2 = "olabayoa@yahoo.com";
// //string.slice[0,7]
// console.log(email2.slice(0, 7));
// console.log(email2.slice(-5, -1));
// console.log(email2.substring(0,7));

// //string.substring(start, count of cters)
//console.log(email2.substr(0, 5)); //explaining this

// //replace string content- replace or replaceall
// console.log(email2.replace("@", "$"));
// console.log(email2.replaceAll("a", "#"));
// console.log(email2.replace("olabayoa", "hoskyllz"));

// //includes, indexOf, lastIndexOf. trim,concat
// //trimStart,trimend, startsWith, EndsWith

// console.log(email2.includes("ola"));
// console.log(email2.includes("hoskl"));

// console.log(email2.indexOf("a"));
// console.log(email2.lastIndexOf("a"));
// const user = "      olabayo    "
// const password = "      382726227226"
// console.log(user.length, password.length);

// const formattedUser = user.trim();
// const formattedPassword = password.trimStart()
// console.log(formattedUser.length);
// console.log(formattedPassword.length);

// console.log(email2.startsWith("g"));
// console.log(email2.endsWith(".com"));

// //explaing concat
// const job = "frontend"
// console.log(job.concat (' ' + 'developer'))

// //template literals
// const author = "chinua Achebe";
// const book = "Things fall apart";
// const yearr = 1996;
// //the book things fall Apart was written by chinua Achebe in year 1996

// const sent = "the book " + book + " was written by " + author + " in the year " + yearr;

// console.log(sent);

// //template literals
// const sent2 = `the book ${book} was written by ${author} in the year ${yearr}`;

// //my favorite author is chinua achebe

// const fav = `my favorite author is ${author}`;
// console.log(fav);

//numbers - 5 6.3 45000
//maths operators = - + * / ** %
// console.log(6 % 2);
// console.log(5 % 2);
// console.log(5 / 2);

// //order of operation - bodmas, pemdas
// console.log(6 / 3 + 5);

// let balance = 500;
// const t1 = 20;
// const t2 = 100;
// const d1 = 200;

// console.log(5 + 6 * 2 - 3);
 
// let total = 50;
// //icrease the value of total by 10
// total = total + 10;
// total += 5;

// //decrease the value of total by 12
// total = total - 12
// total-= 10
// console.log(total);

// let post = 40;
// post += 15;
// post -= 15;
// post *= 15;
// post /= 15;

// console.log(post);

// let likes = 0;
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes++;
// likes--;
// likes++;
// likes--;

// console.log(likes);

// //Boolean - true or false

// //declare variable called country continent and population

// const country = 'Nigeria';
// const continent = 'Africa';
// let population = 5000000;

// console.log(country, continent, population);
// const isIsland = false;
// const language = 'English';

// population /= 2
// console.log(population);

// population++
// console.log(population);

// //decription - Nigeria is in africa and its population of 25000000 speak french

// const descrip = `${country} is in ${continent} and its population of ${population} speak ${language}`;
 
// console.log(descrip);

// const descrip2 = `${country}  as a country speak majorly ${language}`
// console.log(descrip2);

// //boolean true or false
// //comparism operators - < less > greater <= >= ==
// //= assignment
// //==loose equality, ===strict

// console.log(6 < 3);
// console.log(5 >= 5.0);
// console.log(4 == "4");
// console.log(4 === "4");

// //logical operators - and(&&) or(||) not(!)

// console.log("a" > "A");
// console.log(5 > 6 && 2 == 2);
// console.log(6 > 7 || 2 ===2);

// console.log((2 > 6 || 5.6 == 67) && 67 > 8);
// console.log(5 != 5);
// console.log(5 == 5);

// //type of
// console.log(typeof NaN);

// //type conversion and type coercion
// //strings to numbers
// const str = "90"
// console.log(typeof str);
// const converted = Number(str)
// console.log(typeof converted);

// //numbers to string

// const num = 9000000;
// console.log(typeof num);
// const converted2 = String(num)
// console.log(typeof converted2);

// //type corecion

// const num1 = 8;
// const num2 = "7"
// const res = num1 / num2
// console.log(num1 + num2);
// console.log(num1 / num2);
// console.log(typeof res);



//Null - null this means nothing but its stil a value
let agee = null
console.log(agee, agee + 4, `my age is ${agee}`);

//Undefined - undefined 
let year;
console.log(year);
console.log(year, year + 4 + `the year is ${year}`);

//truthy

//falsey values 0. null, undefined

//control flow
//conditional statement
//if(condition){code}
const password = "238293734444"
if (password.length > 6) {
    console.log("Your password is strong");
} else {
    console.log("Your password is weak");
}


const passwordd = "43545"
if (passwordd.length > 6) {
    console.log("Your password is strong");
} else {
    console.log("Your password is weak");
}


if (password.length > 6 && password.includes("@")) {
    console.log("Your password is strong");
} else {
    console.log("Your password is weak");
}


const country = "Canada"
const continent = "southAmerica"
const population = 29;
const isIsland = false;
const language = "English";

//sarah speaks english has less than 50 people and is not island
//you should live in  america
//america does not meet your criteria<
if (language === "English" && population < 50 && !isIsland) {
    console.log(`you should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

const age = 18;
if (age >= 18) {
    console.log("you are an adult");
} else {
    console.log("you are not one");
}


//if (condition)else if (another condition) else if (condition){}else{}

const pasword = "2536@272828u"
//recommended >7 and include @, strong > 7 and weak

if (pasword.length >= 7 && pasword.includes("@")) {
    console.log("your password is recommended");
} else if (pasword.length >= 7) {
    console.log("your password is strong");
} else {
    console.log("your password is weak");
}

//whether a number is psitive, negative or zero
const numb1 = 47
 
if (numb1 >= 0) {
    console.log("positive");
} else if( numb1 >= 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//even or odd

if (numb1 / 2) {
    console.log("even");
} else {
    console.log("odd");
}

if (numb1 % 2 === 0) {
    console.log("this is even");
} else {
    console.log("this is odd");
}

const enterAge = 17
if (enterAge < 18) {
    console.log("welcome to baby section");
} else if (enterAge <= 50) {
    console.log("welcome to the club");
} else { console.log("welcome to vip section"); }

//switch statement

const day = 67;

switch (day) {
    case 1 : console.log("MONDAY");
        
        break;
     case 2 : console.log("TUESDAY");
        
        break;  
        case 3 : console.log("WEDNESDAY");
        
        break;
        case 4 : console.log("THURSDAY");
        
        break;
        case 5 : console.log("FRIDAY");
        
        break;
        case 6 : console.log("SATURDAY");
        
        break;
        case 7 : console.log("SUNDAY");
        
        break;

    default: console.log("NOT A VALID DAY");
        break;
}


const grade = "B"

switch (grade) {
    case "A": console.log("EXCELLENT");
        
        break;
        case "B": console.log("VERY GOOD");
        
        break;
        case "C": console.log("GOOD");
        
        break;
        case "D": console.log("FAIR");
        
        break;
        case "E": console.log("POOR");
        
        break;
        case "F": console.log("FAIL");
        
        break;

    default: console.log("NOT A VALID GRADE");
        break;
}

console.log("first question");
console.log("first data");
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markWeight1/ (markHeight1 **2)
let johnBMI1 = johnWeight1/ (johnHeight1 **2)
let markHigherBMI1 = markBMI1 > johnBMI1;


console.log(`Mark's BMI: ${markBMI1}`);
console.log(`john's BMI: ${johnBMI1}`);
console.log("john have higher BMI than mark: " + markHigherBMI1);

let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markWeight1/(markHeight1 ** 2)
let johnBMI2 = johnWeight1/(johnHeight1 ** 2)
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("second data");
console.log("Mark's BMI: " + markBMI2);
console.log("John's BMI: " + johnBMI2);
console.log("Mark has a higher BMI than John: " + markHigherBMI2);


console.log("second question");
const markWeight = 80; 
const markHeight = 1.8;

const johnWeight = 75; 
const johnHeight = 1.75;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
  console.log("Both Mark and John have the same BMI!");
}



// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];


// let dolphinsTotalScore = 0;
// for (let i = 0; i < dolphinsScores.length; i++) {
//   dolphinsTotalScore += dolphinsScores[i];
// }
// const dolphinsAverageScore = dolphinsTotalScore / dolphinsScores.length;


// let koalasTotalScore = 0;
// for (let i = 0; i < koalasScores.length; i++) {
//   koalasTotalScore += koalasScores[i];
// }
// const koalasAverageScore = koalasTotalScore / koalasScores.length;


// if (dolphinsAverageScore > koalasAverageScore) {
//   console.log(`Dolphins win with  ${dolphinsAverageScore}!`);
// } else if (koalasAverageScore > dolphinsAverageScore) {
//   console.log(`Koalas win with  ${koalasAverageScore}!`);
// } else {
//   console.log(`Both teams are same score ${dolphinsAverageScore}, it's a draw!`);
// }

// const avgDolphin = (96 + 108 + 89) / 3;
// const avgKoala = (88 + 96 + 110) / 3;

// console.log(avgDolphin, avgKoala);
// if (avgDolphin > ){console.log();}


//ternary operator - condition ? action 1 : action 2
// 15 > 7 ? console.log("yes") : console.log("no");

// const fig2 = 47
// fig2 % 2 === 0 ? console.log("odd number") : console.log("even number");

//loops - repitive task : for, while,do,,while loop
//for (initializer let i = 0; condition i< 5; increment i++){code}
// for (let i = 0; i < 10; i++){
//     console.log(`in the loop ${i}`);
// }
// console.log("outside of the loop");
//sum of
// let sum = 0
// for (i = 0; i <= 100; i++){ sum += 1 }
// console.log(sum);
//while loop(condition){code increment}
// let x = 0;
// while (x < 20) {
//     console.log("HELLO");
//     x++;
// }



//functions -functio declaration
//function  declaration
function myfunction() {
    console.log("hello class");
    console.log("you are welcome");
}
myfunction()

function greet(name = " user", age = 18) {
    console.log("JS hard chaii" + name + age);
    console.log("God abeg" + name + age);
}
greet(" sorry", " 5");
greet(" no vex")
greet()

//calculate the age of user (2023 - yearborn)
function calcAge(year) {
    const age = 2023 - year;
    console.log(`your age is ${age}`);
}
calcAge(1960)
calcAge(1990)

function sumNums(a, b) {
    console.log(`the sum of ${a} and ${b} is ${a + b}`);
}
sumNums(4.5, 78)
sumNums(-45, 87)


function decripCountry(country, population, capitalcity) {
    console.log(`${country} has ${population} million people and its capital city is  ${capitalcity}`);
}
decripCountry("ghana", 7, "accra ")
decripCountry("canada", 25, "toronto")
decripCountry("amaerica", 100, "washington")

//check if an email is valid or not
function checkEmail(email) {
    if (email.includes('@')) {
        console.log(`${email} is a valid address`);
    } else {
        console.log(`${email} is not valid`);
    }
}
checkEmail('olabayoayahoo.com')

//HOISTING
//function expresion
const myAge = 90;
console.log(myAge);

//myfunction2 (4, 5)
const myfunction2 = function (a, b) {
    console.log("anything");
    console.log(a + b);
}
myfunction2(7, 9)

//return keyword
const presh = function (a, b) {
    return a * b
}
presh(9, 0)
const test = presh(10, 10)
console.log(test);

//d- 103, 98, 89
//k- 110, 87, 95
const calcAverage = function (a, b, c) {
    const avg = (a + b + c) / 3
    return Number(avg.toFixed(2))
}
const avgDolphin2 = calcAverage(123, 98, 89);
const avgKoala2 = calcAverage(110, 87, 95)
console.log(avgDolphin2, avgKoala2);

function checkWinner(teamA, teamB) {
    if (teamA > teamB) {
        console.log("first team won");
    } else if (teamB > teamA) {
        console.log("second team won");
    } else {
        console.log("no winner");
    }
}
checkWinner(avgDolphin2, avgKoala2)






//arrays
//objects
//asybchronous js
//dom
















