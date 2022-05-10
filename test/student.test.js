const Student = require('../src').Student;

describe('Student', () => {
  describe('instantiates a new Student', () => {
    test('takes the following arguments: name, age, grade, test scores, graduation year, activities', () => {
      const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
      expect(student.name).toBe('Ryan Guinter');
      expect(student.age).toBe(23);
      expect(student.gradeLevel).toBe(5);
      expect(student.testScores).toStrictEqual([10, 10, 10]);
      expect(student.graduationYear).toBe(2017)
      expect(student.activities).toStrictEqual(['nothing', 'studying', 'programming'])
    })
    test('checks if student is constructed with invalid parameters', () => {
        expect(() => {
            const student = new Student(1, 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        }).toThrow(TypeError);
        expect(() => {
            const student = new Student('Ryan Guinter', {}, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        }).toThrow(TypeError);
        expect(() => {
            const student = new Student('Ryan Guinter', 23, 'somehting', [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        }).toThrow(TypeError);
        expect(() => {
            const student = new Student('Ryan Guinter', 23, 5, {}, 2017, ['nothing', 'studying', 'programming']);
        }).toThrow(TypeError);
        expect(() => {
            const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], '2017', ['nothing', 'studying', 'programming']);
        }).toThrow(TypeError);
        expect(() => {
            const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, 'something');
        }).toThrow(TypeError);
        //// TODO - ensure the data type inside the array is what we expect
        // expect(() => {
        //     const student = new Student('Ryan Guinter', 23, 5, [10, '10', 10], 2017, ['nothing', 'studying', 'programming']);
        // }).toThrow(TypeError);
        // expect(() => {
        //     const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, [10, 'studying', 'programming']);
        // }).toThrow(TypeError);
        // expect(() => {
        //     const student = new Student('Ryan Guinter', 23, 5, [187, 380, 1000], 2017, ['nothing', 'studying', 'programming']);
        // }).toThrow(RangeError);
    })
  })
  describe('update student name', () => {
    test('takes in input, successfully changes name', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        expect(student.name).toBe('Ryan Guinter');
        student.updateStudentName('Bryan Guinter');
        expect(student.name).toBe('Bryan Guinter');
    })
  })
  describe('increments the students age by 1 each time it is called', () => {
    test('increments students age by 1', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        student.incrementAge();
        expect(student.age).toBe(24);
    })
  })
  describe('increments the students gradelevel by 1 each time it is called', () => {
    test('increments students gradelevel by 1', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        student.incrementGradeLevel();
        expect(student.gradeLevel).toBe(6);
    })
  })
  describe('test scores', () => {
    test('adds test scores to students tests array', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        student.addTestScore(95);
        expect(student.testScores).toStrictEqual([10, 10, 10, 95]);
    })
    test('calculates the average score of a student', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        student.addTestScore(95);
        expect(student.calculateTestAverages()).toBe(31.25);
        expect(student.testScores).toStrictEqual([10, 10, 10, 95]);
    })
  })
  describe('testing update grad year', () => {
    test('updates a students graduationYear to the input number', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        student.changeGraduationYear(2021);
        expect(student.graduationYear).toBe(2021);
    })
  })
  describe('Activity tests', () => {
    test('adds an activity to the student', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        student.addActivity('Music');
        expect(student.activities).toStrictEqual(['nothing', 'studying', 'programming', 'Music']);
    })
    test('which removes a given activity from the student', () => {
        const student = new Student('Ryan Guinter', 23, 5, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
        student.removeActivity('studying');
        expect(student.activities).toStrictEqual(['nothing', 'programming']);
    })
  })
})