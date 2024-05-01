/**
 * Updates an array of students for a specific city with their new grade
 * @param {Array} students - An array of student Objects
 * @param {String} city - City
 * @param {Array} studentInfo - Array of student ID and grade
 * @returns An array of student updated info
 */

export default function updateStudentGradeByCity(students, city, studentInfo) {
  const filteredStudent = students.filter((student) => student.location === city);

  const newStudentInfo = filteredStudent.map((student) => {
    const gradeStudent = studentInfo.find((studData) => studData.studentId === student.id);
    const grade = gradeStudent ? gradeStudent.grade : 'N/A';
    return { ...student, grade };
  });

  return newStudentInfo;
}
