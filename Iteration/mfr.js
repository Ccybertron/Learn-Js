//const programms = [ "cpp" , "php" , "sql" , "java" , "javascript"]

// const values = programms.forEach((items) =>{
//     console.log(items)
//     return items
// })
// console.log(values)

const myNum = [1,2,3,4,5,6,7,8,9]
// const newNum = myNum.filter((num) => num > 4 )
// const newNum = myNum.filter((num) => {
//   return  num > 4                       //opening scope then u must use return keyword
// } )

//using foreach
// const newNum = []
// myNum.forEach((num)=>{
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);

// const books = [
//     {name :"book1", gener:"fictions", published:2000},
//     {name :"book1", gener:"fictions", published:2000},
//     {name :"book1", gener:"fictions", published:1960},
//     {name :"book1", gener:"fictions", published:1999},
//     {name :"book1", gener:"fictions", published:2015},
//     {name :"book1", gener:"fictions", published:2006},
//     {name :"book1", gener:"fictions", published:1976},
//     {name :"book1", gener:"fictions", published:1988},
// ]

// const usreBooks = books.filter((bk)=> bk.published > 1999)
// console.log(usreBooks)

//usning Map on sam array
// const newNumbers = myNum.map((num)=> num + 2 )

//chaining
// const newNumbers = myNum
//                     .map((num)=> num*10)
//                     .map((num) => num + 1)
//                     .filter((num) => num > 40)
// console.log(newNumbers)

// Reduce method

const mynmbr = [1,2,3]
// const myTotal = mynmbr.reduce(function(acc , currval) {
//     console.log(`acc: ${acc} and curval: ${currval}`)
//     return acc + currval
// }, 0)

// const myTotal = mynmbr.reduce((acc , curr)=> acc + curr , 0)
// console.log(myTotal);


const shopingCart = [
    {
        itemName:"js course",
        price:2999,
    },
    {
        itemName:"python",
        price:4999,
    },
    {
        itemName:"java",
        price:3999,
    }
]
const TotalPrice = shopingCart.reduce((acc , items) => acc + items.price,0)
console.log(TotalPrice);
