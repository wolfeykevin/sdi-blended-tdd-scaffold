
class Student {
    constructor(name, age, gradeLevel, testScores = [], graduationYear, activities = [])
    {
      if(!(typeof name === "string")) throw new TypeError('name must be a string');
      if(!(typeof age === "number")) throw new TypeError('subject taught must be a string');
      if(!(typeof gradeLevel === "number")) throw new TypeError('university attended must be a string');
      if(!(typeof graduationYear  === "number")) throw new TypeError('years taught must be a number');
      if(!(Array.isArray(activities))) throw new TypeError('activities must be an array');
      if(!(Array.isArray(testScores))) throw new TypeError('testScore must be an array');
    // TODO - ensure data inside array is correct
    // activities.forEach((el)=>{
    //     if(!(typeof el === 'string'))
    //     {
    //         throw new TypeError('each activiity must be a string');
    //     }
    // })

        this.name = name;
        this.age = age;
        this.gradeLevel = gradeLevel;
        this.testScores = testScores;
        this.graduationYear = graduationYear;
        this.activities = activities;
    }
    updateStudentName (newName) {
        this.name = newName;
    }
    incrementAge(){
        this.age++;
    }
    incrementGradeLevel(){
        this.gradeLevel++;
    }
    addTestScore(score){
        this.testScores.push(score);
    }
    calculateTestAverages(){
        let result = this.testScores.reduce((prev, curr) =>{
            return prev + curr;
        });
        return result/this.testScores.length;
    }
    changeGraduationYear(newYear){
        this.graduationYear = newYear;
    }
    addActivity(newActivity){
        this.activities.push(newActivity);
    }
    removeActivity(oldActivity){
       this.activities = this.activities.filter((el) => {
            return el !== oldActivity
        })
    }
}

module.exports = Student;