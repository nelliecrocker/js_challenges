
let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott",
]

// console.log a sub array containing only "J" names

console.log(start.filter(name => name.startsWith('J')))

//Find the average of all the students grades

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade:2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    },
]
//1 way to do it:
let total = 0
for (let student of students){
    console.log(student.grade)
    total += student.grade;
}
let average = total / students.length
console.log(average);
//2nd way to do it:
let total2 =0
students.forEach(s => total2 += s.grade )
let average2 = total2 / students.length
console.log(average2);
//3rd way to do it:
console.log(
    students.reduce((gpa, student) => gpa += student.grade, 0) / students.length
)