const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;
const Grade = require('../src').Grade

let student1, student2, student3, student0;
let individualClass
let coolTeacher
let studentArray
let classArray
let coolGrade

beforeEach(() => {
    student0 = new Student('Kevin Wolfe', 23, 11, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
    student1 = new Student('Jessica Wells', 32, 11, [10, 10, 10], 2010, ['nothing', 'studying', 'telling Kevin what to do']);
    student2 = new Student('Ryan Guinter', 23, 11, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
    student3 = new Student('Batman', 23, 11, [10, 10, 10], 2017, ['nothing', 'studying', 'programming']);
    studentArray = []
    studentArray.push(student0)
    studentArray.push(student1)
    studentArray.push(student2)
    studentArray.push(student3)
    coolTeacher = new Teacher('George Mihov', "physics", 'university of cool', 5)
    individualClass = new IndividualClass('physics', 11, coolTeacher, studentArray);
    classArray = [individualClass, {...individualClass}]
    coolGrade = new Grade(classArray, 2017)
})

describe('Grade', () => {

    describe('testing constructor', () => {
        test('is real', () => {
            expect(coolGrade instanceof Grade).toBe(true); 
            expect(coolGrade.individualClasses).toBe(classArray)
            expect(coolGrade.graduationYear).toBe(2017)
        })
    })
    describe('testing get student count', () => {
        test('get student count', () => {
            let temp = coolGrade.getStudentCount()
            expect(temp).toBe(8)
        })
    })
    describe('calculating grade average', () => {
        test('get student count', () => {
            let temp = coolGrade.calculateGradeAverage()
            expect(temp).toBe(10)
        })
    })
    describe('calculating grade average', () => {
        test('get student count', () => {
            let temp = [individualClass, {...individualClass}, {...individualClass}]
            coolGrade.addIndividualClass({...individualClass});
            expect(coolGrade.individualClasses).toStrictEqual(temp);
        })
    })
})
