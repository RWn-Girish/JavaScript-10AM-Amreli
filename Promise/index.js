// Promise => 3 stage (pending, fulfilled, rejected)

// setTimeout, SetInterval


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Hello World');
//     }, 3 * 1000);
// })

// console.log(promise);

// promise
//     .then((data) => console.log("Resolve: ",data))
//     .catch(err => console.log("Reject: ",err))



let promise = new Promise((resolve, reject) => {
    if(true){
        resolve('Fulfilled Promise');
    }else{
        reject("Promise is Rejected....");
    }
})

// console.log("Promise: ",promise);
// promise
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally Method Called'));

// promise Chining / Promise Hell

// finally



// Async => function,  Await => delay statement

// const sayGreeting = async () => {
//     let data = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5)
//         }, 4000);
//     });

//     console.log("Data: ",data + 10);
// }

// sayGreeting();
