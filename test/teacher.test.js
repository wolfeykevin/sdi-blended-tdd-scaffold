const Teacher = require('../src').Teacher;

describe('Teacher', () => {
  describe('instantiates a new Teacher', () => {
    test('takes the following arguments: name, subjectTaught, universityAttended, yearsAsTeacher', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.name).toBe('Jane Doe');
      expect(teacher.subjectTaught).toBe('Biology');
      expect(teacher.universityAttended).toBe('UCLA');
      expect(teacher.yearsAsTeacher).toBe(6);
    })
    test('teacher is an instance of Teacher', () =>{
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher instanceof Teacher).toBe(true);
      
    })
    test('tests that errors are thrown when the constructor has invalid inputs', () => {
      expect(() => {
        let teacher = new Teacher(1, 'Biology', 'UCLA', 6);
      }).toThrow(TypeError);
      expect(() => {
        let teacher = new Teacher('Jane Doe', 1, 'UCLA', 6);
      }).toThrow(TypeError);
      expect(() => {
        let teacher = new Teacher('Jane Doe', 'Biology', 1, 6);
      }).toThrow(TypeError);
      expect(() => {
        let teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', '6');
      }).toThrow(TypeError);
    })      
  })
  describe('Changes teacher name', () => {
    test('takes in input, successfully changes name', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.name).toBe('Jane Doe');
      teacher.updateTeacherName('Jane Smith');
      expect(teacher.name).toBe('Jane Smith');
    })
    test('handles error inputs', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.updateTeacherName(1234)).toBe(false);
    })
  })
  describe('Changes subject taught', () => {
    test('takes in input, successfully changes subject taught', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.subjectTaught).toBe('Biology');
      teacher.updateSubjectTaught('Physics');
      expect(teacher.subjectTaught).toBe('Physics');  
  })
  test('handles error inputs', () => {
    const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
    expect(teacher.updateSubjectTaught(1234)).toBe(false);
  })
})
  describe('Changes years taught', () => {
    test('takes in input, successfully changes years taught', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 7);
      expect(teacher.yearsAsTeacher).toBe(7);
      teacher.updateYearsAsTeacher();
      expect(teacher.yearsAsTeacher).toBe(8);  
  })
})
})