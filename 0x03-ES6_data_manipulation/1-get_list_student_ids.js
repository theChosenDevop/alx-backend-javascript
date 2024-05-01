/**
 * Gets the List of students ids
 * @param {Array} studentsArr - An array of students objects
 * @returns {Array} An array of student IDS. Returns an empty areay
 *   if  studentsArr is not an array.
 */

export default function getListStudentIds(studentsArr) {
  if (!Array.isArray(studentsArr)) {
    return [];
  }

  return studentsArr.map((student) => student.id);
}
