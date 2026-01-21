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



