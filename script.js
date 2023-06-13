//select elements on the webpage - class, id, tagname, css selector
// const heading = document.getElementsByClassName('heading')
// console.log(heading);
// const para = document.getElementById('ptag')
// console.log(para);

// const p = document.getElementsByTagName('p')
// console.log(p);

//querySelector - css selector - .class #id, p
//querySelectorAll

// const paragragh = document.querySelector('p')
// console.log(paragragh);
// const paragraghs = document.querySelectorAll('p')
// paragraghs.forEach((p) => console.log(p))
// const h1 = document.querySelector('.heading')
// console.log(h1);

// const div = document.querySelector('#test')
// console.log(div);

// //changing content on the web - innerText, textContext, innerHTML
// console.log(h1.innerText);
// //h1.innerText += "welcome"
// console.log(h1.textContent);
// h1.textContent = "hello class"
// console.log(div.innerHTML);
// //div.innerHTML += "<h1>from js</h1>"
// div.innerHTML += "<a>visit google</a>"

// const anotherH = document.querySelector("#test h1")
// console.log(anotherH);
// anotherH.textContent ="funsho"


const body = document.querySelector('body')
body.innerHTML = "<h1> javascript</h1>"
body.style.backgroundColor = "blue"