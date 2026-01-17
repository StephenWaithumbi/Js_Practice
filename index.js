//functions
//call method

const person = {
    fname: 'emily',
    lname: 'wairimu',
    fullName: function (){
        return this.fname + ' '+ this.lname
    }
}

let name = person.fullName()

const person1 = {
    fname: 'Maureen',
    lname: 'Njeri'
}

console.log(person.fullName.call(person1))

//apply method


const dog = {
    fullName: function(){
        return this.fname + " " + this.lname
    }
}

const dog1 = {
    fname: 'bosco',
    lname: 'popi'
}

const dog2 = {
    fname: 'shake',
    lname: 'junior'
}

let dogFullName = dog.fullName.apply(dog2)
console.log(dogFullName)

//bind

const child = {
    fullName: function(){
        return this.fname + ' ' + this.lname
    }
}

const kid1 = {
    fname: 'jose',
    lname: 'konge'
}

const kidFullName = child.fullName.bind(kid1)
console.log(kidFullName())

//rest
//closurer

function myCounter(){
    let counter = 0;
    return function (){
        counter++
        return counter
    }
}

const add = myCounter()

add()

console.log(add())
console.log(add())
console.log(add())
console.log(add())


