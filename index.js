//functions

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

//call method

