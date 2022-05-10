
class IndividualClass {
  constructor(subject, gradeLevel, teacher, students) {
    this.subject = subject;
    this.gradeLevel = gradeLevel;
    this.teacher = teacher;
    this.students = students;
  }
  updateSubject(newSubject){
      this.subject = newSubject;
  }
  changeTeacher(newTeacher){
      this.teacher = newTeacher;
  }
  addStudent(newStudent)
  {
      this.students.push(newStudent);
  }
  removeStudent(student)
  {
      this.students = this.students.filter((el) => {
          return student !== el;
      })
  }
}

module.exports = IndividualClass;