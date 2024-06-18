//  Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(file) {
  let data = fs.readFileSync(file, 'utf-8');
  let student_data = {};
  data = data.split('\n')
  data.shift();
// console.log(data);
  data.pop();
//  console.log(data.length);
  let first_name, last_name, field, age;
  data.forEach((value) => {
    const [first_name, last_name, age, field] = value.split(',');
      if (first_name && last_name && age && field) {
        if (!student_data[field]) {
          student_data[field] = [];
	}
        student_data[field].push(first_name);
      }
  });
// console.log(student_data);
console.log("Number of students: " + data.length);
module.exports = countStudents;
