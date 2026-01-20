// objects prototypes

function Person(first,last, age, grade) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.grade = grade
}

const myGirl = new Person('emily', 'wairimu', 19, 'C')

console.log(myGirl)