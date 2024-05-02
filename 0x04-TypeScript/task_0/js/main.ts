interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
  };

const firstStudent: Student = {
  firstName: 'Oluwatosin',
  lastName: 'Akanji',
  age: 23,
  location: 'Ogun'
  };

const secondStudent: Student = {
  firstName: 'Okon',
  lastName: 'Imudiahlon',
  age: 43,
  location: 'Edo'
  };

const studentsList = [firstStudent, secondStudent];

document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  studentsList.forEach(student => {
    const trow = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');

    firstName.textContent = student.firstName;
    location.textContent = student.location;
    trow.appendChild(firstName);
    trow.appendChild(location);
    tbody.appendChild(trow);
})

  table.appendChild(tbody);
  document.body.appendChild(table);
});