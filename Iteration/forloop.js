// for Loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
       // console.log("5 is favourite number")
    }
   // console.log(element);
}

// console.log(element); cannot access from outside

for (i = 1; i < 10; i++) {
   // console.log(`outer loop : ${i}`);
    for ( j = 1; j < 10; j++){
        //console.log(`inner loop ${j} and inner loop ${i} `);
       // console.log(i + '*' + j + ' = ' + i*j);
    }  
}

let myArray = [ "apple" , "banana" , "peach"]
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 Detected`);
//         break
//     }
//     console.log(`value of i is  ${i}`);
// }
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 Detected`);
        continue
    }
    console.log(`value of i is  ${i}`);
}
