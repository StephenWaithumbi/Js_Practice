// getters

const person = {
    fname: 'jane',
    lname: 'shii',
    age: 22,
    get fullName(){
        return this.fname + " "+ this.lname
    }
}

console.log(person.fullName)

//object protection

const person1 = {fname: 'joe', lname:'paul'}

Object.preventExtensions(person1)
person1.nationality='en'

console.log(person1)


console.log('Wasted day')



