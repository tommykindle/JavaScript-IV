// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name
        this.age = props.age
        this.location = props.location
    }
    speak() {
        `Hello my name is ${this.name}, I am from ${this.location} `
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty
        this.favLanguage = props.favLanguage
        this.catchPhrase = props.catchPhrase
    }
    demo(subject) {
        `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        `${student.name} receives a perfect score on ${subject}`
    }
}


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
        `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        `${this.name} has begun sprint challenge on ${subject}`
    }
}

