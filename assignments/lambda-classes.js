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