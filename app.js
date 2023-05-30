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
const firstName = "john";
const lastName = "Doe";
const middleName = "Owen";
const currentJob = "Product Manager";
const year = 2003
const email = "olabayoa@yahoo.com";
// string concatenation simply means joining and plus(+) sign is used
const fullName = firstName + ' ' + middleName + ' ' + lastName;
console.log(fullName);
//my name is john and i work as a product manager
const description = "my name is " + firstName + " I work as a " + currentJob;
console.log(description);

//you can message me on this email, olabayoa@yahoo.com
const contact = "you can message me on this email, " + email;
console.log(contact);
//getting characters - 
console.log(firstName[2]);
console.log(currentJob[8]);
console.log(middleName[1]);
//string lenght
console.log(firstName.length);
console.log(description.length);
//string methods
// transform -to upperr or lower case
console.log(fullName.toLocaleUpperCase());
console.log(fullName.toLocaleLowerCase());

//extracting parts of string - slice or slice substring or substr
const email2 = "olabayoa@yahoo.com";
//string.slice[0,7]
console.log(email2.slice(0, 7));
console.log(email2.slice(-5, -1));
console.log(email2.substring(0,7));

//string.substring(start, count of cters)
console.log(email2.substr(0, 5)); //explaining this

//replace string content- replace or replaceall
console.log(email2.replace("@", "$"));
console.log(email2.replaceAll("a", "#"));
console.log(email2.replace("olabayoa", "hoskyllz"));

//includes, indexOf, lastIndexOf. trim,concat
//trimStart,trimend, startsWith, EndsWith

console.log(email2.includes("ola"));
console.log(email2.includes("hoskl"));

console.log(email2.indexOf("a"));
console.log(email2.lastIndexOf("a"));
const user = "      olabayo    "
const password = "      382726227226"
console.log(user.length, password.length);

const formattedUser = user.trim();
const formattedPassword = password.trimStart()
console.log(formattedUser.length);
console.log(formattedPassword.length);

console.log(email2.startsWith("g"));
console.log(email2.endsWith(".com"));

//explaing concat
const job = "frontend"
console.log(job.concat (' ' + 'developer'))

//template literals
const author = "chinua Achebe";
const book = "Things fall apart";
const yearr = 1996;
//the book things fall Apart was written by chinua Achebe in year 1996

const sent = "the book" + book + " was written by " + author + " in the year " + yearr;

console.log(sent);

//template literals
const sent2 = `the book ${book} was written by ${author} in the year ${yearr}`;

//my favorite author is chinua achebe

const fav = `my favorite author is ${author}`;
console.log(fav);








//numbers - 5 6.3 45000
//Boolean - true or false
//Null - null
//Undefined - undefined 



