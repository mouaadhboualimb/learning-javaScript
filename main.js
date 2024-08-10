//////lesson 97:



//////lesson 96:(css styling)
// let el = document.getElementById("my-div");
// el.style.color = "red";
// el.style.fontWeight = "600";
// el.style.cssText = "font-weight: 900; color: green; opacity: 1;";
// el.style.removeProperty("color");
// el.style.setProperty("font-size", "30px", "important");
// document.styleSheets[0].rules[0].style.removeProperty("line-height");//line-height will be removed even if it was important in the css file
// document.styleSheets[0].rules[0].style.setProperty("background-color", "gold");

//////lesson 95:(class list)
// let el = document.getElementById("my-div");
// console.log(el.classList);
// console.log(typeof el.classList);
// console.log(el.classList.contains("mouaadh"));
// console.log(el.classList.contains("show"));
// console.log(el.classList.item(2));//show
// console.log(el.classList[2])//show / this is equivalent to the above one
// el.onclick = function () {
//     el.classList.add("add-one", "add-two");
//     el.classList.remove("one", "add-one");
//     el.classList.toggle("show");//if show exists it removes it and if it doesn't exist it add it
// }
// why this code dont work :
// el.onblur = function () {
//     el.classList.remove("add-one", "one");
// }

//////lesson 94: 
// let one = document.querySelector("[name='username']");
// let two = document.querySelector("[name='age']");
// window.onload = function () {
//     two.focus();
// }
// one.onblur = function () {
//     document.links[0].click();//when the event onblur is done click() is applied, the same thing for focus()
// }

//////lesson 93:(validating a form)
// document.links[0].onclick = function (event){
//     console.log(event);//this shows you the event ou are using 
//     event.preventDefault();//this fun is used to stop the event to not be applied, when i used this instead of event i got an error why 
// }
//// let's see how to validate a form : 
// let user = document.querySelector("[name='username']");
// let age = document.querySelector("[name='age']");
//// method one of validating a form :
// document.forms[0].onsubmit = function (e) {
//     let userValid = false,
//         ageValid = false;
//     if(user.value !== "" && user.value.length <= 10)
//         userValid = true;
//     if (age.value !== "")
//         ageValid = true;
//     if (ageValid === false || userValid === false) {
//         e.preventDefault();
//     }
// }
//// method two of validating a form : 
// document.forms[0].onsubmit = function (e) {
//     if(user.value === "" || user.value.length > 10 || age.value === "")
//         e.preventDefault();
// }

//////lesson 92:(events)
// let myBtn = document.body.firstElementChild;
// myBtn.onclick = function () {//there is also oncontextmenu, onmouseenter, onmouseleave
//     console.log('clicked from main.js file');
// };
// window.onscroll = function () {
//     console.log("Scroll");
// };
// window.onresize = function () {
//     console.log("resized");
// };
// let inp = document.getElementsByTagName('input')[0];
//     inp.onfocus = function () {
//         console.log("focused");
//     }
// i dont knw how to use onblur and onload?????????????

//////lesson 91:
// let myEl = document.querySelector("div");
// console.log(myEl);
// console.log(myEl.children);// this is only for elements
// console.log(myEl.childNodes);//this is for texts and comments and elements
// console.log(myEl.childNodes[3]);
// console.log(myEl.firstChild);//for texts and elements and comments
// console.log(myEl.lastChild);
// console.log(myEl.firstElementChild);//but this is only for elements 
// console.log(myEl.lastElementChild);

//////lesson 90:
// for(let i = 0; i < 100; i++) {
//     // creating elements
//     const myProduct = document.createElement("div");
//     const myH3 = document.createElement("h3");
//     const myP = document.createElement("p");
//     // creating texts 
//     const productNumber = i + 1;
//     myProduct.className = `product-${productNumber}`;
//     myH3.textContent = `product ${productNumber}`;
//     myP.textContent = `product ${productNumber} is the best`;
//     // appending elements  
//     myProduct.appendChild(myH3);
//     myProduct.appendChild(myP);
//     document.body.appendChild(myProduct);
// }

//////lesson 89:(create elements)
// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("product One");
// let myComment = document.createComment("this is div element");
// myElement.className = "product";
// myElement.setAttributeNode(myAttr);//use this when you have acctuly an attr and you want to add it 
// myElement.setAttribute("data-test", "testing");
// myElement.appendChild(myComment);//adding the comment inside the element
// myElement.appendChild(myText);//not neccessary to be a div child ,here you just add a text to the div.product 
// document.body.appendChild(myElement);//here appending the div to the body

//////lesson 88:
// console.log(document.getElementsByTagName("img")[0].attributes);
// myImg = document.getElementsByTagName("img")[0];
// console.log(myImg.hasAttributes());//true
// if (myImg.hasAttribute("alt")){
//     if (myImg.getAttribute("alt") === ""){
//         myImg.removeAttribute("alt");
//         console.log("alt has removed");
//     }
//     else{ 
//         myImg.setAttribute("alt", "image");
//         console.log(`alt value changed to "image"`);
//     }
// }   else {
//     console.log("attr not found");
// }        

//////lesson 87:
// let myEl = document.getElementsByClassName("js");
// console.log(myEl[0].innerHTML);//it returns the html elements and texts without changing the code
// console.log(myEl[0].textContent);//it ignores the html elements
// myEl[0].innerHTML = "test from <span>main.js</span> file";
// console.log(myEl[0].innerHTML);//it returns the html elements and texts without changing the code
// console.log(myEl[0].textContent);//it ignores the html elements
// myEl[0].textContent = "test from <span>main.js</span> file";
// console.log(myEl[0].innerHTML);//it returns the html elements and texts without changing the code
// console.log(myEl[0].textContent);//it ignores the html elements
// document.images[0].src = "https://google.com";
// document.images[0].alt = "alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "pic-class";
// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));//to show the value of the attribute 
// // if tha attr exists and empty it returns nothing and if its not present it returns null
// console.log(myLink.getAttribute("href"));
// myLink.setAttribute("id","");//to create an attribute and give it a value or just overriding the value if the attr exists
// console.log(myLink.getAttribute("id"));//li

//////lesson 86: (DOM):
// let myIdEl = document.getElementById("my-span");
// console.log(myIdEl);
// let myTagEl = document.getElementsByTagName("p");
// console.log(myTagEl);
// console.log(myTagEl[1]);
// let myClassEl = document.getElementsByClassName("my-div");
// console.log(myClassEl);
// let myQuery = document.querySelector("#my-span");//here we gget just the first id 
// console.log(myQuery);
// let myQueryAll = document.querySelectorAll("p");//here we get all the p elements not just the first one
// console.log(myQueryAll);
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);
////// exercices (79 - 85) 
// exercise 02:
// Method One
// let objMethodOne = {
//     property:  "Method One",
// };
// console.log(objMethodOne.property); // "Method One"
// // Method Two
// let objMethodTwo = new Object({
//     property:  "Method Two",
// });
// console.log(objMethodTwo.property); // "Method Two"
// // Method Three
// let objMethodThree = Object.create(objMethodTwo);
// objMethodThree.property =  "Method Three";
// console.log(objMethodThree.property); // "Method Three"
// // Method Four
// let objMethodFour = Object.assign({}, {property: "Method Four"});
// console.log(objMethodFour.property); // "Method Four"
// exercise 03:
// let a = 1;
// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };
// let twoNums = {
//   e: 5,
//   f: 6,
// };
// let finalObject = Object.assign({}, {a}, threeNums, twoNums);
// console.log(finalObject);//it wil look like this :
/*
a: 1
b: 2
c: 3
d: 4
e: 5
f: 6
*/
// exercise 04:
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
//   // Code One => How To Get Object Length ?
//   let objectLength = Object.keys(myFavGames).length;
//   let array = Object.keys(myFavGames);//this gives an array of the titles of the properties & methods in the object
//   for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${array[i]}`);
//     console.log(`The Publisher Is ${myFavGames[array[i]].publisher}`);
//     console.log(`The Price Is ${myFavGames[array[i]].price}`);
  
//     // Check If Nested Object Has Property (bestThree)
//     if (Object.hasOwn(myFavGames[array[i]], "bestThree")) {//Object.hasOwn(obj, string) returns true if the string is a prop or meth of the object named before
//       console.log("- Game Has Releases");
//       console.log(`First => ${myFavGames[array[i]].bestThree.one}`);
//       console.log(`Second => ${myFavGames[array[i]].bestThree.two}`);
//       console.log(`Third => ${myFavGames[array[i]].bestThree.three}`);
//     }
//     console.log("#".repeat(20));
//   }

//////lesson 85:(assign)
// let obj1 = {
//     prop1: 1,
//     meth1: function () {
//         return this.prop1;
//     },
// };
// let obj2 = new Object({
//     prop2: 2,
//     meth2: function () {
//         return this.prop2;
//     },
// });
// let target = new Object({
//     prop3: 3,
//     meth3: function () {
//         return this.prop3;
//     }, 
// });
// let final = Object.assign(target, obj1);//the properties and methods of obj1 are copied to target and assign will return the target object to the final
// console.log(final);
// console.log(target);
// let final2 = Object.assign({}, obj1,{prop4: 4,})
// console.log(final2);

//////lesson 84:(create and this tric)
// let user = {
//     age: 20,
//     doubleAge: function () {
//         return user.age * 2;
//     },
// };
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());
// let copyUser = Object.create(user);
// copyUser.age = 50;
// console.log(copyUser);
// console.log(copyUser.age);//50
// console.log(copyUser.doubleAge());//40 since it returns user.age * 2
// to make the changes concern the object itself not the prototype we use "this"
// let user = {
//     age: 20,
//     doubleAge: function () {
//         return this.age * 2;
//     },
// };
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());
// let copyUser2 = Object.create(user);
// copyUser2.age = 50;
// console.log(copyUser2);
// console.log(copyUser2.age);//50
// console.log(copyUser2.doubleAge());//100 

// "use strict";
//////lesson 83: (this)
// console.log(this);
// var myVar = 100;
// console.log(this.myVar);// 100  since var-declared variables are properties of window. 
// let myVar_2 = 100;
// console.log(this.myVar_2);// undefined since let-declared variables are not properties of window. 
// function test () {
//     console.log(this);//this here is Window
// }
// test();
// document.getElementById("click").onclick = function () {
//     console.log(this);//this here is for the button click
// }
// let user = new Object({
//     age: 20,
//     ageInDays: function () {
//         console.log(this);
//         return this.age * 365;
//     },
// });
// console.log(user.age);
// console.log(user.ageInDays());



//////lesson 82:
//// the traditional way for creating objects
// let user = {
//     age: 20,
// };
//// new keyword for creating objects
// let user = new Object({
//     age: 21,
// });
// console.log(user);
// user.age = 38;
// user["country"] = "algeria";
// console.log(user);

////lesson 81:
// let user = {
//     name: "mouaadh",
//     age: 38,
//     available: false,
//     adresses :{
//         egypt: "cairo",
//         alg: {
//             one: "oran",
//             two: "tebessa",
//         },
//     },
//     checkAv: () => user.available === true ? "you can work" : "you cannot work",
// };
// console.log(user.adresses.alg.two);
// console.log(user["adresses"].alg.two);

////lesson 80 :(Dot & bracket notation)
// there is two methods of using a dynamic property name :
// let myVar = "country of";
// let familyName = "name";
// let user = {
//   theName: "mouaadh",
//   [familyName] : "bouali",
//   theAge: 20,
//   "country of": "algeria",
// };
// console.log(user.name);
// console.log(user[myVar]);

////lesson 79 :(object)
// let user = {
//     //properties
//     theName: "mouaadh",
//     theAge: "20",
//     //methods
//     sayHello: function () {
//         return `Hello`;
//     },
// };
// console.log(user.sayHello() ,user.theName, user.theAge);

////exercises(71 - 78) :
// exercise 01 :
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let name = mix.map(el => typeof el === "number" ? "" : el).reduce((acc, current) => `${acc}${current}`);
// console.log(name);
// exercise 02 :
// let myString = "EElllzzzzzzzeroo";
// let name = myString.split("").reduce((acc, current) =>  current !== acc[acc.length - 1] ? `${acc}${current}` : acc);
// console.log(name);
// exercise 03 :
// let myArray = ["E", "l", "z", ["e", [ "p", "p", "p"], "r"], "o"];
// first method :
// let name = myArray.flat().join("");
// second method:
// let name = myArray.reduce(function (acc, current) {

//     if (typeof current === "object" ) {
//         return `${acc},${current.reduce((accu, curr) => `${accu},${curr}`)}`;
//     }
//     else {
//         return `${acc},${current}`;
//     }
// }).split(",").join("");
// console.log(name);
// exercise 04 :
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let result = numsAndStrings.filter(el => Number.isInteger(parseInt(el))).map(el => -el);
// console.log(result);
// exercise 05 :
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let result_500 = nums.reduce((acc, current) => current % 2 === 1 ? acc + current : acc * current , 1 );
// console.log(result_500);

////lesson 78 :(challenge)
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split("").filter(el => !Number.isInteger(+el) && el !== ",").map(el => el === "_" ? " " : el).slice(+true, -isNaN(myString)).reduce((acc, current) => `${acc}${current}`);
// console.log(solution); // Elzero Web School

////lesson 77 :(forEach)
// repeated after studying all the course

////lesson 76 :
// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "PropagandaTwo"];
// let theBiggestIs = theBiggest.reduce((acc, current) => acc.length > current.length ? acc : current);
// console.log(theBiggestIs);
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
// first method :
// let nameString = removeChars.filter(el => el !== "@").join("");
// second method :
// let nameString = removeChars.filter(el => el !== "@").reduce((acc, current) => `${acc}${current}`);
// third method :
// let nameString = removeChars.reduce((acc, current) => acc === "@" ? "" : current === "@" ? acc : `${acc}${current}`);
// console.log(nameString);

////lesson 75 :(reduce)
// let nums = [10, 20, 15, 30];
// let add = nums.reduce(function (accumulator, currentElement, currentIndex, sourceArray) {
//   console.log(`accumulator => ${accumulator}`);
//   console.log(`Current Element => ${currentElement}`);
//   console.log(`Current Element Index => ${currentIndex}`);
//   console.log(`Array => ${sourceArray}`);
//   console.log(accumulator + currentElement);
//   console.log(`#############`);
//   return accumulator + currentElement;
// }, 5);//5 is the initial value
// console.log(add);
// let nums = [10, 20, 15, 30];
// let add = nums.reduce(function (accumulator, currentElement, currentIndex, sourceArray) {
//   console.log(`accumulator => ${accumulator}`);
//   console.log(`Current Element => ${currentElement}`);
//   console.log(`Current Element Index => ${currentIndex}`);
//   console.log(`Array => ${sourceArray}`);
//   console.log(accumulator + currentElement);
//   console.log(`#############`);
//   return accumulator + currentElement;
// });//nums[0] is the initial value of the accumulator
// console.log(add);
// the arrow way :
// let nums = [10, 20, 15, 30];
// let add = nums.reduce((acc, current) => acc + current);
// console.log(add);

////lesson 74 :
// exercise 01:
// let sentence = "I Love Foood Code Too Playing Much";
// let smallwords = sentence.split(" ").filter(el => el.length < 5).join(" ");
// console.log(smallwords);
// console.log(smallwords.length);//20
// let smallwords = sentence.split(" ").map(el => el.length < 5 ? el : "").join(" ");
// console.log(smallwords);
// console.log(smallwords.length);//22
// exercise 02:
// let mix = "A13BS2ZX";
// let result = mix.split("").filter(el => !isNaN(+el)).map(el => el * el).join("");
// console.log(result);
////lesson 73 :(filter)
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// let filtered = friends.filter(function (el) {
//   return el.startsWith("A"); //the same as (return el.startsWith("A") ? true : false;)
// });
// console.log(filtered);

////lesson 72 :(map practice)
// practice one
// let swapingCases = "elZERo";
// let afterSwap = swapingCases.split("").map(function(element) {
//   if(element.toUpperCase() === element) {
//    return element.toLowerCase();
//   }
//   else {
//     return element.toUpperCase();
//   }
// }).join("");
// console.log(afterSwap);
// the arrow version (without braces (the return is implicit)):
// let swapingCases = "elZERo";
// let afterSwap = swapingCases.split("").map(element =>
//   element.toUpperCase() === element ?  element.toLowerCase() : element.toUpperCase()
// ).join("");
// console.log(afterSwap);
// the arrow version (without braces (the return is implicit)):
// let swapingCases = "elZERo";
// let afterSwap = swapingCases.split("").map(element => {
//   return  element.toUpperCase() === element ?  element.toLowerCase() : element.toUpperCase()
// }).join("");
// console.log(afterSwap);
// practice two :
// let inver = [1, -10, -20, 15, 100, -30];
// let afterInver = inver.map(a => -a);
// console.log(afterInver);
// practice three :
// let ignoreNum = "ekn12kj6j9";
// let afterIgnore = ignoreNum.split("").map(a => Number.isInteger(parseInt(a)) ? "" : a ).join("");
// console.log(afterIgnore);

////lesson 71 :(the map function)
// first method
// let myNums = [1,2,3,4,5,6];
// let newNums = [];
// for (let i = 0; i < myNums.length; i++)
//   newNums.push(myNums[i] * 2);
// console.log(newNums);
// the map method(creats a new array):
// let myNums = [1,2,3,4,5,6];
// let newNums = myNums.map(function (element, index, array) {//the index and array are optional but the element argument is nessessary
//   return element * 2;
// })
// console.log(newNums);
// the arrow version of the last example
// let myNums = [1,2,3,4,5,6];
// let newNums = myNums.map(a => a * 2);
// console.log(newNums);
// another method :
// let myNums = [1,2,3,4,5,6];
// function multiTwo (a) {
//   return a * 2;
// }
// let newNums = myNums.map(multiTwo);
// console.log(newNums);

////exercises (64 - 70):
// exercise 01:
// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     return `${zName.slice(0, zName.indexOf(" ") + 1) + zName.charAt(zName.indexOf(" ") + 1).toUpperCase()}.`;
//   }
//   function ageWithMessage(zAge) {
//     return `Your age is ${parseInt(zAge)}`;
//   }
//   function countryTwoLetters(zCountry) {
//     return `You live in ${zCountry.slice(0, 2).toUpperCase()}`;
//   }
//   function fullDetails() {
//     console.log("Hello ", namePattern(zName) , "," , ageWithMessage(zAge) , "," , countryTwoLetters(zCountry));
//   }
//   return fullDetails();
// }
// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));// Hello Osama M., Your Age Is 38, You Live In EG
// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));// Hello Ahmed A., Your Age Is 32, You Live In SY
// exercise 02:
//    itsMe = () => `Iam A Normal Function`;
//    console.log(itsMe()); // Iam A Normal Function
//   urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
//   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// exercise 03 :
// first example of the Currying function :
// const curiedMultiply = a => b => a * b;
// function curiedMultiply(a) {
//   return function mom (b){
//     return a * b;
//   };
// }
// console.log(curiedMultiply(2)(3));
// second example of the use of Currying functions :
// const multiplyBy10 = curiedMultiply(10);
// console.log(multiplyBy10(5));//inthis example we reduced the number of parameters to one which make the operation easier to do
// third example of the Currying function :
// const checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }
// console.log(checker("Osama")("Available")); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// exercise 04 :
// function specialMix(...nums) {
//   let s = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (typeof nums[i] === "string") {
//       if (Number.isInteger(parseInt(nums[i]))) {
//         s += parseFloat(nums[i]);
//       } else continue;
//     } else s += nums[i];
//   }
//   if (s === 0 && nums[0] !== undefined) {
//     return  "All are strings";
//   }
//   return s;
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Test", "Testing", "20Cool")); // 20
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All are Strings

//// lesson 70 (challenge) :
// let names = function (...allNames) {
//     return `String [${allNames.join("], [")}] => Done`;
// }
// console.log(names("osama", "mok", "kiij", "mmk"));
// let names = (...allNames) => `String [${allNames.join("], [")}] => Done`;
// console.log(names("osama", "mok", "kiij", "mm"));
// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[+!Array.isArray(myNumbers)];
// console.log(calc(20, 50, 10, 60)); // 80

////lesson 68 (the block scope problem with var and let):
// first experience :
// var x = 10;
// if (1 === 1){
//     var x = 50;
// }
// console.log(x);//50 because the var dont act as a local var in the if scope
// second experience :
// var x = 10;
// if (1 === 1){
//     let x = 50;//it's color changed after changing the var to let
// }
// console.log(x);//10 because the let makes the x becomes a local var in the local scope of the if

////lesson 66 :
// let printingNum = function () {
//     return 10;
// }
// let printingNum = () => 10;//this is equivalent to the above function
// let printingNum = _ => 10;//this is equivalent to the above function and the return value is 10 and the _ sign is in place of the () when there is no parameter
// let printingNum = function (x) {
//     x++;
//     return x;
// }
// let printingNum = (x) => {
//     x++;
//     return x;
// }
// let printingNum = (x) => ++x;//this is equivalent to the above function
// let printingNum = x => x++;//the () are not necessary when there is only one parameter
// console.log(printingNum(10));

////exercises(57 - 63):
// exercise 01:
// function sayHello(theName, theGender){
//     theGender === "Male" ? theGender = "Mr" : theGender === "Female" ? theGender = "Miss" : theGender = "";
//     document.write(`Hello ${theGender} ${theName}`);
// }
// sayHello ("mouaadh", "Male");
// exercise 02:
// function calculate(firstNum, secondNum, operation) {
//     let result;
//     secondNum === undefined ? result = "Second Number Not Found" :  operation === "+" || operation === undefined ?  result = firstNum + secondNum : operation === "-" ? result = firstNum - secondNum : operation === "*" ? result = firstNum * secondNum : result = "Unknown operation";
//     console.log(result);
// }
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, '+'); // 50
// calculate(20, 30, '-'); // -10
// calculate(20, 30, '*'); // 600
// calculate(20, 10, "/");
// exercise 03:
// function age(years) {
//     if (years < 10 || years > 100){
//         console.log("Age Out Of Range");
//     } else {
//         let  days, hours, minutes , seconds, tmp;
//         tmp = (years * 365).toFixed(6);
//         days = parseInt(tmp);
//         tmp = ((tmp - days) * 24).toFixed(5);
//         hours = parseInt(tmp);
//         tmp = ((tmp - hours) * 60).toFixed(3);
//         minutes = parseInt(tmp);
//         seconds = ((tmp - minutes) * 60).toFixed();
//         console.log(`Your age is ${days} days and ${hours} hours and ${minutes} minutes and ${seconds} seconds`);
//     }
//     }
//     age(17.369);
// exercise 05
// function createSelectBox(startYear, endYear) {
//     document.write(`<label for = "select">Select your born year : </label>`);
//     document.write(`<select name = "born year" id = "select">`);
//     for(let i = startYear; i <= endYear; i++) {
//         if (i === 2004) {
//             document.write(`<option selected value = "2004">2004</option>`);
//             continue;
//         }
//         document.write(`<option value = "${i}">${i}</option>`);
//     }
//     document.write(`</select>`);
// }
// createSelectBox(2000, 2024);
// exercise 06 :
// function multiply(...numbers) {
//     let p = 1;
//     for(let i = 0; i < numbers.length; i++) {
//         if(typeof numbers[i] === "string")
//         continue;
//         p *= parseInt(numbers[i]);
//     }
//     console.log(p);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

////lesson 63 (challenge):
// function showDetails(a, b, c) {
//     let name, age, bool;
//     [a, b, c].forEach(item => {
//         typeof item === "string" ? name = item : typeof item === "number" ? age = item : item === false ? bool = "not" : bool = "";
//     });
//     document.write(`<p>Hello ${name}, Your age is ${age}, You are ${bool} available for hire</p>`);
// }
// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

////lesson 61 :
// function sum (...numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++)
//         result += numbers[i];
//     return result;
// }
// console.log(sum (10, 20, 30, 15));

////lesson 60 :(default function parameter)
// function sayHallo (useName = "Unknown", age = "Unknown") {
//     // method 01
//     // if (age === undefined)
//     //     age = "Unknown";
//     // age = age || "Unknown";
//     return `Hello ${useName} your age is ${age}`;
// }
// console.log(sayHallo("momo"));

////lesson 59 :
// function generate(start, end) {
//     for(let i = start; i< end ; i++) {
//         if (i === 15)
//         return 'interruptting';
//         console.log(i);
//     }
// }
// generate(12, 19);

////lesson 58 :
// function geneYears (start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude)
//         continue;
//         console.log(i);
//     }
// }
// geneYears(1982, 2024, 2019);

////lesson 56 (challenge):
// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
// document.write(`<h1>We have ${myAdmins.length} admins</h1>`);
// let i = 0;
// while (i < myAdmins.length) {
//     if (myAdmins[i] === "Stop") break;
//     document.write(`<hr>`);
//     document.write(`<h2>The admin for team ${i + 1} is ${myAdmins[i]}</h2>`);
//     document.write(`<h3>Team members:</h3>`);
//     for (let k = 0, j = 0; j < myEmployees.length; j++) {
//         if (myAdmins[i][0] === myEmployees[j][0]) {
//             document.write(`<p>${++k}- ${myEmployees[j]}</p>`);
//         }
//     }
//     i++;
// }
// document.write(`<hr>`);

////lesson 54 , 55:
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;
// while (i < products.length) {
//     console.log(products[i]);
//     i++;
// }
// do {
//     console.log(products[i]);
//     i++;
// } while (i < products.length);

////lesson 53 :
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 4;
// document.write(`<h1>Show ${showCount} products</h1>`);
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

////lesson 52 :
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;
// for (;;) {
//     console.log(products[i]);
//     i++;
//     if (i === products.length) break;
// }

////lesson 51 :
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// mainloop: for (let i = 0; i < products.length; i++) {
//   console.log(`# ${products[i]}`);
//   nestedloop: for (let j = 0; j < colors.length; j++) {
//       if (colors[j] === "Green") break mainloop;
//       console.log(`    ${colors[j]}`);
//   }
// }

////lesson 50 :
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];
// for (let i = 0; i < products.length; i++) {
//     console.log("#".repeat(25));
//     console.log(`[${i + 1}] ${products[i]}`);
//     console.log("colors :");
//     for (let j = 0; j < colors.length; j++) {
//         console.log(`# ${colors[j]}`);
//     }
//     console.log("models :");
//     for (let k = 0; k < models.length; k++) {
//         console.log(`** ${models[k]}`);
//     }
// }
// console.log("#".repeat(25));

////challenges (40 - 47) :
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// myFriends.length = num;
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// myFriends.push();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.pop();
// friends.shift();
// console.log(friends); // ["Eman", "Osama"]
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [arrTwo[arrTwo.indexOf("Z")] , arrOne.reverse() , arrTwo.reverse().slice(+true )];
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// console.log(arrOne.concat(arrTwo).sort().reverse());// ["Z", "X", "D", "C", "B", "A"]
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
//  console.log(words[website.length][website.length - website.length].splice(website.length).toUpperCase()); // ZERO
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// haystack.includes(needle) ? console.log("found") : console.log("not dound");
// haystack.indexOf(needle) === -1 ? console.log("not found") : console.log("found");
// switch (needle) {
//     case haystack[0] :
//     console.log("found");
//     break;
//     case haystack[1] :
//     console.log("found");
//     break;
//     case haystack[2] :
//     console.log("found");
//     break;
//     default :
//     console.log("not found");
// }
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();
// console.log(allArrs); // fxy

////lesson 47 :(challenge)
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// my.reverse().splice(zero, --counter);//splice func works only with arrays not strings
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]
// my.unshift("Elzero");
// console.log(`"${my[--zero]}"`); // "Elzero"
// console.log(`"${my[zero][my[zero].indexOf("r")] + my[zero][my[zero].indexOf("o")].toUpperCase()}"`); // "rO"

////lesson 46 :
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];
// let allFriends = myFriends.concat(myNewFriends,1 ,"momo" ,schoolFriends);
// console.log(allFriends);
// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" | ").toUpperCase());

////lesson 45 :
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice(1, -2));
// console.log(myFriends);
// myFriends.splice(1, 3, "tass", "kass");//splice(starting index, n of delete, elements to add)
// console.log(myFriends);

////lesson 44 :
// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
// console.log(myFriends);
// console.log(myFriends.reverse());
// console.log(myFriends.sort());

////lesson 43 :
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
// console.log(myFriends);
// console.log(myFriends.indexOf("Ahmed", 2));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

////lesson 42 :
// let myFriends = ["ahmed", "mohamed", "mouaadh", "iyad"];
// console.log(myFriends);
// myFriends.unshift("momo", "toto");
// console.log(myFriends);
// myFriends.push("koki" ,"toti");
// console.log(myFriends);
// let first = myFriends.shift();
// console.log(first);
// console.log(myFriends);
// let last = myFriends.pop();
// console.log(last);
// console.log(myFriends);

////lesson 41 :
// let arr =["hi", "hello", "hihi"];
// console.log(arr);
// console.log(arr.length);
// arr.length = 2;
// console.log(arr);

////lesson 40 :
// let friends = ["iyad", "kais", "momo", ["ali", "bacha"]];
// console.log(`hello ${friends[3][1][2]}`);//hello c
// friends[1] = ["koko", "bobo"];//repacing "kais" with the array
// console.log(friends);
// console.log(Array.isArray(friends));//true

////lesson 39 :
// let job = "Developer";
// let salary = 0;
// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
// }
// console.log(salary);
// let holidays = 0;
// let money = 0;
// if (holidays === 0) {
//     money = 5000;
// } else if(holidays === 1 || holidays === 2) {
//     money = 3000;
// } else if (holidays === 3) {
//     money = 2000;
// } else if (holidays === 4) {
//     money = 1000;
// } else if (holidays === 5) {
//     money = 0;
// } else {
//     money = 0;
// }
// console.log(`My money is ${money}`);

////lesson 38 :
// let day = 3;
// switch (day) {
//     default :
//         console.log("unknown day");
//         break;
//     case 7 :
//     case 0 :
//         console.log("saturday");
//         break;
//     case 1 :
//         console.log("sunday");
//         break;
// }

////lesson 37 :
// let a = 10;
// if (a < 10) {
//   console.log("> 10");
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }
// a < 10 ? console.log("> 10") : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("Unknown");
// let st = "Elzero Web School";
// if ((st.length * 2).toString() === "34") {
//   console.log("good");
// }
// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }
// if (typeof(Boolean(st)) !== "string") {
//   console.log("Good");
// }
// if (typeof st.length === "number") {
//     console.log("Good");
//   }
// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

////lesson 36 :
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// let price = 0;
// console.log(`the price is ${price || 100}`);// it works with (Null, undefined, any falsy value)
// console.log(`the price is ${price ?? 100}`);// it works only with (Null and undefined)

////lesson 35 :
// let name = "ahmed";
// let gender = "male";
// let age = 30;
// if (gender === "male") {
//     console.log("Mr");
// } else {
//     console.log("Mrs");
// }
// let result = gender === "male" ? "Mr" : "Mrs";
// console.log(result);
// document.write(`hello ${gender === "male" ? "Mr" : "Mrs"} ${name}`);

////lesson 32 :
// console.log(!true);
// console.log(!(10 == "10"));

////lesson 31 :
// console.log(10 == "10");// == compare value only
// console.log(10 != "10");
// console.log("10" === "10");// === compare value and type
// console.log(10 !== 10);

////exercises(27 - 30)
// let userName = "Elzero";
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.slice(0, 1).toLowerCase()); // e
// console.log(userName.slice(- userName.length, - userName.length + 1).toLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase()); // e
// console.log(userName.substr(0, 1).toLowerCase().repeat(3)); // eee
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";
// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

////exercises(23 - 26)
// console.log(- Number.MIN_SAFE_INTEGER);
// console.log(`${Number.MAX_SAFE_INTEGER}`.length);
// let myVar = "100.56789 Views";
// console.log(parseInt(myVar)); // 100
// console.log(+ parseFloat(myVar).toFixed(2)); // 100.57
// console.log(Number(parseFloat(myVar).toFixed(2)));//second method
// let num = 10;
// console.log(`${num}`.length); // 2
// console.log(Number.isInteger(num) + Number.isInteger(num));//second method
// let flt = 10.4;
// console.log(Math.round(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.ceil(flt) - true); // 10
// console.log(parseInt(flt)); // 10
// console.log( + flt.toFixed()); // 10
//this code generates numbers between 0 and 4
// if(Math.ceil(Math.random() * 4) % 2 == 0 && Math.ceil(Math.random() * 4) % 2 == 0){
//     console.log("0");
// }else{
//     console.log(Math.ceil(Math.random() * 4));
// }

////lesson 30 :
// let a = " Elzero Web School   ";
// console.log(a.trim().charAt(0).toLowerCase() + a.trim().slice(1, a.trim().length - 1).toUpperCase() + a.trim().charAt(a.trim().length - 1).toLowerCase());
// let b = "Elzero Web School";
// console.log(b.charAt(2).toUpperCase() + b.slice(3, 6));
// console.log(b.charAt(13).toUpperCase().repeat(8));
// console.log(b.split(" ", 1));
// console.log(b.substr(0, 6) , b.substr(-6));

////lesson 29 :
// let a ="elzero web school";
// console.log(a.substring());//substring(starting index, ending index)
// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));// swaping the indexes
// console.log(a.substring(-10, 3));//-10 == 0
// console.log(a.substring(a.length - 5, a.length - 1));
// console.log(a.substr(2, 4));//zero
// console.log(a.substr(-4, 3));//substr(starting index, n of chars)
// console.log(a.includes("web", 2));//true //includes(string, starting index)
// console.log(a.includes(" ", 12));//false
// console.log(a.startsWith("e"));true
// console.log(a.startsWith("o", 5));//true
// console.log(a.endsWith("l"));//true
// console.log(a.endsWith("r", 5));//true //endsWith(string, length)

////lesson 28
// let a="eloozero web school";
// console.log(a.indexOf("web", 3));//7
// console.log(a.indexOf("o",3));//5
// console.log(a.lastIndexOf("o"));//15
// console.log(a.slice(2,6));//not including the end
// console.log(a.slice(-5,-3));//slicing from the end
// console.log(a.repeat(3));
// console.log(a.split());// 1 element in the array(split returns an array)
// console.log(a.split().length);// 1
// console.log(a.split("o"));// 6 elements
// console.log(a.split("o").length); // 6
// console.log(a.split("o", 3));//3 means i want just 3 parts of the division
// console.log(a.split("o", 3).length);//3

////lesson 27
// let theName = " Ahmed Mos";
// console.log(theName);
// console.log(theName.trim());//return string without spaces in just the right and the left not the spaces between the words
// console.log(theName[1]);
// console.log(theName.charAt(1));
// console.log(theName.length);
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim());
// console.log(theName.trim().charAt(2).toUpperCase());

////lesson 26
// let a= 1_00,
//     b= 2_00.5,
//     c= 1e2,
//     d= 2.4;
// console.log(Math.trunc(Math.min(a,b,c,d)));
// console.log(Math.pow(a,Math.round(d)));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(parseInt(d));
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
// console.log(Math.ceil(b) / Math.ceil(d));

////lesson 25
// console.log(Math.round(99.2));//التقريب العادي
// console.log(Math.round(99.5));
// console.log(Math.ceil(99.2));//السقف
// console.log(Math.floor(99.8));//الارضية
// console.log(Math.trunc(99.5));//the integer part
// console.log(Math.min(99,52.6,-14,-125,6));
// console.log(Math.max(99,52.6,-14,-125,6));
// console.log(Math.pow(2,3));
// console.log(Math.random());//generate a random number between 0 and 1

////lesson 24
// console.log((100).toString());// also can be written console.log(100..toString());
// console.log(5151.985515.toFixed(2));//toFixed returns a string
// console.log(+"100");
// console.log(+"100 momo");
// console.log(parseInt("100.24 ossama"));//100
// console.log(parseInt("ohjjh 100 ossama"));//returns NaN
// console.log(parseFloat("100.24 ossama"));//100.24
// console.log(parseFloat("ohjjh 100.24 ossama"));//returns NaN
// console.log(Number.isInteger("100"));//false
// console.log(Number.isInteger(100.4));//false
// console.log(Number.isInteger(100));//true
// console.log(isNaN("ossama" * 2));//true

////exercices (18 -22)
//excercis 02:
// let num = 3;
// // Solution One
// console.log(num + num); // 6
// // Solution Two
// console.log(num* "2"); // 6
// // Soultion Three
// console.log(num * --num); // 6
// // Soultion Four
// console.log(num++ * num); // 6
// // Solution Five
// console.log(-num + num-- ** num); // 6
// // Solution Six
// console.log(++num ** num / num - num); // 6

//// exercices(10 - 17)
//excercis 01:
// let numberOne = 10,
//   numberTwo = 20;
// console.log(numberOne + "" + numberTwo);
// console.log(typeof (numberOne + "" + numberTwo));
// console.log(`${numberOne}${numberTwo}`);
// console.log(typeof `${numberOne}${numberTwo}`);
// console.log(numberOne + "\n" + numberTwo);
// console.log(`${numberOne}
// ${numberTwo}`);
//excercis 02
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object
//excercis 03
//console.log("\`I\'m In \n\\\\ \nLove \\\\ \"\"\" \'\'\' \n++ With ++ \n\\\"\"\"\\\"\"\" \n\"\"JavaScript\"\"\`\`")
//excercis 04
// let a = 21;
// let b = 20;
// let text= `_${a}_${b}`.repeat(4);
// console.log(`${text}_`); // _21_2021_2021_2021_20_
// console.log(text + "_"); // _21_2021_2021_2021_20_

////lesson 23
// console.log(1_000_000);
// console.log(1e6);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);

////lesson 21
// let a=10,
//     b="20",
//     c=80;
// console.log(++a++b++++c++-+a++);//this is invalid expression the valid is in the next line
// console.log(++a + +b++ + +c++ - +a++);
// console.log(a,b,c);
// let d="-100",
//     e="20",
//     f=30,
//     g=true;
// console.log(-d * e);
// console.log(-2*d - f +3*g);

////lesson 20 (type coercion or type casting)
// let a="10",
//     b=20,
//     c=true;
// console.log(a+b+c);
// console.log(a-b+c);
// console.log(a+b-c);
// console.log(+a+b-c);
// console.log(a-c+b);

////lesson 19 (uniry operators (+ , -))
// console.log(+100);
// console.log(+"-100");
// console.log(-"-100");
// console.log(Number("100"));
// console.log(+"ossama");
// console.log(+0xef);
// console.log(-null);
// console.log(+false);
// console.log(-true);

// //lesson 18
// console.log(10 + "ossama");
// console.log(10 - "ossama");
// console.log(10 * -20);
// console.log(2 ** 4);
// console.log(5 / 3);
// console.log(5 % 2);
// let i=1;
// console.log(i++);
// console.log(i);
// console.log(++i);

// //lesson 17 (the challeng)
// let theTitle = "Elzero",
//     theDescription = "Elzero web school",
//     theDate = "25/07";
// let card =`
//     <div>
//         <h3>${theTitle}</h3>
//         <p>${theDescription}</p>
//         <span>${theDate}</span>
//     </div>
// `;
// method one
//  let repeated= card.repeat(4);
//  document.write(repeated);
// method two
//  for(let i=1;i<=4;i++){
//     document.write(card);
// }

// // lesson 16
// let title = "mouaadh",
//   description = "this is my new site";
// let markUp = `
//     <div class="card">
//         <div class="child">
//             <h2>${title}</h2>
//             <p>${description}</p>
//         </div>
//     </div>
// `;
// document.write(markUp);
// let a = "we love",
//   b = "java",
//   c = "script";
// console.log(a + " " + b + "\n" + c);
// console.log(`${a} ${b}
// ${c}`);

// let a = "we love";
// let b = "javascript";
// let c = " ";
// document.write(a + " " + b);
// document.write(a, b);
// console.log(a, b);

// let aabb = 1;
// console.log("hello \
// how are \"you\"");
// console.log("hellow \nhow are you \\ are you good?");

// var userName = "momo",
//     age = 19;
// document.write(userName);
// document.write(age);
// console.log(md);
// md.innerHTML = "options";

// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof ["momo", "mm"]);
// console.log(typeof { name: "mouaadh", age: 20, country: "alg" });
// console.log(typeof "mdlksjk");
// console.log(typeof 1 / 3);
// console.log(typeof 1 / 2);
// console.log(typeof NaN);
// window.alert("kello");
// document.write("<h1>momo</h1>");
// console.log("hellow from %cjs%cfile","color: blue; font-size: 40px" , "color: red; font-size: 35px;");
// console.error("error");
// console.table(["ossama", "momo", "hihi"]);
// console.log("%cElzero %cweb %cschool ","color: red;font-size: 30px;font-family: Arial;","color: green;font-size: 30px;font-family: Arial;","background-color: blue; color: white;font-size: 30px;font-family: Arial;")
// console.groupCollapsed("group 01");
// console.log("message one");
// console.log("message two");
// console.groupCollapsed("child one");
// console.log("message one");
// console.log("message two");
// console.groupCollapsed("second child");
// console.log("message one");
// console.log("message two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.groupCollapsed("group 02");
// console.log("message one");
// console.log("message two");
// console.groupEnd();
// console.table(["momo", "mpmp", "mlml"]);
