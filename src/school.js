class School {
    constructor(name, location, numberOfStudents, numberOfTeachers, teachersArray, principal, gradesArray, mascot) {
        this.name = name
        this.location = location
        this.numberOfStudents = numberOfStudents
        this.numberOfTeachers = numberOfTeachers
        this.teachersArray = teachersArray
        this.principal = principal
        this.gradesArray = gradesArray
        this.mascot = mascot
        this.gradeLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    }
    updateName(newName)
    {
        this.name = newName;
    }
    updateLocation(newLocation)
    {
        this.location = newLocation;
    } 
    updateGradeLevels(arr)
    {
        this.gradeLevels = arr;
    }
    removeStudents(num)
    {
        this.numberOfStudents -= num;
    }
    addStudents(num)
    {
        this.numberOfStudents += num;
    }
    removeTeacher(specificTeacher)
    {
        this.teachersArray = this.teachersArray.filter((el)=>{
            return el !== specificTeacher;
        })
        this.numberOfTeachers--;
    }
    addTeacher(specificTeacher)
    {
        this.teachersArray.push(specificTeacher);
        this.numberOfTeachers++;
    }
    updatePrincipal(newName)
    {
        this.principal = newName;
    }
    updateMascot(newMascot)
    {
        this.mascot = newMascot;
    }
    downsize(oldTeacher)
    {
        this.removeTeacher(oldTeacher);
        for(let i = 0; i < this.gradesArray.length; i++)
        {
            let studentsInGrade = [];
            for (let j = 0; j < this.gradesArray[i].individualClasses.length; j++){
                studentsInGrade = studentsInGrade.concat(this.gradesArray[i].individualClasses[j].students)
                this.gradesArray[i].individualClasses[j].students = [];
            }
            let tempClassesInGrade = []
            
            tempClassesInGrade = this.gradesArray[i].individualClasses.filter((el) => {
                return el.teacher !== oldTeacher;
            })
            console.log(studentsInGrade.length);
            for (let i = 0; i < studentsInGrade.length; i++)
            {

                tempClassesInGrade[i % tempClassesInGrade.length].addStudent(studentsInGrade[i])
            
            }
            
            this.gradesArray[i].individualClasses = tempClassesInGrade
        }

    }

}

module.exports = School;