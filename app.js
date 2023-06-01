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








