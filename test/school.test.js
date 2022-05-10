const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;
const Grade = require('../src').Grade;
const School = require('../src').School;


let student1, student2, student3, student0;
let individualClass
let coolTeacher
let studentArray
let classArray
let coolGrade
let gradesArray
let loserSchool
let uncoolTeacher
let tempClass

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
    uncoolTeacher = new Teacher('Mr. Someone', "shakespear", 'university of not so cool', 5)
    individualClass = new IndividualClass('physics', 11, coolTeacher, studentArray);
    tempClass = new IndividualClass('language arts', 11, uncoolTeacher, studentArray);
    classArray = [individualClass, individualClass, tempClass]
    coolGrade = new Grade(classArray, 2017)
    gradesArray = [coolGrade, coolGrade, coolGrade];
    loserSchool = new School('Warwick', 'PA', 36, 9, [coolTeacher, uncoolTeacher], 'Dr. Pepper', gradesArray, 'Eagle')

})

describe('School', () => {

    describe('testing constructor', () => {
        test('testing if constructor accepted inputs correctly', () => {
            expect(loserSchool instanceof School).toBe(true); 
            expect(loserSchool.name).toStrictEqual('Warwick')
            expect(loserSchool.location).toStrictEqual('PA')
            expect(loserSchool.gradeLevels).toStrictEqual([0,1,2,3,4,5,6,7,8,9,10,11,12])
            expect(loserSchool.numberOfStudents).toBe(36);
            expect(loserSchool.numberOfTeachers).toBe(9);
            expect(loserSchool.teachersArray).toStrictEqual([coolTeacher, uncoolTeacher]);
            expect(loserSchool.principal).toStrictEqual('Dr. Pepper');
            expect(loserSchool.gradesArray).toStrictEqual(gradesArray)
            expect(loserSchool.mascot).toStrictEqual('Eagle')
        })
    })
    describe('changing school name', () => {
        test('changing school name', () => {
            loserSchool.updateName('Hempfield');
            expect(loserSchool.name).toBe('Hempfield');
        })
    })
    describe('updating location', () => {
        test('updating location', () => {
            loserSchool.updateLocation('VA');
            expect(loserSchool.location).toBe('VA');
        })
    })
    describe('updating gradeLevels', () => {
        test('updating gradeLevels', () => {
            loserSchool.updateGradeLevels([4, 5]);
            expect(loserSchool.gradeLevels).toStrictEqual([4, 5]);
        })
    })
    describe('removing students', () => {
        test('removing students', () => {
            loserSchool.removeStudents(9);
            expect(loserSchool.numberOfStudents).toBe(27);
        })
    })
    describe('add students', () => {
        test('add students', () => {
            loserSchool.addStudents(9);
            expect(loserSchool.numberOfStudents).toBe(45);
        })
    })
    describe('add teacher', () => {
        test('add teacher', () => {
            loserSchool.addTeacher(coolTeacher);
            expect(loserSchool.teachersArray).toStrictEqual([coolTeacher, uncoolTeacher, coolTeacher]);
            expect(loserSchool.numberOfTeachers).toBe(10);

        })
    })
    describe('remove teacher', () => {
        test('remove teacher', () => {
            loserSchool.removeTeacher(coolTeacher);
            expect(loserSchool.teachersArray).toStrictEqual([uncoolTeacher]);
            expect(loserSchool.numberOfTeachers).toBe(8);

        })
    })
    describe('updating principal', () => {
        test('updating principal', () => {
            loserSchool.updatePrincipal('Mr. T');
            expect(loserSchool.principal).toBe('Mr. T');
        })
    })
    describe('updating mascot', () => {
        test('updating mascot', () => {
            loserSchool.updateMascot('Hornet');
            expect(loserSchool.mascot).toBe('Hornet');
        })
    })
    describe('downsize', () => {
        test('downsize', () => {
            let temp0 = loserSchool.gradesArray[0].getStudentCount()
            let temp1 = loserSchool.gradesArray[1].getStudentCount()
            let temp2 = loserSchool.gradesArray[2].getStudentCount()

            loserSchool.downsize(uncoolTeacher);
            expect(loserSchool.gradesArray[0].individualClasses.length).toBe(2);
            expect(loserSchool.gradesArray[1].individualClasses.length).toBe(2);
            expect(loserSchool.gradesArray[2].individualClasses.length).toBe(2);
            expect(temp0).toBe(loserSchool.gradesArray[0].getStudentCount())
            expect(temp1).toBe(loserSchool.gradesArray[1].getStudentCount())
            expect(temp2).toBe(loserSchool.gradesArray[2].getStudentCount())


        })
    })
})
