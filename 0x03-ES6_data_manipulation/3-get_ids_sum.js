/**
 * Sum of all the student IDs.
 * @param {Array} - Array of student objects
 * @returns {number} sum of student IDs
 */

export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
