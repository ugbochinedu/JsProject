class Student{
    constructor (matricNumber, college){
        var _matricNumber = matricNumber;
        this.college = college;

        this.getMatricNumber = ()=> {
            return _matricNumber;
        }
    }

    sayHello(){
        return `Hello from ${this.college}`;
    }
    
    static sayCollege(){
        return `Student with matric number - ${this.matricNumber} is in ${this.college}`;
    }
}

class Native extends Student{
    constructor(matricNumber, college, cohort){
        super(matricNumber, college);
        this.cohort = cohort;
    }
}
// let student1 = new Student("1b1333", "CST")
// console.log(student1.matricNumber)

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.arms = 2;
//   this.legs = 2;
// }

// function Student(name, age, college, matricNumber) {
//   Person.call(this, name, age);
//   this.college = college;
//   this.matricNumber = matricNumber;
// }

// Student.prototype = Object.create(Persons.prototype);
// Student.prototype.constructor = Student;



// Person.prototype.brain = 1;
// Student.prototype.sense = 1;

// let student1 = new Student();
// console.log(student1.sense);
// console.log(student1.brain);
