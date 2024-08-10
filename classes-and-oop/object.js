// function multiplyby3(num){
//     return num*3
   
// }
// multiplyby3.power =5
// console.log(multiplyby3(3));
// console.log(multiplyby3.power);
// console.log(multiplyby3.prototype);

function Items(item , price){
    this.item = item
    this.price = price
}

Items.prototype.increment = function(){
    this.score++
}
Items.prototype.PrnintMe = function(){
    console.log(`price is ${this.price}`);
    
}

const tea = new Items("tea" , 50)
const coffee = new Items("coffee" , 300)

tea.PrnintMe()
coffee.PrnintMe()