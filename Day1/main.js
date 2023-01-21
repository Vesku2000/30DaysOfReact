//LEVEL 1 ---------------------------------------------

//Declare an empty array;
const eArr = [];
//Declare an array with more than 5 number of elements
const fiveArr = ["cat", "dog", 200, "hello", 1202];
//Find the length of your array
const arrLength = fiveArr.length;
console.log(arrLength);
//Get the first item, the middle item and the last item of the array
console.log(fiveArr[0]);
console.log(fiveArr[arrLength - 1]);
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "Hello", true, {name: "John"}, [1,2,3], 3.14];
console.log(mixedDataTypes.length); // 6
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
//Print the array using console.log()
console.log(itCompanies)
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
console.log("First Company: " + itCompanies.shift());
console.log("Last Company: " + itCompanies.pop());
console.log("Middle Company: " + itCompanies[Math.floor(itCompanies.length/2)]);
//Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//Change each company name to uppercase one by one and print them out
/*
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}
*/
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = "";
for (let i = 0; i < itCompanies.length; i++) {
    if (i === itCompanies.length - 1) {
        sentence += "and " + itCompanies[i] + " are big IT companies.";
    } else {
        sentence += itCompanies[i] + ", ";
    }
}
console.log(sentence);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = "Google";
let index = itCompanies.indexOf(company);
if (index !== -1) {
    console.log(itCompanies[index]);
} else {
    console.log(company + " is not found");
}

//Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] === 'o') {
            count++;
        }
    }
    if (count > 1) {
        filteredCompanies.push(itCompanies[i]);
    }
}
console.log(filteredCompanies);

//Sort the array using sort() method
console.log(itCompanies.sort());
//Reverse the array using reverse() method
console.log(itCompanies.reverse());
//Slice out the first 3 companies from the array
let first3Companies = itCompanies.slice(0, 3);
console.log(first3Companies);
//Slice out the last 3 companies from the array
let last3Companies = itCompanies.slice(itCompanies.length-3);
console.log(last3Companies);

//Slice out the middle IT company or companies from the array
let middleIndex = itCompanies.length % 2 == 0 ? itCompanies.length/2-1 : (itCompanies.length-1)/2;
let middleITCompanies = itCompanies.slice(middleIndex, middleIndex + (itCompanies.length % 2 == 0 ? 2 : 1));
console.log(middleITCompanies);

//Remove the first IT company from the array
console.log(itCompanies.shift());
//Remove the middle IT company or companies from the array
let middleIndex1 = itCompanies.length % 2 == 0 ? itCompanies.length/2-1 : (itCompanies.length-1)/2;
let removedCompanies = itCompanies.splice(middleIndex1, itCompanies.length % 2 == 0 ? 2 : 1);
console.log(removedCompanies); // ["Apple"] if the array has odd number of elements, ["Microsoft", "Apple"] if the array has even number of elements
console.log(itCompanies); // ["Facebook", "Google", "IBM", "Oracle", "Amazon"] if the array has odd number of elements, ["Facebook", "Google", "IBM", "Oracle"] if the array has even number of elements

//Remove the last IT company from the array
console.log(itCompanies.pop());
//Remove all IT companies
let removedCompanies1 = itCompanies.splice(0, itCompanies.length);
console.log(removedCompanies1); // ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies); //

//Exercise: Level 2
//1.Create a separate countries.js file and store
// the countries array into this file, create a separate file web_techs.js
// and store the webTechs array into this file. Access both file in main.js file



//2.First remove all the punctuations and change the string 
//to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[^\w\s]/gi, '').split(' ');
console.log(words);
console.log(words.length); 


//3.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) { // check if 'Meat' is not already in the array
    shoppingCart.unshift('Meat'); // add 'Meat' to the beginning of the array
  }
  console.log(shoppingCart); // ["Meat", "Bread", "Eggs", "Milk", "Cheese"]
//add Sugar at the end of you shopping cart if it has not been already added

if (!shoppingCart.includes('Sugar')) { // check if 'Sugar' is not already in the array
    shoppingCart.push('Sugar'); // add 'Sugar' to the end of the array
  }
  console.log(shoppingCart); // ["Bread", "Eggs", "Milk", "Cheese", "Sugar"]
//remove 'Honey' if you are allergic to honey
const allergicToHoney = true;
if (allergicToHoney) { // check if you are allergic to honey
    let index = shoppingCart.indexOf('Honey'); // find the index of 'Honey'
    if (index > -1) {
      shoppingCart.splice(index, 1); // remove 'Honey' from the array
    }
  }
  console.log(shoppingCart); // ["Bread", "Eggs", "Milk", "Cheese"]
//modify Tea to 'Green Tea'
let indexTea = shoppingCart.indexOf('Tea'); // find the index of 'Tea'
if (indexTea > -1) {
  shoppingCart[indexTea] = 'Green Tea'; // modify 'Tea' to 'Green Tea'
}
console.log(shoppingCart); 

//4.In countries array check if 'Ethiopia' exists in the array 
//if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countries = ["India", "China", "USA", "Russia", "Brazil"];
if(countries.indexOf("Ethiopia") !== -1) {
    console.log("ETHIOPIA is here already");
} else {
    countries.push("Ethiopia added");
}

console.log(countries);
//5.In the webTechs array check if Sass exists in the array and 
//if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let webTechs = ["HTML", "CSS", "Javascript", "React", "Vue"];
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    webTechs.push("Sass");
    console.log(webTechs);
}
//6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack)