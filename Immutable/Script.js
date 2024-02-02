const Id = 1;
const Name = "Abhiyan";
const Age = 22;
const Course = "BCA";

class Student {
    constructor(Id, Name, Age, Course) {
        this.Id = Id;
        this.Name = Name;
        this.Age = Age;
        this.Course = Course;
    }

    studentDetails() {
        console.log(`Id: ${this.Id}`);
        console.log(`Name: ${this.Name}`);
        console.log(`Age: ${this.Age}`);
        console.log(`Course: ${this.Course}`);
    }
}

function main() {
    const mystudent = new Student(Id, Name, Age, Course);

    mystudent.studentDetails();
}

main();
