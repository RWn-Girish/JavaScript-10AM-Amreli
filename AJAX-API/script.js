// AJAX => Asynchronous JavaScript With XML

// API Calling (Transfer to Data into Server and Client)

// API => Application Programming Interface => url

// AjAX using API Calling
let div = document.querySelector("div");
// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://dummyjson.com/products");

// xhr.onload = function() {
//     let resposne = JSON.parse(this.responseText);
//     // console.log(resposne.products);
//     resposne.products.forEach(prodcut => {
//         let li = document.createElement('li');
//         li.innerHTML = prodcut.title
//         div.append(li);
//     });
// }

// xhr.send();

// fetch method => promise based

// GET Method Default
// fetch("https://dummyjson.com/products")
// .then((res) => res.json())
// .then(data => {
//     data.products.forEach(pro => {
//         let li = document.createElement('li');
//         li.innerHTML = pro.title
//         div.append(li);
//     })
// })
// .catch(err => console.log(err));

// axios => diffrence between axios and fetch

// DOG API

const button = document.querySelector("#btn");
const select = document.querySelector("#select");

async function breedList() {
  let response = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await response.json();
  const breedLists = Object.keys(data.message);
  // console.log(breedLists)
  breedLists.forEach((breed) => {
    let option = document.createElement("option");
    option.innerHTML = breed;
    option.setAttribute("value", breed);
    select.append(option);
  });
}

breedList();

button.addEventListener("click", () => {
  fetch(`https://dog.ceo/api/breed/${select.value}/images`)
    .then((res) => res.json())
    .then((data) => {
        div.innerHTML = "";
      data.message.forEach((dog) => {
        let image = document.createElement("img");
        image.setAttribute("src", dog);
        image.style.width = "200px";
        image.style.height = "200px";
        div.prepend(image);
      });
    })
    .catch((err) => console.log(err));
});


// Movie API & Cricket API