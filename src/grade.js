class Grade {
    constructor(IndividualClasses, graduationYear) {
        this.individualClasses = IndividualClasses
        this.graduationYear = graduationYear
    }
    getStudentCount() 
    {
        let result = 0

        for (let el of this.individualClasses) {
            result += el.students.length;

        }
        return result;
    }
    calculateGradeAverage()
    {
        let result = 0
        for (let el of this.individualClasses) {
            for( let x of el.students)
            {
                result += x.calculateTestAverages();
            }
        }
        return result/this.getStudentCount();
    }
    addIndividualClass(newClass)
    {
        this.individualClasses.push(newClass);
    }
}

module.exports = Grade;