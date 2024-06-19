//  Reading a file asynchronously with Node JS

const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }
    // console.log(data);
    const studentData = {};
    const lines = data.trim().split('\n');
    lines.shift();

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (firstname && lastname && age && field) {
        if (!studentData[field]) {
          studentData[field] = [];
        }
        studentData[field].push(firstname);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    for (const [key, value] of Object.entries(studentData)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
    return resolve(studentData);
  });
});

module.exports = countStudents;
