//////lesson 165:
function* abc(){
    yield "a";
    yield "b";
    yield "c";
}
function* def(){
    yield "d";
    yield "e";
    yield "f";
}
function* delegate() {
    yield* abc();
    yield* def();
    yield "h";
    yield* [1, 2, 3];
    yield {"k": 1,"l": 2,"m": 3};
}
for(let val of delegate())
    console.log(val);

//////lesson 164:(generator function)
// function* gene() {
//     yield 1;
//     console.log(`sedfuyeqb fedfebvuv jducfd`);
//     yield 2;
//     yield 3;
// }
// let gen = gene();
// console.log(typeof gen);
// console.log(gen);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// for(let val of gene())//if you write gen inplace of gene() nothing will be printed
//     console.log(val);

//////lesson 163:(trackinjg opertations time)(search for performance.now() and performance.mark()) ????
// let start = new Date();
// for(let i = 0; i < 1000; i++)
//     document.write(`<div>${i+1}</div>`);
// let end = new Date();
// let diff = end - start;
// console.log(diff);

//////lesson 162:(new Date() accept from you a number of milliseconds or a string  like 1,2,4 and 5 below , and it accept numbers like date3 below)
// let date1 = new Date("1982-02-02");//here 02 means Februery
// console.log(date1);
// let date2 = new Date("82");
// console.log(date2);//Fri Jan 01 1982 00:00:00 GMT+0100
// let date3 = new Date(2002,02,02,02,02,02);//here 023 means March(using the index)
// console.log(date3);//Sat Mar 02 2002 02:02:02 GMT+0100 
// let date4 = new Date("2004-07-18T09:10:13Z");//when you write (Z) means that (09) is in Grinich so it will write (10) here in your country
// console.log(date4);//Sun Jul 18 2004 10:10:13 GMT+0100 
// let date5 = new Date("2004-07-18T09:10:13");//when you don't write (Z),this means that (09) is in your country
// console.log(date5);//Sun Jul 18 2004 09:10:13 GMT+0100 
// let date6 = new Date(10000);
// console.log(date6);//Thu Jan 01 1970 00:00:10 GMT+0000
// console.log(Date.parse(72));//63072000000 number of ms from 1970 to 1972// and parse accepts only one argument and it is the same as [console.log(Date.parse("72"))]
// console.log(Date.parse("2004-07-18T09:10:13Z"));//1090141813000

//////lesson 161:(set date and time)(all of these functions a negative value or a value bigger than the normal ones)
// let dateNow = new Date();
// console.log(dateNow);
// console.log("#".repeat(61));
// dateNow.setTime(10000);//it accept a number in (ms)
// console.log(dateNow);//Thu Jan 01 1970 00:00:10 GMT+0000
// console.log("#".repeat(61));
// dateNow.setDate(-1);
// console.log(dateNow);//Tue Dec 30 1969 00:00:10 GMT+0000
// console.log("#".repeat(61));
// dateNow.setDate(20);
// console.log(dateNow);//Sat Dec 20 1969 00:00:10 GMT+0000 
// console.log("#".repeat(61));
// dateNow.setFullYear(2004, 00, 14);//there is also setMonth()
// console.log(dateNow);//Wed Jan 14 2004 00:00:10 GMT+0100
// console.log("#".repeat(61));
// dateNow.setHours(00,56,04,303);//there is also setMinutes() and setSeconds() and setMilliseconds()
// console.log(dateNow);//Wed Jan 14 2004 00:56:04 GMT+0100

//////lesson 160:(get date and time)
// let dateNow = new Date();
// let birthday = new Date("jul 18 2004 02:02:04");
// console.log(dateNow);//Fri Sep 13 2024 16:32:28 GMT+0100 
// console.log(birthday);//Sun Jul 18 2004 02:02:04 GMT+0100 
// let diff = dateNow - birthday;
// console.log(diff);//636123070510
// console.log(dateNow.getTime());//this is the same as (console.log(date.now())), in (ms)
// console.log(birthday.getTime());//this is the time in (ms) from 1970 to by birthday
// console.log(dateNow.getDate());//13 (the number of the day in the month)
// console.log(dateNow.getFullYear());//2024
// console.log(dateNow.getMonth());//8, the (index)!! of the month
// console.log(dateNow.getDay());//5, the (index)!! of the day in the week(5 => Fri)
// console.log(dateNow.getHours());//16, the hour right now
// console.log(dateNow.getMinutes());//32, the minutes in the time right now
// console.log(dateNow.getSeconds());//28, the seconds in the time right now
// console.log(dateNow.getMilliseconds());//264, the milliseconds in the time right now

//////lesson 159:
// console.log(Date.prototype);
// let dateNow = new Date();
// console.log(dateNow);
// console.log(Date.now());//1726234390516 in milliseconds from 1970

////// exercices (147 - 158) :
//exercise 02:
// class Phone {
//     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }
// class Tablet extends Phone {
//     constructor(name, serial, price, size){
//         super(name,serial,price);
//         this.size = size || "Unknown";
//     }
//     fullDetails() {
//         return `${this.name} Serial is ${this.serial} and Size is ${this.size}`;
//     }
// }
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);
//   console.log(`${TabletOne.fullDetails()}`);
//   console.log(`${TabletTwo.fullDetails()}`);
//   console.log(`${TabletThree.fullDetails()}`);
//exercise 03:
// Edit The Class
// class User {
//     #c;
//     constructor(username, card) {
//       this.u = username;
//       this.#c = card;
//     }
//     get showData() {
//         let regex = /(\d{4})-?(\d{4})-?(\d{4})-?(\d{4})/g;
//         return `Hello ${this.u} Your Credit Card Number Is ${this.#c.toString().replace(regex, "$1-$2-$3-$4")}`;
//     }
//   }
//   let userOne = new User("Osama", "1234-5678-1234-5678");
//   let userTwo = new User("Ahmed", "1234567812345678");
//   let userThree = new User("Ghareeb", 1234567812345678);
//   console.log(userOne.showData);// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
//   console.log(userTwo.showData);// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
//   console.log(userThree.showData);// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
//   console.log(userOne.c); // Undefined
//exercise 04:
// String.prototype.addLove = function(){
//     console.log(`I Love ${this} Web School`);
// }
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School
//exercise 05:
// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };
// Object.defineProperties(myObj, {
//     score: {
//         writable: false,
//     },
//     id: {
//         enumerable: false,
//     },
// });
// delete myObj.country;
//   myObj.score = 500;
//   for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
//   }
//   console.log(myObj);

////lesson 156:(prototype)
// class User {
//     constructor(name) {
//         this.n = name;
//     }
// }
// User.prototype.age = 50;//here we add age to the prototype,(you'll find it inside the prototype before the constructor)
// User.prototype.sayHi = function(){
//     return console.log("Hi");
// }
// let user1 = new User("momo");
// console.log(user1);
// console.log("#".repeat(25));
// class Users {
//     constructor(name) {
//         this.n = name;
//     }
// }
// Users.age = 50;//but here we add age to the constructor,(you'll find it inside the prototype inside the constructor)
// let users1 = new Users("momo");
// console.log(users1);

////lesson 154: (encapsulation)
// class User {
//     // let #e;//if there is a problem you can know it by clicking (ctrl + k + i)
//     #e;
//     constructor (name, e) {
//         this.name = name;
//         this.#e = e;
//     }
//     getSalary(){
//         return this.#e;
//     }
// }
// let user1 = new User("momo",1542);
// console.log(user1);//{name: 'momo', #e: 1542}
// // console.log(user1.#e);//this will throw an error since (#e) is a private property
// // console.log(Object.getOwnPropertyDescriptor(user1, "#e"));//undefined
// // user1.#e = 5;//this will throw an error
// console.log(user1.getSalary());
//// Some experiences:
// class User {
//     // let #e;//if there is a problem you can know it by clicking (ctrl + k + i)
//     #e;
//     constructor (name, e) {
//         this.name = name;
//         this.#e = e;
//     }
//     getE(){
//         return this.#e;
//     }
// }
// let user1 = new User("iyad", 1500);
// console.log(user1);
// console.log(user1.getE());//1500
// class Admin extends User {
//     constructor(name, e, s) {
//         super(name, e);
//         this.s = s;
//     }
// }
// let admin1 = new Admin("momo", 1542, 2);
// console.log(admin1.getE());//1542

////lesson 26 from JavaScript OOP course:
//[1] arrow functions do not have a prototype property
//(sayHi(){}) === (sayHi = function(){})

////lesson 25 from JavaScript OOP course:
// let obj = {};
// Object.defineProperties(obj,{
//     name: {
//         value: "mdfnjf",
//         configurable: true,
//     },
//     age: {
//         value: 20,
//         writable: false,
//     },
// });
// console.log(obj);

////lesson 23 from JavaScript OOP course:(getters & setters)
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get sayHello() {//here sayHello is changed to a property after using get
//     console.log(`hello ${this.name} from user's class`);
//   }
//   sayHi() {//sayHi is considered a method becouse it is not like (sayGoodMorning)
//     console.log(`hi ${this.name}`);
//   }
//   sayGoodMorning = function() {//sayGoodMorning is considered as a property not a method becouse it get the result from the function, (it is not like sayHi method)
//     console.log(`good morning ${this.name}`);
//   }
//   changeName(newName) {
//       this.name = newName;
//   }
//   set changeAge(newAge) {//here sayHello is changed to a property after using set
//     this.age = newAge;
// }
// }
// let user1 = new User("mouaadh", 20);
// user1.sayHello; // here we didn't use () becouse it is not a function after using get
// user1.sayHi();
// user1.changeName('mahmoud');
// console.log(user1.name);//mahmoud
// user1.changeAge = 22; //here we didn't use () becouse it is not a function after using set ,  and we didn't give 22 as an argument
// console.log(user1.age);//22
// some new infos from javascript.info abou (setters/getters):
// let obj = {
//   name: "mouaadh",
//   age: 20,
//   get info() {
//     return `the age of ${this.name} is ${this.age}`; //this here refer to the obj
//   },
//   set info(value) {
//     this.name = value.split(" ")[value.split(" ").length - 3];
//     this.age = value.split(" ")[value.split(" ").length - 1];
//   },
// };
// console.log(obj.name);
// console.log(obj.info); //the age of mouaadh is 20
// obj.info = "the age of tasnim is 15"; //this line will have no effect on anything
// console.log(obj.info); //the age of tasnim is 15
// console.log(obj); //{name: 'tasnim', age: '15'}
// console.log(Object.getOwnPropertyDescriptor(obj, "info")); //{enumerable: true, configurable: true, get: ƒ, set: ƒ}, there is neither writable nor value in the descriptor
// Object.defineProperty(obj, "password",{
//   get() {
//     return `${this.name}$${+this.age + 24}#${this.name}@${+this.age + 298}`;
//   },
//   set(value) {
//     this.name = value.match(/^[a-z]+(?=\$)/i)[0];
//     this.age = value.match(/(?<=@)\d+$/)[0] - 298;
//   },
// });
// console.log(obj.password);//tasnim$39#tasnim@313
// obj.password = "momo$fjhg1245@318";
// console.log(obj.password);//momo$44#momo@318
// console.log(obj);//{name: 'momo', age: 20} 
////part two(smarter getters/setters)
// let user = {
//     get name() {
//         return this._name || "momo";
//     },
//     set name(value) {
//         if(value.length < 4)
//             console.log("name is too short");
//         else this._name = value;
//     }
// }
// console.log(user.name);//momo
// user.name = "jgpj";
// console.log(user.name);//jgpj
// user.name = "kkk";//name is too short
// console.log(user.name);//jgpj
// user.name = "kkkml";
// console.log(user.name);//kkkml

////lesson 22 from JavaScript OOP course:
// class User {
//     static counter = 0;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         User.counter++;
//         this.sayHi = function() {
//             console.log(`hi ${this.name}`);
//         }
//     }
//     sayHello = function() {
//         console.log(this);//User {name: 'n', age: 15, sayHello: ƒ, sayHi: ƒ}
//         console.log(`hello ${this.name} from user's class`);
//     }
//     static arriseObj = function () {
//         console.log(this);//class User{...}
//         console.log(`${this.counter} Object created`);
//     }
// }
// class Admin extends User {
//     constructor(name, age, account) {
//         super(name, age);
//         this.account = account;
//     }
//     iamAdmin = function () {
//         console.log(`i am Admin`);
//     }
//     sayHello = function() {//here this method will ovveride on the User's method
//         console.log(`hello ${this.name} from admin's class`);
//     }
// }
// let adm1 = new Admin("momo", 20, 1254);
// let adm2 = new Admin("mom", 2);
// console.log(adm1);
// console.log(adm1.account);
// adm1.sayHello();//hello momo from admin's class
// console.log(Admin.prototype.__proto__.constructor.counter);//2, we use prototype for the classes theirselves an we use (__proto__) for other things
// console.log(Object.__proto__ === Object.prototype);//false

////lesson 21 from JavaScript OOP course:
// class User {
//     static counter = 0;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         User.counter++;
//         this.sayHi = function() {
//             console.log(`hi ${this.name}`);
//         }
//     }
//     sayHello = function() {
//         console.log(this);//User {name: 'n', age: 15, sayHello: ƒ, sayHi: ƒ}
//         console.log(`hello ${this.name}`);
//     }
//     static arriseObj = function () {
//         console.log(this);//class User{...}
//         console.log(`${this.counter} Object created`);
//     }
// }
// console.log(User.counter);//0
// let user1 = new User("n", 15);
// console.log(user1);
// let user2 = new User("jj", 19);
// console.log(User.counter);//2
// User.arriseObj();//2 Object created
// user1.sayHello();//hello n

////lesson 20 from JavaScript OOP course:
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.sayHi = function() {
//             console.log(`hi ${this.name}`);
//         }
//     }
//     sayHello = function() {
//         console.log(`hello ${this.name}`);
//     }
// }
// let user1 = new User("mouaadh", 20);
// console.log(user1);
// user1.sayHi();
// user1.sayHello();
// console.log(typeof User);//function
// console.log(typeof (class hg{}));//function
// console.log(typeof User.constructor);//function
// console.log(User === User.prototype.constructor);//true

////lesson 19 from JavaScript OOP course:
// function User(name) {
//     this.name = name;
//     // method 01 of error:
//     // if(!(this instanceof User)) {
//     //     throw new Error("User must be called with 'new' keyword");
//     // }
//     // method 01 of error:(using ES6)
//     if (!new.target){
//         throw new Error("User must be called with 'new' keyword");//why exactly (new.target)
//     }
// }
// let user1 = new User("momo");//in javascript a function is an object , so here the right side (creates an empty object) and( asseign it to "this" context) and (user1.__proto__ = User.__proto__) and finaly (it returns "this")
// let user2 = User("kkik");//this will throw an error

////lesson 18 from JavaScript OOP course:
// console.log(00217);//143 since javascript consider it as an octal number because of the zeroes in the beginig so 2*8^2 + 1*8 + 7 = 143
// console.log(+"00217");//217
// String.prototype.zFill = function(num) {
//     let difference = num - this.length;
//     if(difference > 0)
//         return `${"0".repeat(difference)}${this}`;
//     return this.toString();
// }
// console.log("1542".zFill(6));//001542
// console.log("1542".zFill(3));//1542

////lesson 17 from JavaScript OOP course:
// function User(name) {
//     this.n = name;
// }
// User.prototype.mr = function() {
//     console.log(`Mr.${this.n}`);
// }
// let user1 = new User("momo");
// user1.mr();
// Object.prototype.name = "momo";
// console.log(user1.__proto__.__proto__.name);//momo
// let obj = Object.create({});
// console.log(obj.__proto__.name);//momo

////lesson 16 from JavaScript OOP course:
// function User(name) {
//     this.n = name;
// }
// let user1 = new User("momo");
// console.log(user1);
// console.log(User.prototype);

////lesson 15 from JavaScript OOP course:
// let num1 = new Number(2);
// console.log(num1);//Number {2}
// document.write(num1);//2
// let str = new String("fmgrifg");
// console.log(str);//String {'fmgrifg'}
// document.write(str);// fmgrifg

////lesson 12 from JavaScript OOP course:
// function Phone(serial) {
//     this.serial = serial;
// }
// let ph1 = new Phone(51246);
// let ph2 = new Phone(79854);
// let ph3 = Phone(64514);//it behaves as a simple function not a class
// console.log(window.serial);//64514 because of the this inside the function which refer to the global object (window)
// // console.log(ph3.serial);//error sinse the function is not behaveing as a class when it is called without the (new) keyword
// console.log(ph1.serial);
// console.log(ph2.serial);
// console.log(ph1 instanceof Phone);//true
// console.log(Phone === ph1.constructor);//true

////lesson 11 from JavaScript OOP course:
// function User(name, age, salary){
//     this.n = name;
//     this.a = age;
//     this.s = salary;
//     this.fun = function(){
//       console.log("this is a function (method)");
//      };
// }
// let mouaadh = new User("mouaadh", 20, 1000000);
// console.log(mouaadh);//User {n: 'mouaadh', a: 20, s: 1000000, fun: ƒ}
// mouaadh.fun();//this is a function (method)

////lesson 10 from JavaScript OOP course:
// const user = {
//     name: "momo",
//     age: 20,
//     tallInCm: "180cm",
// };
// for(let el in user)
//     console.log(`the ${el} is => ${user[el]}`);//user.el doesnt work because (typeof el is string) so you have to use [string]
// let finalData = "";
// for (let el in user)
//     finalData += `<div>the ${el} is => ${user[el]}</div>`;
// document.body.innerHTML = finalData;

////lesson 09 from JavaScript OOP course:
// const user = {
//     name: "mouaadh",
//     age: 20,
// };
// console.log(Object.getOwnPropertyDescriptor(user, "name"));//it's configurations will be true by default
// console.log(delete user.age);//true, because when you bdeclare an object like this, all of its properties's configurations(writable,enumerable,configurable) are set true
// console.log(user);//{name: 'mouaadh'}
// console.log("#".repeat(20));
// const freezed = Object.freeze({//the freeze creates an object with { writable: false, enumerable: true, configurable: false}
//     naming: "school",
// });
// console.log(freezed);
// delete freezed.naming;//this doesn't work since
// console.log(Object.getOwnPropertyDescriptor(freezed,"naming"));//{value: 'school', writable: false, enumerable: true, configurable: false}
// console.log("#".repeat(20));
// let created = Object.create({
//     ne: "s",
//     me: "d",
// });
// created.age = 90;
// console.log(created);//{}
// console.log(delete created.ne);//true, since it was npt in the "created" properties
// console.log(delete created.__proto__.me);//true, since it has been deleted from the prototype
// console.log(created.ne);//s
// console.log(created.__proto__);//{ne: 's'}
// console.log(created.prototype);//undefined, sine prototype is only for constructor functions (classes)
// console.log(Object.getOwnPropertyDescriptor(created, "ne"));//undefined, since "ne is not an own property of "create" but its an own property of the prototype, so we write the next line
// console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(created), "ne"));
// const friend = {};
// Object.defineProperty(friend,'kkk',{//if you didn't add the descriptor all of it's configurations will be false by default
//     value: "k-tuple",
//     writable: true,// you can update it's value
//     configurable: true,// you can delete it or something like this
//     enumerable: true,// you can loop on it
// });

////// exercices (134 - 146) :
////exercise 02:
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let regex = /os[0-9]*o/ig;
// console.log(specialNames.match(regex));
////exercise 03:
// let phone = "+(995)-123 (4567)";
// let regex = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
// console.log(phone.match(regex));
//////Some infoes from chat GPT about capturing groups:
//// backreferences in regular expressions:
// const text1 = "This is a test testtest to find repeated wls wls wls l s repeated words.";
// let reg1 = /\b((w(\w)(\w))) \1 \2 \3 \4/gi;
// console.log(text1.match(reg1));//['wls wls wls l s']
// const text2 = "This is a test testtest to find repeated kkls kkls kkl kl l s repeated words.";
// let reg2 = /\b((k(k(\w)))(\w)) \1 \2 \3 \4 \5/gi;
// console.log(text2.replace(reg2, "$2/$1/$3/$4/$5"));//This is a test testtest to find repeated kkl/kkls/kl/l/s repeated words.(the numbers referencing in the same way the backreferences do)
// console.log(text2.match(reg2));//['wwls wwls wwl wl l s'] : كل قوس يدخل اليه يجب ان يكمل كل الاقواس بداخله قبل ان يخرج للقوس الاخ له في ترتيب الاعداد
// //Referencing Captured Groups in Replacement Strings:
// Ex 01:
// let str = "1542-544-511-ljk";
// let regex = /(\d{4})-(\d{3})-(\d{3})-([a-z]{3})/ig;
// console.log(str.match(regex));
// console.log(str.replace(regex,"$2/$1/$4/$3"));
// Ex 02:
// const text3 = "This is a test testtest to find repeated kkls kkls kkl kl l s repeated words.";
// let reg3 = /\b((k(k(\w)))(\w))/gi;
// console.log(text3.replace(reg3, "$2/$1/$3/$4/$5"));//This is a test testtest to find repeated kkl/kkls/kl/l/s repeated words.(the numbers referencing in the same way the backreferences do)
//// Accessing Captured Groups:
// Ex 01:
// let text = "hello world";
// let regex = /(\w+)\s(\w+)/ig;
// let matches = regex.exec(text);
// console.log(matches);//['hello world', 'hello', 'world']
// console.log(matches.groups);//undefined
// Ex 02:(mere complex)
// const text3 = "This is a test testtest to find repeated kkls kkls kkl kl l s repeated words.";
// let reg3 = /\b((k(k(\w)))(\w))/gi;
// console.log(reg3.exec(text3));//(6) ['kkls', 'kkls', 'kkl', 'kl', 'l', 's'](the indexes referencing in the same way the backreferences do)
//// Named Capturing Groups:(this one is the same as the previous one just the captured groups here have names)
// let txt = "154-2657-34";
// let reg = /(?<three>\d{3})-(?<four>\d{4})-(?<two>\d{2})/ig;
// let matches = reg.exec(txt);
// console.log(matches);//(4) ['154-2657-34', '154', '2657', '34']
// console.log(matches.groups);//{three: '154', four: '2657', two: '34'}
// console.log(matches.groups.two);//34
////exercise 04:(?: ...) this creats a non-capturing group which group the elements but do not store the matched content of the group to be used later
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?[^\s]*/ig;//[-\w]+ this means that there will be one or more of (-) and one or more of (alphabets and nums and _)
// let txt = "https://k-kk.p-pp.ssslpdsk http://bb.nnnn.hh/gf"
// console.log(txt.match(re));// ['https://k-kk.p-pp.ssslpdsk', 'http://bb.nnnn.hh/gf']
////exercise 05:
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /\d{2}[\/\s-]+\d{2}[\/\s-]+\d{2}/g; // Write Pattern Here
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

////lesson 145:
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.Org';
// let url3 = 'https://elzero.com';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re = /(https?\:\/\/)?(www\.)?[a-z0-9-]+\.[a-z]{2,}[^\s]*/gi;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));

////lesson 144:
//method one:(this is the best practice)
// let submit = document.querySelector("form");
// submit.addEventListener("submit", function(e) {//the submit event is applied to the form not to the submit input when you use addEventListener
//     let phone = submit[0];
//     let regPhone = /\(\d{4}\)\s\d{3}-\d{4}/;
//     let test = regPhone.test(phone.value);
//     if(!test){
//         e.preventDefault();
//         alert("the phone number should be of the form Ex: (1234) 567-8910");
//         phone.focus();
//     }
// });
//method two:
// let submit = document.querySelector("form");
// submit.onsubmit = function(){
//     let phone = submit[0];
//     let regPhone = /\(\d{4}\)\s\d{3}-\d{4}/;
//     let test = regPhone.test(phone.value);
//     if(!test){
//         alert("the phone number should be of the form Ex: (1234) 567-8910");
//         phone.focus();
//         return false;
//     }
// }

////lesson 143:
// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "javascript"));//We Love Programming And javascript Because @ Is Amazing
// console.log(txt);//We Love Programming And @ Because @ Is Amazing : this shows that it doesn't replace them in the main txt
// console.log(txt.replaceAll("@", "css"));//We Love Programming And css Because css Is Amazing
// let regex = /( \w{4} | \w{2,3} )/ig;
// console.log(txt.replaceAll(regex, " html "));//We html Programming html @ Because @ html Amazing

////lesson 142:
// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
// console.log(/ing$/ig.test(myString));//true ,$ means if it ends with ing
// console.log(/^w/ig.test(myString));//true ,^ means if it starts with w
// console.log(/^2/ig.test(names));//false
// console.log(names.match(/\d\w{5}(?=z)/ig));//['1Osama', '2Ahmed', '5Gamal']
// console.log(names.match(/\d\w{5}z/ig));//['1OsamaZ', '2AhmedZ', '5GamalZ']
// //the previous two lines shows the difference between writting followed by z and writting z itself
// console.log(names.match(/\d\w{8}(?!z)/ig));//['3Mohammed'], since 3Mouhammed is not followed by z

////lesson 141:
// let serials = "ss S100S S3000S S50000S S950000S";
// console.log(serials.match(/s\d{3}s/ig));// S[Three Number]S
// console.log(serials.match(/s\d{3,4}s/ig));// S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S
// console.log(serials.match(/s\d{0,4}s/ig));//['ss', 'S100S', 'S3000S']

////lesson 140:(quantifiers)(+ : one or more)(* : zero or more)(? : zero or one)
// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
// let regMail = /\w+@\w+.(net|com)/ig;
// console.log(mails.match(regMail));//['osama@gmail.com', 'elzero@gmail.net']
// let nums = "0110 10 150 05120 0560 350 00";
// let regNums1 = /0\d+0/g;
// console.log(nums.match(regNums1));//['0110', '05120', '0560']
// let regNums2 = /0\d*0/g;
// console.log(nums.match(regNums2));//['0110', '05120', '0560', '00']
// let urls = "https://google.com http://www.website.net web.com";
// let regUrls = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(regUrls));//['https://google.com', 'http://www.website.net', 'web.com']

////lesson 139:
// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let regBeg = /\bspam/ig;//(\b) matches at the begginning of the word(if the spam is written after a white space)
// console.log(names.match(regBeg));//['Spam', 'Spam']
// let regEnd = /spam\b/ig;
// console.log(names.match(regEnd));//['Spam', 'Spam', 'Spam']
// let notRegBeg = /\Bspam/ig;//here the inverse (the spam word should not be ater a white space
// console.log(names.match(notRegBeg));//['Spam', 'Spam', 'Spam', 'spam']
// let notRegEnd = /spam\B/ig;
// console.log(names.match(notRegEnd));//['Spam', 'Spam', 'spam']
// let test1 = /(\bspam|spam\b)/ig;
// console.log(test1.test(names));//true (it means that names contains a spam word and before it a white space or after it a white space)
// let test2 = /(\bspam\b)/ig;
// console.log(test2.test(names));//false

////lesson 138:
// let email = 'O@@@g...com \n O@g.com_ O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// console.log(email.match(dot));//(\n) will not be matchedsince the dot doesn't match all the line terminators
// console.log(email.match(/\w/g));//(\w) match alphabets and nums and (_)
// console.log(email.match(/\W/g));//the inverse of the small w
// console.log(email.match(/\d/g));//it matches digits
// console.log(email.match(/\D/g));//it matches the inverse of the previous one
// console.log(email.match(/\s/g));//it matches white space chars and line terminators
// console.log(email.match(/\S/g));//it matches the inverse of the previous one
// //exapmle of validating an email
// console.log(email.match(/\w@\w.(com|org)/g));//['O@g.com', 'A@Y.com', 'o@s.org', '1@1.com']

////lesson 137:
// let myString = "AaBbcdefG123!234%^&*";
// let a = new RegExp("[a-z]", "g");
// console.log(myString.match(a));
// let nota = /[^a-z]/g;
// console.lo0g(myString.match(nota));
// let b = /[A-Z]/g;
// console.log(myString.match(b));
// let ace = /[ace]/g;
// console.log(myString.match(ace));
// let notace = /[^ace]/g;
// console.log(myString.match(notace));
// let letters = /[a-zA-Z]/g;//this is the same as /[a-z]/ig
// console.log(myString.match(letters));
// let notLetters = /[^a-zA-Z]/g;
// console.log(myString.match(notLetters));
// let noLetteresNorNums = /[^a-z0-9]/ig;
// console.log(myString.match(noLetteresNorNums));

////lesson 136:
// let tld = "com Org info Io Code net";
// let regTld = /(info|org|net)/i;
// console.log(tld.match(regTld));//['Org', 'Org'] : why it appears twice ????
// let regTlds = /(info|net|io)/ig;
// console.log(tld.match(regTlds));//['info', 'Io', 'net']
// let nums = "12345678910";
// let regNum = new RegExp("[2-6]","g");
// console.log(nums.match(regNum));//['2', '3', '4', '5', '6']
// let notRegNum = new RegExp("[^2-6]","g");
// console.log(nums.match(notRegNum));//['1', '7', '8', '9', '1', '0']
// let nums_Chrs = "12&34%5678*91#0";
// let regNums_Chrs = /[^0-9]/g;
// console.log(nums_Chrs.match(regNums_Chrs));//['&', '%', '*', '#']
// let practice = "Os12os os1 os2os13 osos";
// let regPractice = /os[1-3]os[1-9][1-9]/ig;
// console.log(practice.match(regPractice));//['os2os13']

////lesson 135:(regular expressions)
// let myString = "Hello Elzero Web School I Love elzero";
// let regex = /elzero/gi;//this the same as let regex = new RegExp("elzero", "ig"); //i means case insensitive, g : global, m: multilines, s: single line, (u: unicode, y: stiky ????)
// console.log(myString.match(regex));
// console.log(myString.match(regex));//if no match is found it returns null

////// exercices (123 - 133) :
////exercise 01:
// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20);
// setOfNumbers.add(setOfNumbers.size);
// console.log(setOfNumbers);
// console.log(Array.from(setOfNumbers)[2]);
////exercise 02:
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends)].sort());
////exercise 03:
// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   };
// // console.log(Object.entries(myInfo));//[Array(2), Array(2), Array(2)]
// let entries = Object.entries(myInfo);
// let myMap = new Map();
// entries.forEach(element => {
//     myMap.set(element[0], element[1]);
// });
// console.log(myMap);
// console.log(myMap.size);
// console.log(Array.from(myMap.keys()).some(el => el === "role"));
////exercise 04:
// let theNumber = 100020003000;
// console.log(+Array.from(new Set([...theNumber.toString()])).filter(el => el !== "0").join(""));
////exercise 05:
// let theName = "Elzero";
// console.log([...theName]);
////exercise 06:
// function modifyArray(arr) {
//     let newarr = [];
//     let index = 0;
//     arr.forEach(el => {
//         if (typeof el === "number") {
//             newarr.unshift(el);
//             index++;
//         }
//         if (typeof el === "string") newarr.push(el);
//     });
//     arr = newarr;
//     arr.copyWithin(0, index, index * 2);
//     console.log(arr);
// }
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// modifyArray(chars);

////exercise 08:
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n1) * n1.concat(n2).length);

////lesson 133:(challenge) ????

////lesson 132:(spread ...)
// console.log(..."mouaadh");
// console.log([..."mouaadh"]);
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// concatinated = [...arr1, ...arr2];
// console.log(concatinated);
// let arr = [...arr1];//here we hav copied the arr1 to the arr
// console.log(arr);
// arr.push(...arr2);
// console.log(arr);
// console.log(Math.min(...arr2))//4
// let obj1 = {
//     a: 1,
//     b: 2,
// };
// let obj2 = {
//     c: 3,
//     d: 4,
// };
// let obj = {...obj1, ...obj2, e: 5,};//it is used also to merge objects
// console.log(obj);

////lesson 131:
// let arr = [12, 15, 75, 9];
// let num = 8;
// console.log(arr.every(function(el) {
//     return el > this;
// }, num));//true

////lesson 130:
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let num = 4;
// let check = arr.some(function (el) {//th earrow function inherit the this from the lexical scope which is window
//     return el > this;
// },num);
// console.log(check);
// function check2(arr, val) {
//     return console.log(arr.some(el => el === val));
// }
// check2(arr, num);
// let range = Object.create({
//     min: 1,
//     max: 10,
// });
// function checkRangeInArr(arr, range) {//checking if the range is included in the array by all of its numbers
//     let arrRange = [];
//         for(let i = range.min; i <= range.max; i++)
//         arrRange.push(i);
//     return console.log(arrRange.every(function(el) {
//         return arr.some(e => e === el);
//     }))
// }
// checkRangeInArr(arr, range);

////lesson 129:
// let myArr = [10, 20, 30, 40, 50, "a", "b"];
// myArr.copyWithin(3);
// console.log(myArr);//[10, 20, 30, 10, 20, 30, 40]
// myArr.copyWithin(2,-2);
// console.log(myArr);//[10, 20, 'a', 'b', 50, 'a', 'b']
// myArr.copyWithin(2, 5, 7);//the ame as myArr.copyWithin(2, 5);
// console.log(myArr);//[10, 20, 'a', 'b', 50, 'a', 'b']

////lesson 128:(array.from)
// console.log(Array.from("mouaadh"));
// console.log(Array.from(1515426));// it will not work it should be a string of numbers
// console.log(Array.from("1245246", et => et*2));
// let myArr = [1, 1, 2, 3, 2 ,1];
// let mySet = new Set(myArr);
// console.log(Array.from(mySet));[1, 2, 3]
// function test(){
//   return arguments;
// }
// arrTest = test(21, "kfg");
// console.log(arrTest);//Arguments(2) [21, 'kfg', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// console.log(arrTest[0]);//21 , it works as the array but the next line will be better
// console.log(Array.from(arrTest));//[21, 'kfg']
// function arrFromArgs() {
//   return console.log(Array.from(arguments));
// }
// arrFromArgs("hbdf", 21, "fddf", 11);//['hbdf', 21, 'fddf', 11] , this function put the argus in an array and print them in the console

////lesson 127:(WeakMap)//it can except only objects
// let myWMap = new WeakMap();
// let obj = {"hi": 1};
// myWMap.set(obj, "obj value is one");
// console.log(myWMap);
// obj = null;//when you do this tou allow the garbage collector to do its task (deleting the obj from the mWMap)
// console.log(myWMap);

////lesson 126:(Map)//order the enteries by insertion order
// let myObject = {};
// let myNullProto = Object.create(null); //creating object without prototype
// let myMap = new Map();
// console.log(myObject);
// console.log(myNullProto);
// console.log(myMap);
// console.log("################");
// let myNewObject = {
//   10: "number",
//   "10": "string",
// };
// console.log(myNewObject); //{10: 'string'}
// let myNewMap = new Map();
// myNewMap.set(10, "number");
// myNewMap.set("10", "string");
// console.log(myNewMap); //{10 => 'number', '10' => 'string'}
// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));
// myNewMap.set(true, "boolean");
// myNewMap.set({a: 1, b: 2}, "object key");
// myNewMap.set(function(){console.log(`hello`)}, "function key");
// console.log(myNewMap);
// console.log(myNewMap.size);
// console.log("########################(keys)");
// let iterator = myNewMap.keys();
// console.log(iterator);//MapIterator {10, '10', true, {…}, ƒ}
// console.log(iterator.next());
// console.log(iterator.next().value);//here the value is the key itself
// console.log(iterator.next().value);
// console.log(iterator.next().done);//false since the iteration is not well done
// console.log(iterator.next().value);
// console.log(iterator.next().done);//true since the iteration is well done
// console.log("########################(values)");
// let iterator2 = myNewMap.values();
// console.log(iterator2);//MapIterator {'number', 'string', 'boolean', 'object key', 'function key'}
// console.log(iterator2.next());
// console.log(iterator2.next().value);//here the value is the value itself
// console.log(iterator2.next().value);
// console.log(iterator2.next().done);//false since the iteration is not well done
// console.log(iterator2.next().value);
// console.log(iterator2.next().done);//true since the iteration is well done
// console.log("########################(entries)");
// let iterator3 = myNewMap.entries();
// console.log(iterator3);//MapIterator {'number', 'string', 'boolean', 'object key', 'function key'}
// console.log(iterator3.next());//{value: Array(2), done: false} here we have an array of size 2 containing the key and the value
// console.log(iterator3.next().value);// ['10', 'string'] : here the value is the array of the key and the value
// console.log(iterator3.next().value);
// console.log(iterator3.next().done);//false since the iteration is not well done
// console.log(iterator3.next().value[0]);//ƒ (){console.log(`hello`)}
// console.log(iterator3.next().done);//true since the iteration is well done
// console.log("########################(some properties of Map)");
// console.log(myNewMap.has("10"));//true
// console.log(myNewMap.delete(10));//true , deleting were done
// console.log(myNewMap);
// myNewMap.clear();
// console.log(myNewMap);
// let myNewMap2 = new Map([
//   [15, "num"],
//   [false, "bool"],
// ]);
// console.log(myNewMap2.get(false));//bool

////lesson 124:
// let mySet = new Set([1,1,1,2,3,"a","a"]);
// console.log(mySet);
// let iterator = mySet.keys();// whats the difference between mySet.keys() and mySet.values() ????
// console.log(iterator);//SetIterator {1, 2, 3, 'a'}
// console.log(iterator.next());//{value: 1, done: false}
// console.log(iterator.next().value);
// console.log(iterator.next().done);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator);//SetIterator {}
// mySet.forEach(el => console.log(el));
// console.log(mySet);
// console.log("##########################");
// //WeakSet:
// let myWeak = new WeakSet([{n1: 5,n2: 5,n3: 6,n4: 7,s: "l"}, {}]);
// console.log(myWeak);
// task 01 weakset from javascript.info:
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"},
// ];
// let weak = new WeakSet();
// weak.add(messages[0]);
// console.log(weak);
// weak.add(messages[1]);
// console.log(weak);
// weak.add(messages[0]);
// console.log(weak);
// console.log("read messag 0", weak.has(messages[0]));
// messages.shift();// now weak has 1 element (technically memory may be cleaned later)

////lesson 123:
// let myData = [1,3,1,2,1,3];
// let myUniqueData = new Set(myData);
// let myData = new Set().add(1).add(3).add(1).add(2).add(3);
// let myUniqueData = new Set();
// myUniqueData.add(1).add(3).add(1).add(2).add(6).add("A");
// console.log(myUniqueData.delete(6));//true
// console.log(`Is set has "A" => ${myUniqueData.has("a".toLocaleUpperCase())}`);//true
// console.log(myUniqueData);//Set(3) {1, 3, 2}
// console.log(myUniqueData.size);
// console.log(myUniqueData[0]);//undefined
// myUniqueData.clear();
// console.log(myUniqueData);

////// exercices (115 - 122) :
////exercise 01:
// let myNumbers = [1, 2, 3, 4, 5];
// let [a,,,,e] = myNumbers;
// console.log(a * e); // 5
////exercise 03:
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let arr = arr1.concat(arr2, arr3);
// let [c,,,,,,,a,b] = arr;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);// My Best Friends: Shady, Mahmoud, Ahmed
////exercise 4:
// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
//   let {age: a, working: w, country: c, hobbies: [h1], hobbies: [,,h3]} = member;
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   console.log(`I Live in ${c}`);
//   console.log(`My Hobbies: ${h1} And ${h3}`);
////exercise 5:
// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };
// const {
//   title: t,
//   developer: d,
//   releases: {
//     "Oath In Felghana": [u, j],
//     "Ark Of Napishtim": { US: u_price, JAP: j_price },
//   },
//   releases: { Origin: or },
// } = game;
// const [o,a] = Object.keys(game.releases);
// console.log(`My Favourite Games Style Is ${t} Style`);
// console.log(`And I Love ${d} Games`);
// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// console.log(`Although I Love ${a}`);
// console.log(`${a} Price in USA Is ${u_price}`);
// console.log(`${a} Price in Japan Is ${j_price}`);
// console.log(`Origin Price Is ${or}`);

////lesson 122:(challenge)
// let chosen = 2;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// function info(chosen = 1, {title = "mouadh", age = 20, available = true, skills: [, c = "javascript"] = [] } = {}) {
//   console.log(title);
//   console.log(age);
//   console.log(available ? "available" : "not available");
//   console.log(c);
// }
// info(chosen, myFriends[chosen - 1]);

////lesson 121:(easy)

////lesson 120:
// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };
// function showInfo({theName: n = "mouadh",theAge: a = 20, skills: [,s = "javascript"] = [], addresses: {ksa: k = "Maka"} = {}} = {}) {// we did the {} to be the default value when we dont give any object to the function as a parameter
//   console.log(`my name is ${n}, and my age is ${a}, and my best skill is ${s}, and i live in ${k}`);
// }
// showInfo(user);
// showInfo();

////lesson 119:(destructuring in objects 02)
// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };
// const {
//   theName: n,
//   theAge: a,
//   skills: [,c],
//   skills: [, , f = "football"],
//   skills,
//   skills: sk ,
//   addresses: { egypt: e },
// } = user;
// console.log(n);
// console.log(a);
// console.log(skills);
// console.log(sk); //the same message as the above one
// console.log(c);//css
// console.log(f);
// console.log(e);
// console.log("*******************");
// const {
//     egypt: eg,
//     ksa,
// } = user.addresses;
// console.log(eg);
// console.log(ksa);
// const {theAge, ...rest} = user;
// console.log(rest);//{theName: 'Osama', skills: Array(2), addresses: {…}}

////lesson 118:(destructuring in objects 01)
// const user = {
//     name: "mouadh",
//     age: 20,
//     job: "webDev",
//     country: "algeria",
// };
// let {age, name, country} = user;//the order doesn't matter
// console.log(name);
// console.log(age);
// console.log(country);//algeria
// const user2 = {
//     name: "iyad",
//     age: 19,
//     job: "staff",
//     country: "algeria",
// };
// let name = user2.name;
// let age = user2.age;
// let job = user2.job;
// let country = user2.country;
// console.log(name);
// console.log(age);
// console.log(job);
// console.log(country);
// ({name, age ,job, country} = user2);//when you want to reassign the values of the vars you should use the parenthesies to show that it is not a code block
// console.log(name);
// console.log(age);
// console.log(job);
// console.log(country);

////lesson 117:(swapping using destructuring in arrays)
// let book = "video";
// let video = "book";
// console.log("book is :",book);
// console.log("video is:",video);
// console.log(`******************`);
// [book, video] = [video, book];
// console.log("book is :",book);
// console.log("video is:",video);

////lesson 116:(destructuring in arrays 02)
// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
// console.log(myFriends[3][2][1]);
// let [,,,[a,,[,b]]] = myFriends;
// console.log(a);
// console.log(b);
// //new infos from javascript.info
// let [firstName, surname] = "mouaadh bouali".split(' ');
// console.log("firstName : ",firstName);
// console.log("surname : ",surname);
// let [a,b,c] = "def";
// console.log(a,"\n",b,"\n",c,"\n");
// let [a,b,...rest] = ["mouaadh","iyad","tasnim","maria"];
// console.log(rest); //["tasnim","maria"]

////lesson 115:(destructuring in arrays 01)
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let myfriends = ["samir", "iyad", "mouaadh", "abdelhakim"];
// [a, b = "kais", c,, d, e = prompt("name","write your name")] = myfriends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);//undefined is the default value
// console.log(e);

////// exercices (111 - 114) :
////exercise 01:
// document.querySelectorAll("option").forEach((el) => (el.textContent = el.value));
// let h2 = document.querySelector("h2");
// let p = document.querySelector("p");
// let font = document.forms[0][0]; //in this case [0][0] doesn't mean the label as seen in the html file, it means the select font
// let color = document.forms[0][1];
// let size = document.forms[0][2];
// let arr = [font, color, size];
// function check() {
//   function checkEl(nameEl){
//     if(nameEl.value) localStorage[nameEl.name] = nameEl.value;
//   }
//   arr.forEach(el => checkEl(el));
// }
// function style() {
//   h2.style.cssText = p.style.cssText = `font-family: ${localStorage.font}; color: ${localStorage.color}; font-size: ${localStorage.size}px`;
// }
// function checkLocalStorage(nameEl) {
//     nameEl.value = localStorage[nameEl.name] || "";
// }
// arr.forEach(el => checkLocalStorage(el));
// check();
// style();
// arr.forEach(el => el.addEventListener("change", function (e) {
//   localStorage[e.target.name] = e.target.value;
//   style();
// })
// );
////exercise 02:
// document.querySelectorAll("option").forEach((el) => (el.textContent = el.value));
// let name = document.querySelector('[type="text"]');
// let age = document.querySelector('[type="number"]');
// let select = document.querySelector("select");
// name.addEventListener("change", (e) => (sessionStorage.name = e.target.value));
// age.addEventListener("change", (e) => (sessionStorage.age = e.target.value));
// select.addEventListener("change",(e) => (sessionStorage.select = e.target.value));
// window.addEventListener("load", (_) => {
//   if (sessionStorage.name) name.value = sessionStorage.name;
//   if (sessionStorage.age) age.value = sessionStorage.age;
//   if (sessionStorage.select) select.value = sessionStorage.select;
// });

////// exercices (102 - 110) :
////exercise 01:
// let array = prompt("Print Number From ... to ...", "Example: 5-20").split("-");
// for(let i = Math.min(+array[0], +array[1]); i <= Math.max(+array[0], +array[1]); i++) {
// console.log(i);
// }
////exercise 02:
// if(!document.querySelector(".message") || !document.querySelector(".overlay")) {
//     setTimeout(() => {
//         document.body.style.cssText = " height: 2000px;";
//         let overlay = document.createElement("div");
//         overlay.classList.add("overlay");
//         overlay.style.cssText = "position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: #999; opacity: 0.5;";
//         document.body.appendChild(overlay);
//         let div = document.createElement("div");
//         div.classList.add("message")
//         div.style.cssText = "background-color: white; padding: 30px; text-align: center; width: 60vw; box-shadow: 2px 2px 2px black; position: absolute; top: 150px; left: 50%; transform: translate(-50%, -50%); opacity: 1; z-index: 1;";
//         div.innerHTML = "<h2>Welcom</h2><p>Welcome to Mouaadh website</p><button class='close'></button>";
//         div.lastChild.style.cssText = "width: 25px; height: 25px; border-radius: 50%; border: 1px solid red; color: white; background-color: red; position: absolute; right: -12.5px; top: -12.5px; cursor: pointer; display: flex; justify-content: center; align-items: center;";
//         div.lastChild.textContent = "×";
//         div.lastChild.setAttribute("tabindex", "0");//to add the close button to the tab list
//         document.body.appendChild(div);
//         document.querySelector(".message").setAttribute("tabindex", "-1");//to make the div focusable just by focus(), and not add it to the list of the tab key
//         document.querySelector(".message").focus();
//     }, 1000);
//     document.addEventListener("click", function(e) {
//         if(e.target.classList.contains("close")){
//             e.target.parentElement.remove();
//             document.querySelector('.overlay').remove();
//         }
//     });
// }
////exercise 03:
// let hundler = setInterval(function() {
//     document.querySelector("div").textContent -= 1;
//     if(document.querySelector("div").textContent === "0")
//     clearInterval(hundler);
// },1000);
////exercise 04:
// let hundler = setInterval(function() {
//     document.querySelector("div").textContent -= 1;
//     if(document.querySelector("div").textContent === "0"){
//     clearInterval(hundler);
//     location.assign("https://elzero.org");
//     }
// },1000);
////exercise 05:
// let hundler = setInterval(function() {
//     document.querySelector("div").textContent -= 1;
//     if(document.querySelector("div").textContent === "5")
//     window.open("https://elzero.org", "", "width= 400, height=400, left=900, top=100 ");
//     if(document.querySelector("div").textContent === "0"){
//     clearInterval(hundler);
//     }
// },1000);

//////lesson 114:(challenge)
// localStorage.clear();
// let taskss = [20, 15, 55, 51];
// localStorage.clear();
// localStorage.setItem('tasks', JSON.stringify(taskss));
// taskss.push(25);
// localStorage.setItem('tasks', JSON.stringify(taskss));
// console.log(JSON.parse(localStorage.getItem("tasks"))[taskss.length - 1]);
// this version is using array parsed from JSON , after ending the course do it without a mediator array????
// let task = document.querySelector("[type='text']");
// let btn = document.querySelector("[type='submit']");
// let tasks = document.querySelector(".tasks");
// let array =[];
// function createTask(content) {
//     let el = document.createElement("div");
//     el.style.cssText = "margin: 20px; padding: 20px; background-color: #eee; border-radius: 10px; ";
//     let span = document.createElement("span");
//     span.style.cssText = "display: flex; justify-content: space-between; background-color: white; border-radius: 10px;";
//     let spanInside = document.createElement("span");
//     spanInside.textContent = content;
//     span.appendChild(spanInside);
//     let deletebtn = document.createElement("button");
//     deletebtn.style.cssText = "background-color: #f34339; padding: 3px; color: white; border: none; border-radius: 5px; cursor: pointer; box-shadow: 1px 1px 1.5px gray;";
//     deletebtn.textContent = "delete";
//     span.appendChild(deletebtn);
//     el.appendChild(span);
//     tasks.appendChild(el);
// }
// if(localStorage.tasks) {
//     JSON.parse(localStorage.tasks).forEach(el => {
//         array.push(el);
//         createTask(array[array.length - 1]);
//     });
// }
// btn.addEventListener("click", function(e) {
//     if(task.value !== "") {
//         array.push(task.value);
//         localStorage.tasks = JSON.stringify(array);
//         createTask(array[array.length - 1]);
//         task.value = "";
//     }
//     e.preventDefault();
// });
// document.addEventListener("click", function(e){
//     if(e.target.textContent === "delete") {
//         array.splice(array.indexOf(e.target.parentElement.children[0].textContent), 1);
//         localStorage.tasks = JSON.stringify(array);
//         e.target.parentElement.parentElement.remove();
//     }
// });

//////lesson 113:
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "green");
// let name = document.querySelector("input");
// name.onblur = function() {
//     if(name.value)
//     window.sessionStorage.setItem("name", name.value);
// }
// name.onmouseenter = function() {
//     if(sessionStorage.name)
//     name.value = sessionStorage.name;
// }

//////lesson 112:
//// first method:
// let experiment = document.querySelector(".experiment");
// let ul = document.querySelector("ul");
// for (let i = 0; i < ul.children.length; i++) {
//   if (window.localStorage.color === ul.children[i].dataset.color) {
//     for (let i = 0; i < ul.children.length; i++) {
//       ul.children[i].removeAttribute("class");
//     }
//     ul.children[i].setAttribute("class", "active");
//   }
//   experiment.style.backgroundColor = window.localStorage.color;
// }
// if (!experiment.style.backgroundColor)
//   for (let i = 0; i < ul.children.length; i++)
//     if (ul.children[i].classList.contains("active"))
//       experiment.style.backgroundColor = ul.children[i].dataset.color;
// for (let i = 0; i < ul.children.length; i++) {
//   ul.children[i].onclick = function () {
//     for (let i = 0; i < ul.children.length; i++) {
//       ul.children[i].removeAttribute("class");
//     }
//     this.setAttribute("class", "active");
//     window.localStorage.color = this.dataset.color;
//     experiment.style.backgroundColor = window.localStorage.color;
//   };
// }
//// second method:
// let experiment = document.querySelector(".experiment");
// experiment.style.backgroundColor = window.localStorage.color;
// let lis = document.querySelectorAll("ul li");
// lis.forEach(el => {
//     if(getComputedStyle(experiment).backgroundColor === getComputedStyle(el).backgroundColor) {
//         lis.forEach(el => {
//             el.classList.remove("active");
//         });
//         el.classList.add("active");
//     }
// });
// lis.forEach(el => {
//     if(el.classList.contains("active")) {
//         window.localStorage.color = el.dataset.color;
//         experiment.style.backgroundColor = window.localStorage.color;
//     }
//     el.addEventListener("click", function(e){
//         window.localStorage.color = e.currentTarget.dataset.color;
//         experiment.style.backgroundColor = window.localStorage.color;
//         lis.forEach(el => {
//             el.classList.remove("active");
//         });
//         el.classList.add("active");
//     });
// });

//////lesson 111:(localStorge)
// console.log(window.localStorage);
// // sting items:
// window.localStorage.setItem("color", "red");
// window.localStorage.setItem("padding", "20px");
// window.localStorage.fontWeight = "bold";
// window.localStorage['fontSize'] = "16px";
// getting items:
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage['color']);
// document.body.style.backgroundColor = window.localStorage.getItem("color");
//remove one item:
// window.localStorage.removeItem("padding");
//remove all the items:
// window.localStorage.clear();
//get key:
// console.log(window.localStorage.key(0));
// console.log(window.localStorage.key(1));

//////lesson 110:
// console.log(window.scrollX === window.pageXOffset);//pageXOffset is targeted to the old browsesrs
// console.log(window.scrollY === window.pageYOffset);
// let btn = document.querySelector("button");
// window.onscroll = function() {
//     if(window.scrollY >= 600) btn.style.display = "block";
//     else btn.style.display = "none";
// }
// btn.onclick = function() {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//     });
// }

//////lesson 109:
// location.assign("https://chatgpt.com");
// setTimeout(function(){
//     window.stop();//stops the loading of the page which is chatgpt in this case
// },450);
// window.print();
// let myNewWindow = window.open("https://google.com","", "width=500,height=500");
// let myNewWindow2 = window.open("https://chatgpt.com", "", "width=500,height=500");
// myNewWindow.focus();//this line dont work, even in the console, why?
// window.scrollTo({
//     left: 1500,
//     top: 1500,
//     behavior: "smooth",
// });
// window.scrollTo(1000,1900);//(x, y) and if you have repeated the code they will not have an effect on the page position
// window.scrollBy(200,200);//every time you repeat this code it scrolls with those coordinates

//////lesson 108:(history object)
// console.log(history);
// console.log(history.length);//it includes the current page
// // history.back();
// // history.forward();
// history.go(0);//it reloads the page infinity time why? ,the normal way it reloads the page when you use 0
// search for pushstate and replacestate????

//////lesson 107:
// setTimeout(function() {
//     // false means the current page will not be saved in the history but it works only if the taget is opening the next url page the same window,
//     window.open("https://google.com","_blank", "width=400,height=300",true);
// },2000,)

//////lesson 106:
// console.log(location);
// console.log(location.href);
// // location.href = "https://google.com";
// // location.href = "/#sec02";
// // console.log(location.hash); //#sec02 from the previous line
// // location.href = "https://elzero.org/study/javascript-bootcamp-2021-study-plan/";
// console.log(location.host);
// console.log(location.hostname);
// // location.hostname = "google";//sothat you dont get tired when you write all the href(here the hostname is enough)
// console.log(location.protocol); //http:
// console.log(location.port);
// // location.reload();//it dont stop reloading the page but when i write it in the console i reload the page only one time , why?
// // location.replace("https://google.com");//this takes you to google but it replaces the current page with google in the history
// // location.assign("https://google.com");//this takes you to google and it saves the current page in the history
// console.log(location.search);//(?section%2002) ???? how can i use search???

//////lesson 105:
// setInterval(sayIAm,2000,"mouaadh");
// function sayIAm(name) {
//   console.log(`I am ${name}`);
// }
// let div = document.querySelector("div");
// function countDown() {
//   div.innerHTML -= 1;
//   if(div.innerHTML === "0") {
//     clearInterval(hundler);
//   }
// }
// let hundler = setInterval(countDown, 1000);

//////lesson 104:
// let handler = setTimeout (sayIAm,3000,"mouaadh");
// function sayIAm(name) {
//   console.log(`I am ${name}`);
// }
// console.log(handler);
// document.querySelector("button").onclick = function() {
//   clearTimeout(handler);
// }

//////lesson 103:
// alert("hi mouaadh");
// window.alert("hi mom");
// this.alert("hi dad");
// console.log(confirm("are you sure (look at the console)"));//the message will work and true or false will be written in the console
// console.log(prompt(" whats your favorit day ?", "write a day of the week"));//used to take an information from the user

////// exercices (94 - 101) :
// exercise 2:
// let inputAdd = document.forms[0].firstElementChild;
// let inputRemove = document.forms[0].querySelector("[name='remove']");
// let element = document.querySelector("#element");
// element.textContent = "the element";
// element.style.cssText ="width: 80%; padding: 10px; background-color: #ddd; margin: 15px auto; border-radius: 10px;";
// let classes = document.querySelector(".classes");
// classes.style.cssText = "display: flex; justify-content: center; flex-wrap: wrap;";
// inputAdd.onblur = function () {
//   if (inputAdd.value !== "") {
//     let newClasses = inputAdd.value.split(" ");
//     for(let i = 0; i < newClasses.length; i++){
//       if(newClasses[i] === "") continue;
//       element.classList.add(newClasses[i].toLowerCase());
//     }
//     }
//     classes.innerHTML = "";
//     for (let i = 0; i < element.classList.length; i++) {
//       let span = document.createElement("span");
//       span.textContent = Array.from(element.classList).sort()[i];
//       span.style.cssText = "color: white; background-color: #fc5721; padding: 10px; margin: 5px; border-radius: 5px;";
//       classes.appendChild(span);
//     }
// };
// inputRemove.onblur = function () {
//   if (inputRemove.value !== "") {
//     let newClasses = inputRemove.value.split(" ");
//     for(let i = 0; i < newClasses.length; i++){
//       if(newClasses[i] === "") continue;
//       element.classList.remove(newClasses[i].toLowerCase());
//     }
//     }
//   classes.innerHTML = "";
//   for (let i = 0; i < element.classList.length; i++) {
//     let span = document.createElement("span");
//     span.textContent = Array.from(element.classList).sort()[i];
//     span.style.cssText = "color: white; background-color: #fc5721; padding: 10px; margin: 5px; border-radius: 5px;";
//     classes.appendChild(span);
//   }
// };
// exercise 3:
// document.getElementsByTagName("p")[0].remove();
// let el = document.getElementsByClassName("our-element")[0];
// let start = el.cloneNode();
// let end = el.cloneNode();
// el.before(start);
// el.after(end);
// function addAttr(element, content) {
//   element.setAttribute("data-value", content);
//   element.class = element.textContent = content;
//   element.setAttribute("title", `${content} element`);
// }
// addAttr(start, "start");
// addAttr(end, "end");
// exercise 4:
// console.log(document.getElementsByTagName("div")[0].lastChild.textContent.trim());
// exercise 5:
//  document.onclick = function(event) {
//   console.log(`This is ${event.target.tagName}`);
// }

////// exercices (86 - 93) :
// exercise 2:
// let images = document.querySelectorAll("div img");
// images.forEach(element => {
//     element.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//     element.alt = "Elzero Logo";
// });
// exercise 3:
// let input = document.querySelector("input");
// input.oninput = function () {
//     let dollars = input.value;//in the oninput event the value is updated while any change in the input
//     let dinars = +(dollars * 220).toFixed(2);
//     let msg = document.getElementsByClassName("result")[0];
//     msg.textContent = `${dollars} USD Dollar = ${dinars} Algerian dinar`;
// }
// exercise 4:
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// one.innerHTML = one.title = one.className;
// two.innerHTML = two.title = two.className;
// exercise 5:
// let images = document.querySelectorAll("img");
// images.forEach(function (el) {
//   if (el.hasAttribute("alt")) el.alt = "Old";
//   else el.alt = "New Elzero";
//   // el.setAttribute("alt", "New Elzero");//second methos of setting the alt attribute
// });
// exercise 6:
// document.body.style.cssText = "box-sizing: border-box; font-family: sans-serif;";
// let allEl = document.forms[0].children;
// for (let i = 0; i < allEl.length - 1; i++)
// allEl[i].style.cssText = "display: block; margin: 10px auto; width: 200px;";
// let create = document.forms[0].querySelector("[type='submit']");
// create.style.cssText = "display: block; margin: 10px auto; width: 200px; color: white; background-color: #00927f";
// let results = document.forms[0].lastElementChild;
// create.onclick = function(event){
//     results.innerHTML = "";//to remove the old content of the results div
//     let number = document.forms[0].firstElementChild.value;
//     let text = document.forms[0].querySelector("[type='text']").value;
//     let type = document.forms[0].querySelector("[name='type']").value;
//     for(let i = 0; i < number; i++) {
//         let el = document.createElement(type);
//         el.textContent = text;
//         el.style.cssText = "width: 180px; margin: auto; background-color: #fc5521; text-align: center; color: white; border-radius: 10px; padding: 10px;"
//         results.appendChild(el);
//     }
//     event.preventDefault();
// }
// results.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; padding: 20px;";

//////lesson 101:(challenge)
// the header :
// document.body.style.cssText = "box-sizing: border-box; font-family: sans-serif;";
// let header = document.createElement("header");
// header.style.cssText = "background-color: rgb(240 240 240); display: flex; justify-content: space-between; height: 8vh";
// let mouaadh = document.createElement("div");
// mouaadh.textContent = "MOUAADH";
// mouaadh.style.cssText = "color: #1e935f; font-weight: 800; letter-spacing: 1px; margin: auto 20px";
// header.appendChild(mouaadh);
// let ul = document.createElement("ul");
// ul.style.cssText = "list-style: none; padding: 0; margin: 0; display: flex; color: #666";
// let home = document.createElement("li");
// home.id = home.textContent = "home";
// let About = document.createElement("li");
// About.id = About.textContent = "About";
// let Services = document.createElement("li");
// Services.id = Services.textContent = "Services";
// let Contact = document.createElement("li");
// Contact.id = Contact.textContent = "Contact";
// ul.appendChild(home);
// ul.appendChild(About);
// ul.appendChild(Services);
// ul.appendChild(Contact);
// header.appendChild(ul);
// document.body.appendChild(header);
// for(let i = 0; i < 4; i++)
// document.getElementsByTagName("li")[i].style.cssText = "padding: 10px; margin: auto";
// // the body section :
// let section = document.createElement("section");//work with oveflow to be moe professional
// section.style.cssText = "min-height: 78vh; padding: 10px; background-color: #ececec; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 10px";
// for(let i = 0; i < 15; i++) {
//     const number = i + 1;
//     let product = document.createElement("div");
//     product.style.cssText = "background-color: rgb(240 240 240); display: flex; flex-direction:column; justify-content: center; align-items: center;";
//     let h2 = document.createElement("h2");
//     h2.style.cssText = "font-size: 33px; margin-bottom: 0;";
//     h2.textContent = number;
//     let p = document.createElement("p");
//     p.textContent = `product ${number}`;
//     p.style.cssText = "margin-top: 0;";
//     product.appendChild(h2);
//     product.appendChild(p);
//     section.appendChild(product);
// }
// document.body.appendChild(section);
// // the footer section :
// let footer = document.createElement("footer");
// footer.style.cssText = "background-color: #1e935f; height: 8vh; display: flex; justify-content: center;";
// let div = document.createElement("div");
// div.textContent = "Copyright 2021";
// div.style.cssText = "color: white; letter-spacing: 1px; font-weight: 700; margin: auto;";
// footer.appendChild(div);
// document.body.appendChild(footer);

//////lesson 100:(addEventListener)
//// first part of the lesson:
// let myP = document.getElementsByTagName("p")[0];
// myP.onclick = one;//when you write one() the message will be printed in console without clicking and when you click nothing happen
// myP.onclick = two;//here when you click two will override on one so you can't use this way to do more functions when you click on the element(since here i want one & two to be applied when i click)
// function one () {
//     console.log("form one");
// }
// function two () {
//     console.log("form two");
// }
// window.onload = "mouaadh";//this is not a valid code but this doesn't cause any error
// //// second part of the lesson:
// myP.addEventListener("click", function () {
//     console.log("from click addEventListener");
// });
// myP.addEventListener("click", one);
// myP.addEventListener("click", two);//you can attach more than one event
// // myP.addEventListener("click", "mouaadh");//this will cause an error
// myP.onclick = function () {//this function will ovverride on two in the third line of this lesson
//     let newP = myP.cloneNode(true);
//     newP.className = "cloned";
//     document.body.appendChild(newP);
// }
// // let cloned = document.querySelector(".cloned");//this cloned element will not be found an it will return null
// // cloned.onclick = function () {this function will cause an error because the cloned is not found
// //     console.log("i am cloned");
// // };
// document.addEventListener("click", function (e) {//this will work properlyafter clicking the cloned version
//     if(e.target.className === "cloned")//target here is referring to the element clicked
//         console.log("i am cloned");
// });
//// additional infos
// // first try :(Capturing) from the root of the DOM to the element itself
// document.getElementById('parent').addEventListener('click', () => {
//   console.log('Div clicked - Capturing');
// },true);
// document.getElementById('child').addEventListener('click', () => {
//   console.log('UL clicked - Capturing');
// },true);
// document.getElementById('grandchild').addEventListener('click', () => {
//   console.log('LI clicked - Capturing');
// },true);
// // second try :(Bubbling) from the element to the root
// document.getElementById('parent').addEventListener('click', () => {
//   console.log('Div clicked - Bubbling');
// });
// document.getElementById('child').addEventListener('click', () => {
//   console.log('UL clicked - Bubbling');
// });
// document.getElementById('grandchild').addEventListener('click', () => {
//   console.log('LI clicked - Bubbling');
// });

//////lesson 99:
// let myDiv = document.getElementById("my-div");
// let mySpan = document.getElementsByTagName("span")[1].cloneNode(true);//true if you want the contents of the element and false if you don't
// mySpan.id = `${mySpan.id}-clone`;
// myDiv.appendChild(mySpan);

//////lesson 98:
// let el = document.getElementById("my-div");
// console.log(el.nextSibling);//there s also previousSibling
// console.log(el.nextElementSibling);//there is also previousElementSibling
// let span = document.getElementsByTagName("span")[0];
// span.style.cssText = "border: 1px solid black; border-radius: 50%; padding: 10px; background-color: gold";
// span.onclick = function () {
//     span.parentElement.remove();
// }

//////lesson 97:(in all of these func you can write a string or an element)
// let el = document.getElementById("my-div");
// let createdP = document.createElement("p");
// el.before("hi from js");//before the el
// el.after(createdP);
// el.prepend(document.createElement("div"));//before the content of the el
// el.append("appended text");
// el.remove();//this will remove the el

//////lesson 96:(css styling)
// let el = document.getElementById("my-div");
// el.style.color = "red";
// el.style.fontWeight = "600";
// el.style.cssText = "font-weight: 900; color: green; opacity: 0.9;";//here you write more than one css property
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
//     if (Object.hasOwn(myFavGames[array[i]], "bestThree")) {//Object.hasOwn(obj, string) returns true if the string is a property or method of the object named before
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
// let allLis = document.querySelectorAll("li");
// let allDivs = document.querySelectorAll("div");
// allLis.forEach(function (el) {
//     el.onclick = function () {
//         allLis.forEach(function (el) {
//             el.classList.remove("active")
//         });
//         this.setAttribute("class", "active");
//         allDivs.forEach(function(el) {
//             el.style.display = "none";
//         });
//     };
// });

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
