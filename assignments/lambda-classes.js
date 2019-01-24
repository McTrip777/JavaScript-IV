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
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

const eren = new Person({
    name: 'Eren',
    age:20,
    location: 'Wall Maria',
    gender: 'M',
});
const mikasa = new Person({
    name: 'Mikasa',
    age: 21,
    location: 'Wall Sina',
    gender: 'F',
});

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
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    };
}
const armin = new Instructor({
    name: 'Armin',
    age:19,
    location: 'Wall Maria',
    gender: 'M',
    specialty: 'Critical Thinking',
    favLanguage: 'Japanese', 
    catchPhrase: 'I have a plan',
});
const sasha = new Instructor({
    name: 'Sasha',
    age: 24,
    location: 'Wall Sina',
    gender: 'F',
    specialty: 'Eating',
    favLanguage: 'English', 
    catchPhrase: 'Are you going to finish that?',
});

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
        return `${this.name} announces to ${channel}, @channel stand times!​​​​​`;
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
const annie = new PM({
    name: 'Annie',
    age: 23,
    location: 'Wall Sina',
    gender: 'F',
    specialty: 'Hand to hand combat',
    favLanguage: 'Japanese', 
    catchPhrase: 'I dont care',
    gradClassName: 'Mistery',
    favInstructor: 'Kieth Sadies',
});
const historia = new PM({
    name: 'Historia',
    age: 18,
    location: 'Wall Sina',
    gender: 'F',
    specialty: 'Compassion',
    favLanguage: 'English', 
    catchPhrase: 'Are you alright?',
    gradClassName: 'Royalty',
    favInstructor: 'Hange Zoe',
});

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
       return `${this.favSubjects}`;
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}
const erwin = new Student({
    name: 'Erwin',
    age:40,
    location: 'Wall Sina',
    gender: 'M',
    previousBackground: 'Teacher',
    className: 'Scouts',
    favSubjects: ['Nape Disecting', 'Titan behavior', 'Menuever gear']
});
const levi = new Student({
    name: 'Levi',
    age: 28,
    location: 'Wall Maria',
    gender: 'M',
    previousBackground: 'troops',
    className: 'Survey Corps',
    favSubjects: ['None']
});

//Person
console.log(eren);
console.log(mikasa);
console.log(mikasa.speak());
console.log(eren.speak());
//Instructor
console.log(armin);
console.log(sasha);
console.log(armin.demo('Attack on Titan'));
console.log(sasha.grade(levi,'Killing Titans'));
//PM
console.log(annie);
console.log(historia);
console.log(annie.standUp('Defence'));
console.log(historia.debugsCode(erwin, 'Survival'));
//Student
console.log(erwin);
console.log(levi);
console.log(erwin.listsSubjects());
console.log(levi.PRAssignment('Wall Scaling'));
console.log(erwin.sprintChallenge('Survival'));
