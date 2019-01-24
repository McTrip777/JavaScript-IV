// CODE here for your Lambda Classes

// ------------PERSON-----------------
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
    randomGrade(student, currentGrade){
        currentGrade = (currentGrade + (currentGrade*Math.random()-currentGrade) || currentGrade + (-currentGrade*Math.random()+currentGrade));
        return `${student.name}'s grade is now ${currentGrade} `;
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
class Student extends Person{
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    listsSubjects(){
       return `${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}`;
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
    graduate(){
        if (this.grade > 70)
            return `I, ${this.name} have graduated today`;
        else
            return `I, ${this.name} need to work harder`;
    };
}
const erwin = new Student({
    name: 'Erwin',
    age:40,
    location: 'Wall Sina',
    gender: 'M',
    previousBackground: 'Teacher',
    className: 'Scouts',
    favSubjects: ['Nape Disecting', 'Titan behavior', 'Menuever gear'],
    grade: 69,
});
const levi = new Student({
    name: 'Levi',
    age: 28,
    location: 'Wall Maria',
    gender: 'M',
    previousBackground: 'troops',
    className: 'Survey Corps',
    favSubjects: ['None'],
    grades: 100,
});

// ------------Stretch-----------------
                // * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
                // * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
                // * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.

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
console.log(levi.listsSubjects());
console.log(levi.PRAssignment('Wall Scaling'));
console.log(erwin.sprintChallenge('Survival'));
console.log(armin.randomGrade(erwin, erwin.grade));
console.log(erwin.graduate());
