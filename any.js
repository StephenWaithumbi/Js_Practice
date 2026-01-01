// let student = {
//     name: 'Jane',
//     greet: {
//         sayHi: function() {
//             console.log(this.name)
//         }
//     }
// }

// student.greet.sayHi()

let student = {
    name: 'seee you',
    greet: {
        sayHi: function () {
            console.log(student.name);
        }
    }
}

student.greet.sayHi(); // Output: 'seee you'

let nam = "john"
let him = nam.length
