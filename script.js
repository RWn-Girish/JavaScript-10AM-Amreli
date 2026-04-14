// how to select element using DOM => id, querySelector, querySelectorAll, className, TagName


const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const errFirstname = document.querySelector("#errFirstname")
const errLastname = document.querySelector("#errLastname")
const errEmail = document.querySelector("#errEmail")
const errPassword = document.querySelector("#errPassword")

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
   let validate = true;
    ClearErrors();

    if(firstname.value == ""){
        errFirstname.innerHTML = 'Firstname is Required';
        validate = false;
    }else if(firstname.value.length < 5){
        errFirstname.innerHTML = 'Firstname length is minimum 5 Characters.'
        validate = false;
    }
    
    if(lastname.value == ""){
        errLastname.innerHTML = 'Lastname is Required';
        validate = false;
    }

    if(email.value == ""){
        errEmail.innerHTML = 'Email is Required';
        validate = false;
    }else{
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!pattern.test(email.value)){
            errEmail.innerHTML = 'Email is Invalid Formate';
            validate = false;
        }
    }

    if(password.value == ""){
        errPassword.innerHTML = 'Password is Required';
        validate = false;
    }else{
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!strongRegex.test(password.value)){
            errPassword.innerHTML = 'Password is Invalid Formate';
            validate = false;
        }
    }
    if(validate){
        console.log('Submit Success');
    }
})


function ClearErrors() {
    let errorEles = document.querySelectorAll(".errors"); 
    errorEles.forEach(item => item.innerHTML = "");
}