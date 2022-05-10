const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

let student1, student2, student3, student0;
let individualClass
let coolTeacher
let studentArray

beforeEach(() => {
    student0 = new Student('Kevin Wolfe', 23, 11, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
    student1 = new Student('Jessica Wells', 32, 11, [10, 9, 10], 2010, ['nothing', 'studying', 'telling Kevin what to do']);
    student2 = new Student('Ryan Guinter', 23, 11, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
    student3 = new Student('Batman', 23, 11, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
    studentArray = []
    studentArray.push(student0)
    studentArray.push(student1)
    studentArray.push(student2)
    studentArray.push(student3)
    coolTeacher = new Teacher('George Mihov', "physics", 'university of cool', 5)
    individualClass = new IndividualClass('physics', 11, coolTeacher, studentArray);
});

describe('Individual Class', () => {

    describe('testing constructor', () => {

        test('is real', () => {
          expect(individualClass instanceof IndividualClass).toBe(true)
          expect(individualClass.subject).toBe('physics')
          expect(individualClass.gradeLevel).toBe(11)
          expect(individualClass.teacher).toBe(coolTeacher)
          expect(individualClass.students).toBe(studentArray)
        });
    });
    describe('testing update subject', () => {
        test('can update subject to input string', () => {
            individualClass.updateSubject('chemistry')
            expect(individualClass.subject).toBe('chemistry')
        })
    })
    describe('testing update teacher', () => {
        test('can update teacher to input teacher', () => {
            let temp = new Teacher('Alberto', 'chemistry', 'Pitt', 1)
            individualClass.changeTeacher(temp)
            expect(individualClass.teacher).toBe(temp)
        })
    })
    describe('testing adding a student', () => {
        test('can add student to student array', () => {
            let temp = new Student('Robin', 12, 11, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
            let tempArr = [...studentArray]
            tempArr.push(temp);
            individualClass.addStudent(temp)
            // console.log(studentArray)
            expect(individualClass.students).toStrictEqual(tempArr)
        })
    })
    describe('testing removing a student', () => {
        test('can remove student from student array', () => {
            let tempArr = [student0, student1, student2]
            individualClass.removeStudent(student3);
            expect(individualClass.students).toStrictEqual(tempArr)
        })
    })
});