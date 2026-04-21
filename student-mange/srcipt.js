// localStorage CRUD Operation

let form = document.querySelector('#registerStudent');
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let course = document.querySelector('#course');
let tbody = document.querySelector('tbody');

// update data
let updateForm = document.querySelector("#updateStudent")
let ufirstname = document.querySelector('#ufirstname');
let ulastname = document.querySelector('#ulastname');
let uemail = document.querySelector('#uemail');
let ucourse = document.querySelector('#ucourse');

let updateIndex = null;

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
    displayData();
})


const displayData = () => {
    let data = JSON.parse(localStorage.getItem('students'));
    
    let recordData = "";
    data.forEach((item, i) => {
        let row = `
            <tr>
                <td>${i + 1}</td>
                <td>${item.firstname}</td>
                <td>${item.lastname}</td>
                <td>${item.email}</td>
                <td>${item.course}</td>
                <td><button onclick="editRecord(${i})">Edit</button></td>
                <td><button onclick="deleteRecord(${i})">Delete</button></td>
            </tr>
        `;
        recordData = recordData + row;
    })

    tbody.innerHTML = recordData;
};

displayData();

function deleteRecord(index){
    let data = JSON.parse(localStorage.getItem('students'));

    data.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(data));
    displayData();
}

function editRecord(index){
    let data = JSON.parse(localStorage.getItem('students'));
    let record = data.find((v, i) => i == index);

    document.querySelector("#registerData").style.display = "none";
    document.querySelector("#updateData").style.display = "block";

    ufirstname.value = record.firstname;
    ulastname.value = record.lastname;
    uemail.value = record.email;
    ucourse.value = record.course;

    updateIndex = index;
}

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem('students'));
    // console.log(data[updateIndex]);
    data[updateIndex] = {
        firstname: ufirstname.value,
        lastname: ulastname.value,
        email: uemail.value,
        course: ucourse.value,
    }

    localStorage.setItem('students', JSON.stringify(data))
    displayData();
    updateIndex = null;

    document.querySelector("#registerData").style.display = "block";
    document.querySelector("#updateData").style.display = "none";
})
