/* 
for a range of numbers (1 .. 100):
    if the number is divisible evenly by:
        3 -> fizz
        5 -> buzz
        3 & 5 -> fizzBuzz
        otherwise -> number
        
       1
       2
       fizz
       4
       buzz
       ..
       14
       fizzBuzz

       1. Bronze if you solve it with a for loop and if statements
       2. Silver if you solve it with a while loop and switch
       3. Gold if you solve it with a for loop and ternaries

        */


// for (let num = 1; num <= 100; num++)
//     console.log(num); {
//         if (num % 3 = 0) {
//     console.log('fizz');
// } else if (num % 5 = 0){
//     console.log('buzz');
// } else if ()


// let Num = 1;

// if (num % 3 = 0) {
//     console.log("fizz");
// }else if (num % 5 = 0){
//     console.log("buzz")
// }else {
//     console.log(num)
// } num++


//1. Bronze if you solve it with a for loop and if statements
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }
    else if(i % 5 === 0){
        console.log("buzz")
    }
    else if(i % 3 === 0){
        console.log("fizz")
    }
    else {
        console.log(i)
    }
}

//2. Silver if you solve it with a while loop and switch
let x = 1
while(x <=100){
    switch (true) {
        case x % 15 === 0:
        console.log("fizzBuzz")
        break;
        case x % 3 === 0:
        console.log("fizz")
        break;
        case x % 5 === 0:
            console.log("buzz")
            break;
            default:
                console.log(x)
    }
    x++
}

//3. Gold if you solve it with a for loop and ternaries


for(let v = 1; v <= 100; v++){
    (v % 15 === 0)
    ? console.log("fizzbuzz")
    : (v % 5 === 0)
    ? console.log("buzz")
    : (v % 3 === 0)
    ? console.log("fizz")
    : console.log(v)
}