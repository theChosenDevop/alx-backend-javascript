//  Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(file) {
  try {
    let data = fs.readFileSync(file, 'utf-8');
    const studentData = {};
    data = data.split('\n');
    data.shift();
    // console.log(data);
    data.pop();
    //  console.log(data.length);
    data.forEach((value) => {
      const [firstname, lastname, age, field] = value.split(',');
      if (firstname && lastname && age && field) {
        if (!studentData[field]) {
          studentData[field] = [];
        }
        studentData[field].push(firstname);
      }
    });
    // console.log(student_data);
    console.log(`Number of students: ${data.length}`);
    for (const [key, value] of Object.entries(studentData)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
