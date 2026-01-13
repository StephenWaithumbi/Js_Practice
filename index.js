//functions

const person = {
    fname: 'emily',
    lname: 'wairimu',
    fullName: function (){
        return this.fname + ' '+ this.lname
    }
}

let name = person.fullName()

console.log(name)