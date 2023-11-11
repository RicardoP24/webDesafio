// Simulated Database
let courses = [];
let subjects = [];
let teachers = [];
let students = [];

seccaoSelecionada = 'home'
// DOM Elements
const courseForm = document.getElementById('courseForm');
const courseList = document.getElementById('courseList');
const subjectForm = document.getElementById('subjectForm');
const subjectList = document.getElementById('subjectList');
const subjectCourse = document.getElementById('subjectCourse');
const teacherForm = document.getElementById('teacherForm');
const studentForm = document.getElementById('studentForm');
const teacherList = document.getElementById('teacherList');
const studentList = document.getElementById('studentList');
const teacherSubjects = document.getElementById('teacherSubjects');
const studentSubjects = document.getElementById('studentSubjects');
const studentCourses = document.getElementById('studentCourses');
const coursesSeccao = document.getElementById('courses');
const subjectsSeccao = document.getElementById('subjects');
const teachersSeccao = document.getElementById('teachers');
const studentsSeccao = document.getElementById('students');
const homeSeccao = document.getElementById('home');
const noContentStudents = document.getElementById('no-content-card-students');
const noContentsubjects = document.getElementById('no-content-card-subjects');
const noContentteachers = document.getElementById('no-content-card-teachers');
const noContentcourses = document.getElementById('no-content-card-courses');

const studentsLista = document.getElementById('lista-students');
const teachersLista = document.getElementById('lista-teachers');
const subjectsLista = document.getElementById('lista-subjects');
const coursesLista = document.getElementById('lista-courses');

const studentstableBody = document.querySelector('#lista-students #tableBody');
const teacherstableBody = document.querySelector('#lista-teachers #tableBody');
const subjectstableBody = document.querySelector('#lista-subjects #tableBody');
const coursestableBody = document.querySelector('#lista-courses #tableBody');

limparSeccoes()
limparListas()

function mostrarSeccao(id) {

    coursesSeccao.style.display = 'none'
    subjectsSeccao.style.display = 'none'
    teachersSeccao.style.display = 'none'
    studentsSeccao.style.display = 'none'
    homeSeccao.style.display = 'none'

    limparListas()


    switch (id) {
        case 'courses':
            seccaoSelecionada = 'courses'

            break;

        case 'subjects':
            seccaoSelecionada = 'subjects'

            break;

        case 'students':
            seccaoSelecionada = 'students'
            break;

        case 'teachers':
            seccaoSelecionada = 'teachers'

            break;
    }

    document.getElementById(id).style.display = 'block'
    limparMensagensContentNotFound()

}

function mostrarLista(id) {
    coursesSeccao.style.display = 'none'
    subjectsSeccao.style.display = 'none'
    teachersSeccao.style.display = 'none'
    studentsSeccao.style.display = 'none'
    homeSeccao.style.display = 'none'
    limparListas();

    switch (id) {
        case 'courses':
            seccaoSelecionada = 'courses'
            if (courses.length == 0) {
                limparMensagensContentNotFound()
                noContentcourses.style.display = 'flex'
                document.getElementById(id).style.display = 'none'

            } else {

                limparMensagensContentNotFound()
                coursesLista.style.display = 'block'
            }
            break;

        case 'subjects':
            seccaoSelecionada = 'subjects'

            if (subjects.length == 0) {
                limparMensagensContentNotFound()
                noContentsubjects.style.display = 'flex'
                document.getElementById(id).style.display = 'none'

            } else {

                limparMensagensContentNotFound()
                subjectsLista.style.display = 'block'
            }
            break;

        case 'students':
            seccaoSelecionada = 'students'

            if (students.length == 0) {
                limparMensagensContentNotFound()
                noContentStudents.style.display = 'flex'
                document.getElementById(id).style.display = 'none'

            } else {
                limparMensagensContentNotFound()
                studentsLista.style.display = 'block'
            }
            break;

        case 'teachers':
            seccaoSelecionada = 'teachers'

            if (teachers.length == 0) {
                limparMensagensContentNotFound()

                noContentteachers.style.display = 'flex'
                document.getElementById(id).style.display = 'none'

            } else {
                limparMensagensContentNotFound()
                teachersLista.style.display = 'block'
            }
            break;
    }
}

function mostrarInterfaceAdicionar() {
    document.getElementById(seccaoSelecionada).style.display = 'block'
    limparMensagensContentNotFound()

}

function limparSeccoes() {

    coursesSeccao.style.display = 'none'
    subjectsSeccao.style.display = 'none'
    teachersSeccao.style.display = 'none'
    studentsSeccao.style.display = 'none'



}

function limparMensagensContentNotFound() {
    noContentStudents.style.display = 'none'
    noContentsubjects.style.display = 'none'
    noContentteachers.style.display = 'none'
    noContentcourses.style.display = 'none'
}
function limparListas() {
    studentsLista.style.display = 'none'
    subjectsLista.style.display = 'none'
    teachersLista.style.display = 'none'
    coursesLista.style.display = 'none'
}





// Functions
function addCourse(e) {
    e.preventDefault();
    const courseName = document.getElementById('courseName').value;

    const courseId = courses.length + 1;
    courses.push({ id: courseId, name: courseName });
    updateCourseList();
    updateSubjectCourseOptions();
    updateStudentCourseOptions();

    courseForm.reset();
}

function updateCourseList() {
    coursestableBody.innerHTML = '';
    courses.forEach(course => {
        coursestableBody.innerHTML += `<tr>
        <td>${course.id}</td>
        <td>${course.name}</td>
        <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
      </tr>`;;
    });
}

function addSubject(e) {
    e.preventDefault();
    const subjectName = document.getElementById('subjectName').value;
    const courseId = subjectCourse.value;
    const subjectId = subjects.length + 1;
    subjects.push({ id: subjectId, name: subjectName, courseId: courseId });
    updateSubjectList();
    updateTeacherSubjectOptions();
    updateStudentSubjectOptions();
    subjectForm.reset();
}

function updateSubjectList() {
    subjectstableBody.innerHTML = '';
    subjects.forEach(subject => {
        const courseName = courses.find(course => course.id == subject.courseId).name;
        subjectstableBody.innerHTML += `<tr>
        <td >${subject.id}</td>
        <td >${subject.name}</td>
        <td >${courseName}</td>
        <td ><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
      </tr>`;
    });
}

function addTeacher(e) {
    e.preventDefault();
    const firstName = document.getElementById('teacherFirstName').value;
    const lastName = document.getElementById('teacherLastName').value;
    const subjectIds = Array.from(teacherSubjects.selectedOptions).map(option => option.value);
    const teacherId = teachers.length + 1;

  
    
    teachers.push({ id: teacherId, firstName: firstName, lastName: lastName, subjectIds: subjectIds });
    updateTeacherList();
    teacherForm.reset();
}
function addStudent(e) {
    e.preventDefault();
    const firstName = document.getElementById('studentName').value;
    const courseIds = Array.from(studentCourses.selectedOptions).map(option => option.value);
    const subjectIds = Array.from(studentSubjects.selectedOptions).map(option => option.value);
    if (courseIds.length > 5){

        alert('Não pode inserir mais de 5 cursos')
        return;
    }

    const studentId = students.length + 1;
    students.push({ id: studentId, firstName: firstName, courseIds: courseIds, subjectIds: subjectIds });
    updateStudentList();
    $('#studentsModal').modal('show');

    studentForm.reset();
}

function updateTeacherList() {
    teacherstableBody.innerHTML = '';
    teachers.forEach(teacher => {
        const subjectNames = teacher.subjectIds.map(id => subjects.find(subject => subject.id == id).name).join(', ');
        teacherstableBody.innerHTML += `<tr>
        <td>${teacher.id}</td>
        <td>${teacher.firstName}</td>
        <td>${teacher.lastName}</td>
        <td>${subjectNames}</td>
        <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
      </tr>`;
    });
}
function updateStudentList() {
    studentstableBody.innerHTML = '';
    students.forEach(student => {
        const coursesNames = student.courseIds.map(id => courses.find(course => course.id == id).name).join(', ');
        const subjectNames = student.subjectIds.map(id => subjects.find(subject => subject.id == id).name).join(', ');
        studentstableBody.innerHTML += `<tr>
        <td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${coursesNames}</td>
        <td>${subjectNames}</td>
        <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
      </tr>`;
    });
}

function updateSubjectCourseOptions() {
    subjectCourse.innerHTML = '';
    courses.forEach(course => {
        subjectCourse.innerHTML += `<option value="${course.id}">${course.name}</option>`;
    });
}

function updateTeacherSubjectOptions() {
    teacherSubjects.innerHTML = '';
    subjects.forEach(subject => {
        teacherSubjects.innerHTML += `<option value="${subject.id}">${subject.name}</option>`;
    });
}
function updateStudentSubjectOptions() {
    studentSubjects.innerHTML = '';
    subjects.forEach(subject => {
        studentSubjects.innerHTML += `<option value="${subject.id}">${subject.name}</option>`;
    });
}
function updateStudentCourseOptions() {
    studentCourses.innerHTML = '';
    courses.forEach(course => {
        studentCourses.innerHTML += `<option value="${course.id}">${course.name}</option>`;
    });
}


document.getElementById('filterInputCourses').addEventListener('input', function () {
    var filterValue = this.value.toLowerCase();
    var table = document.querySelector('#lista-courses #tableBody');
    var rows = table.querySelectorAll('#lista-courses tr');


    for (var i = 0; i < rows.length; i++) {
        var nameColumn = rows[i].querySelectorAll('#lista-courses td')[1];
        if (nameColumn) {
            var text = nameColumn.innerText.toLowerCase();
            if (text.includes(filterValue)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});
document.getElementById('filterInputStudents').addEventListener('input', function () {
    var filterValue = this.value.toLowerCase();
    var table = document.querySelector('#lista-students #tableBody');
    var rows = table.querySelectorAll('#lista-students tr');


    for (var i = 0; i < rows.length; i++) {
        var nameColumn = rows[i].querySelectorAll('#lista-students td')[1];
        if (nameColumn) {
            var text = nameColumn.innerText.toLowerCase();
            if (text.includes(filterValue)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});
document.getElementById('filterInputTeachers').addEventListener('input', function () {
    var filterValue = this.value.toLowerCase();
    var table = document.querySelector('#lista-teachers #tableBody');
    var rows = table.querySelectorAll('#lista-teachers tr');


    for (var i = 0; i < rows.length; i++) {
        var nameColumn = rows[i].querySelectorAll('#lista-teachers td')[1];
        if (nameColumn) {
            var text = nameColumn.innerText.toLowerCase();
            if (text.includes(filterValue)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});
document.getElementById('filterInputSubjects').addEventListener('input', function () {
    var filterValue = this.value.toLowerCase();
    var table = document.querySelector('#lista-subjects #tableBody');
    var rows = table.querySelectorAll('#lista-subjects tr');


    for (var i = 0; i < rows.length; i++) {
        var nameColumn = rows[i].querySelectorAll('#lista-subjects td')[1];
        if (nameColumn) {
            var text = nameColumn.innerText.toLowerCase();
            if (text.includes(filterValue)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});


// Track selected options
let selectedOptions = [];

function cleanSelectedOptions() {
    selectedOptions = [];
}
// studentCourses.addEventListener("change", function (event) {
//     const selectedOption = event.target.options[event.target.selectedIndex];

//     // If the user attempts to select more than 5 options, prevent it
//     if (selectedOptions.length >= 5 && selectedOption.selected) {
//         for (let i = 0; i < selectElement.options.length; i++) {
//             selectElement.options[i].selected = false;
//         }
//         cleanSelectedOptions()
//     } else {
//         if (selectedOption.selected) {
//             selectedOptions.push(selectedOption);
//         } else {
//             selectedOptions = selectedOptions.filter(option => option !== selectedOption);
//         }
//     }
// });

// studentCourses.addEventListener("blur", function () {
//     cleanSelectedOptions();
// });




// Add an event listener to the button to open the modal

function removeRow(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}
// Event Listeners
courseForm.addEventListener('submit', addCourse);
subjectForm.addEventListener('submit', addSubject);
teacherForm.addEventListener('submit', addTeacher);
studentForm.addEventListener('submit', addStudent);

// Initialize
updateCourseList();
updateSubjectList();
updateTeacherList();
updateStudentList()
updateSubjectCourseOptions();
updateTeacherSubjectOptions();


