//object related

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descriptor);

// console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);

const Tea = {
    name:"Green Tea",
    price: 300,
    IsAvailable:true,

    OrderTea : function(){
        console.log("Tea is not ready");
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(Tea , "name"));

Object.defineProperty(Tea , "name" ,{
    writable:false,
    enumerable:true
})

// console.log(Object.getOwnPropertyDescriptor(Tea , "name"));

for (const [key , value] of Object.entries(Tea)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    
}
