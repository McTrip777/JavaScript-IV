// CODE here for your Lambda Classes

// ------------PERSON-----------------
//Person receives `name` `age` `location` `gender` all as props
//Person receives `speak` as a method.
//* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person{
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    };
};
// ------------Instructor-----------------
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    };
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };
}






// ------------Student-----------------
// * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Person{
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(){
       console.log(`${this.favSubjects}`);
    };
    PRAssignment(student, subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

// ------------PM-----------------
// * `gradClassName`: i.e. CS1
// * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
// * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
class PM extends Instructor{
    constructor(pmAttr){
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    };
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

