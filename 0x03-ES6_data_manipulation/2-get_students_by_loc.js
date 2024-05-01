/**
 * Filters an arrat of objects of a location
 * @param {Array}  students - Array of Student objects
 * @param {String} city - City
 * @returns Array of objects located at the City
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
