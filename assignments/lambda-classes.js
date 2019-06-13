// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name
        this.age = props.age
        this.location = props.location
    }
    speak() {
       return `Hello my name is ${this.name}, I am from ${this.location} `
    }
}
// Instructor Class
class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty
        this.favLanguage = props.favLanguage
        this.catchPhrase = props.catchPhrase
    }
    demo(subject) {
       return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
       return `${student.name} receives a perfect score on ${subject}`
    }
}

// Student Class
class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground
        this.className = props.className
        this.favSubjects = props.favSubjects
    }
    listSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
       return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
       return `${this.name} has begun sprint challenge on ${subject}`
    }
}

//Project Managers Class
class ProjectManagers extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName
        this.favInstructor = props.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//Instructors
const dan = new Instructor({
    name: 'Dan',
    location: 'Lambda School',
    age: 55,
    favLanguage: 'JavaScript',
    specialty: 'Open-Source',
    catchPhrase: 'Google it!',
});

const ryan = new Instructor({
    name: 'Ryan',
    location: 'Lambda School',
    age: 33,
    favLanguage: 'Visual Basic',
    specialty: 'Full-Stack',
    catchPhrase: 'It is easy, just do it!',
});


//Students
const tommy = new Student({
    name: 'Tommy',
    age: 36,
    location: 'California',
    previousBackground: 'Network Administrator',
    className: 'WEB21',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],

});

const jane = new Student({
    name: 'Jane',
    age: 21,
    location: 'Lambda School',
    previousBackground: 'Playing Video Games',
    className: 'WEB21',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
});


//Project Managers 
const henry = new ProjectManagers({
    name: 'Henry',
    location: 'Lambda School',
    age: 28,
    favLanguage: 'Pascal',
    specialty: 'Full-Stack',
    catchPhrase: 'This way is easier',
    gradClassName: 'WEB18',
    favInstructor: 'Dan',
});

const john = new ProjectManagers({
    name: 'John',
    location: 'Lambda School',
    age: 33,
    favLanguage: 'Python',
    specialty: 'Full-Stack',
    catchPhrase: 'This way is more complicated',
    gradClassName: 'WEB16',
    favInstructor: 'Ryan',
});


//Console Log Tests. 
console.log(tommy.speak); 