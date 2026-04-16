// JSON => JavaScript Object Notation (text-based data)
// Data store and tranimission

// let person = `{
//     "name": "Rohit Sharma",
//     "nickname": "Hitmen",
//     "jersyNo": 45,
//     "hobbies": ["sports", "eating", "dancing"]
// }`
// console.log(person.name);

/*
//          JS      Vs      JSON
function    Yes             No
operation   Yes             No

*/

// let person = {
//     name: "Rohit Sharma",
//     nickname: "Hitmen",
//     jersyNo: 45,
//     "hobbies": ["sports", "eating", "dancing"],
//     sayGreeting : function () {
//         return ('Hello Good Morning');
//     }
// }

// console.log(person.sayGreeting);



// 1. JSON to Convert into JS Object (JSON.parse())
// let person = `{
//         "name": "Virat Kohli", 
//         "nickName": "Chiku", 
//         "jersyNo": 18,
//         "ipl_Team": "RCB"
//     }`

//     console.log("JSON Obj: ", person);

//     let data = JSON.parse(person);

//     console.log("JS Obj: ", data);

// 2. JS Object Convert into JSON  (JSON.stringify())

// let jsObj = {
//     name: "John Peter",
//     email: "john@test.in",
//     age: 25,
//     hobbie: ['music','dancing','adventure']
// }

// console.log("JS Object: ", jsObj);

// let data = JSON.stringify(jsObj);

// console.log('JSON Object: ', data);


// Data Storage => Database
// localStorage & sessionStorage
// perment          temporary


let person = {
    "name": "Virat Kohli",
    "run": 49,
    "hobbies": ['music', 'cricket', 'dancing'],
    "email": "virat@test.in"
}

let data = JSON.stringify(person);
localStorage.setItem('Hello',data);

let ans = JSON.parse(localStorage.getItem('Hello'));

console.log(ans);

// remove localStorage
// localStorage.removeItem("hello");
// localStorage.clear();

// sessionStorage.