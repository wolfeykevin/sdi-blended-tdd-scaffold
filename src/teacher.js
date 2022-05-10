/* RULES OF TTD
Only write production code in response to a failing test
Write no more of a unit test than sufficient to fail (compilation failures are failures)
Write no more production code than necessary to pass the one failing unit test
*/


class Teacher {
  constructor(name, subjectTaught, universityAttended, yearsAsTeacher) {
    if(!(typeof name === "string")) throw new TypeError('name must be a string')
    if(!(typeof subjectTaught === "string")) throw new TypeError('subject taught must be a string')
    if(!(typeof universityAttended === "string")) throw new TypeError('university attended must be a string')
    if(!(typeof yearsAsTeacher  === "number")) throw new TypeError('years taught must be a number')

      this.name = name,
      this.subjectTaught = subjectTaught,
      this.universityAttended = universityAttended,
      this.yearsAsTeacher = yearsAsTeacher
  }
  updateTeacherName (newName) {
    if(typeof newName === "string") {
      this.name = newName
      return true
    }
    return false
  }
  updateSubjectTaught (newSubject) {
    if(typeof newSubject === "string") {
      this.subjectTaught = newSubject
      return true
    }
    return false
  }
  updateYearsAsTeacher () {
    this.yearsAsTeacher = this.yearsAsTeacher + 1
    // this.yearsAsTeacher++
    //Same as above  
}  

  

}

module.exports = Teacher;