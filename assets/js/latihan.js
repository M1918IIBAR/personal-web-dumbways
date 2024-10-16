// variables

// string -> "" or '' or ``
// number -> 1, 2, 3 ...

// boolean -> true or false

// const islampOn = false // or true

// object -> key and value  (define multiple values for a key inside {})

// const student = {
//     name: "john doe",
//     age: 18,
//     address: "new york",
// };

// array -> data set (group of data)

// const student1 = {
//     name: "john doe",
//     age: 18,
//     address: "new york",
// }

// const student2 = {
//     name: "jane doe",
//     age: 16,
//     address: "manhattan",
// }

// const student3 = {
//     name: "mike miller",
//     age: 20,
//     address: "upper east side",
// }

// const number = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9]
// const students = ["john doe", "jane doe", "mike miller"]
// const student = [student1, student2, student3]

// condition -> check condition of variable

// const isloud = false

// if(isloud == true) {
//     console.log("Its Loud in here")
// } else {
//     console.log("Its quiet here")
// }

const nilai1 = 60
const nilai2 = 70
const nilai3 = 90

const nilailulus = 70

const nilai = [nila1, nilai2, nilai3]

let nomor = 0

for (nomor < 3; nomor++;) {
    if(nilai[nomor] >= nilailulus) {
    console.log("lulus!")
    } else {
    console.log("tidal lulus")
    }
}

//looping
//for loop -> know the limit

// for (let index = 0; index < 100; index++) {
//     if (index % 2 == 1) {
//         console.log(index)
//     }
// }

//function

function makeCoffee() {
    console.log("we want to make coffee")
    boilwater()
    putcoffee()
    pourwater()
}

function boilwater() {
    console.log("boil water")
}

function putcoffee() {
    console.log("put the coffee into the glass")
}

function pourwater() {
    console.log("pour hot water into the glass")
}

makeCoffee()

// console.log(var) for output in terminal
