/***********TypeScript: Extension to JavaScript*********/
// const char = 'mario'
// console.log(char)
// const inputs = document.querySelectorAll('input');
// console.log(inputs)
// inputs.forEach(input => console.log(input))
//declaring variables;
//Ts automatically infers the data-types of variables and checks that it cannot be changed later
var char = 'megha';
var age = 30;
// char = 56; we cannot change the type of char
char = 'esha'; //value can be changed only if data type is same
//functoion parameter are strictly typed
//(name:string)
//arrays
var names = ['megha', 23];
names.push(40);
// names.push(true)
//since our original array contains only string and number, so we cannot modify it to contain any other types later on
//not only cannot we change the individual data types of names array but we also cannot change the type of names itself, ie from an array to something else
//objects
var student = {
    name: 'megha',
    age: '20',
    isCool: true
};
//we cannot add any more properties to the object
//we can modify the values of property such that their data type remians same
student.name = "eshika"; //isValid
// student.skills = 'dancing' isInValid
//We can also overwrite the object but it must have same structure
student = {
    name: 'sayak',
    age: '14',
    isCool: false
};
//******explicit types********
//primitive data types
var character;
var isLoggedIn;
// character = 56 will give error
//arrays
var fruits = [];
//we need to initialize the array as well so that push metod works, as we cannot push to undefined
fruits.push('kiwi');
//union
var stud_id;
//this value of this variable can be of either string or number type
stud_id = '123';
stud_id = 123;
// stud_id = false will give error as it cannot contain boolean
//if we want to store multiple data types in array
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
//objects
var books;
books = {
    name: 'Gone Girl',
    price: '$20'
};
// books = 'mybook' will give error since books is of object type
books = []; //this is valid as array is an object
books = {
    cost: 88,
    name: 'Gone Girl',
    price: '$20'
};
var userDetails;
//********Any Type*********//
var myvar = 25; //myvar is of any type which is initalized with value 25 
myvar = true; //we cn reassign it to a different type like boolean
//Any type it destroys the purpose of TS 
//used in rare cases as when we don't know which type will the variable be in future
var random_array = [];
random_array.push(5);
random_array.push('yo ssup');
random_array.push(true);
//objects
var user;
user = { name: 'yoshi', age: 25 };
user = { name: 25, age: 'yoshi' };