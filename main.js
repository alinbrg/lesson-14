// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.

// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც ვისწავლეთ.
let myNum = 30,
	myString = "example text",
	myNull = null,
	myUndefined = undefined,
	isStudent = true;

let myVar, userAge;

myVar = 20;
// 3. დამატებით შექმენით ცვლადები myName, myHobby,  yearOfBirth, currentYear და მიანიჭეთ თქვენი სახელი, ჰობი, დაბადების წელი, მიმდინარე წელი.

const myName = "alina";
const yearOfBirth = 1996;
const currentYear = 2022;

const age = currentYear - yearOfBirth;
// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: My name is (აქ name ცვლადი), I am (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   ცვლადების გამოყენებით) old and my hobby is (აქ hobby ცვლადი), გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.

let aboutMe = `My name is ${myName}, I am ${age} old`;
// console.log(aboutMe);

aboutMe = "My name is " + myName + " ,  I am" + age + " old";
// console.log(aboutMe);

// Object რთული ტიპი
// Arrays, Object, Function

// Arrays მასივი
let myArr = [1, 2, 3, 4, 5];
let myArr2 = ["myText", 2, true, null, , 20];
// console.log(typeof myArr2);
// console.log(myArr, myArr2);
let firstEl = myArr2[0];
let key = 1;

// console.log(firstEl, myArr2[1], myArr2[5], myArr2[key], myArr2["key"]);
let arrLength = myArr.length;
// console.log(arrLength, myArr2.length);

// console.log(myArr2[myArr2.length - 2]);
myArr2.pop();
// console.log(myArr2.pop(), myArr2);
// myArr2.push(5);
// console.log(myArr2.push(5), myArr2);

let firstDeleted = myArr2.shift();
// console.log(myArr2, firstDeleted);
myArr2.unshift("text");
myArr2.unshift(key);
// console.log(myArr2);
let joinedArr = myArr2.join("-");
// console.log(joinedArr);

let myArr3 = [1, key, 3, "text", true, [2, null, "sample text", [1, 2, 3]]];
// console.log(myArr3[myArr3.length - 1][1]);
// console.log(myArr3[myArr3.length - 1][3][0]);
// console.error("error");
// alert("alert");

// Object ობიექტი
// let myName3 = "alina";
let person = {
	userName: "nino",
	userAge: 30,
	isStudent: true,
	address: ["address1", "address2"],
	userMail: "example@gmail.com",
	phone: {
		personalMob: [12345676, 3234556],
		workMob: 098675443,
	},
};
// console.log(person);
// key === property
//method === function

let userName1 = "userName";
// console.log(person["userName"], person.userName, person[userName1]);
// console.log(person.address[1]);
// console.log(person.phone.personalMob);
person.wordAddress = "example address";
// console.log(person);
delete person.userMail;
person.userAge = 20;
person.phone.workMob = 1234543321;
person.address.shift();
// console.log(person);

let name1 = "Harry Potter";
const charactersList = [
	{
		name: name1,
		alternate_names: [name1],
		species: "human",
		gender: "male",
		house: "Gryffindor",
		wand: {
			wood: "holly",
			core: "phoenix feather",
			length: 11,
		},
		patronus: "stag",
		hogwartsStudent: true,
		alive: true,
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
	},
	{
		name: "Hermione Granger",
		alternate_names: [],
		species: "human",
		gender: "female",
		house: "Gryffindor",
		dateOfBirth: "19-09-1979",
		yearOfBirth: 1979,
		wizard: true,
		ancestry: "muggleborn",
		eyeColour: "brown",
		hairColour: "brown",
		wand: {
			wood: "vine",
			core: "dragon heartstring",
			length: "",
		},
		patronus: "otter",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Emma Watson",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
	},
	{
		name: "Ron Weasley",
		alternate_names: ["Dragomir Despard"],
		species: "human",
		gender: "male",
		house: "Gryffindor",
		dateOfBirth: "01-03-1980",
		yearOfBirth: 1980,
		wizard: true,
		ancestry: "pure-blood",
		eyeColour: "blue",
		hairColour: "red",
		wand: {
			wood: "willow",
			core: "unicorn tail-hair",
			length: 14,
		},
		patronus: "Jack Russell terrier",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Rupert Grint",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
	},
];
charactersList.shift();
// charactersList[0].name = "ron";
// console.log(charactersList[0].name, charactersList[0]);

//ელემენტების კოპირება
//მარტივი ტიპების კოპირება
let userEmail1 = "example@gmail.com";
let userEmail2 = userEmail1;
// let userEmail2 =  "example@gmail.com";
console.log(userEmail1, userEmail2);
userEmail1 = 4;
console.log(userEmail1, userEmail2);
//რთული ტიპების კოპირება
//reference
let myArr1 = [1, 2, 3];
let myCopyArr = myArr1;
//spread operator
let savedArr = [...myArr1];
// console.log(myArr1, myCopyArr, savedArr);
myArr1.pop();
// console.log(myArr1, myCopyArr, savedArr);
