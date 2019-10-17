// Fizz buzz
// The Problem:
// Write a program that prints the numbers from 1 to 100.
// For multiples of three print “Fizz” instead of the number
// For the multiples of five print “Buzz” instead of the number
// For numbers which are multiples of both three and five print    “FizzBuzz”

// for (var i = 1; i <= 100; i++) {
//   if ( i % 3 === 0 && i % 5 === 0 ) {
//     console.log('FizzBuzz');
//   }
//   else if ( i % 3 === 0 ) {
//     console.log('Fizz');
//   }
//   else if ( i % 5 === 0 ) {
//     console.log('Buzz');
//   }
//   else {
//     console.log(i);
//   }
//  }

for (var i = 1; i <= 100; i++) {
  let result = "";

  i % 3 === 0 ? (result += "Fizz") : "";
  i % 5 === 0 ? (result += "Buzz") : "";

  console.log(result || i);
}

// for (var i = 1; i < 101; i++) {
//   if (i % 15 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
