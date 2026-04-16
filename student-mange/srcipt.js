let form = document.querySelector('form');
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let course = document.querySelector('#course');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const student = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        course: course.value,
    }
    let data = JSON.parse(localStorage.getItem('students')) || [];
    data.push(student);
    localStorage.setItem('students', JSON.stringify(data));
    form.reset();
})