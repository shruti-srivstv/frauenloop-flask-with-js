// in this file we will put all of our JS-code:
console.log('Hi! Welcome to my shop!');


let shirt = {
  color: 'red',
  size: 'm',
  material: 'cotton',
  prize: 10,
  currency: 'euro'
}

console.log(shirt);

// lets add more products:

let socks = {
  color: 'blue',
  size: '39',
  material: 'nylon',
  prize: 4.00,
  currency: 'euro'
}

let shorts = {
  color: 'black',
  size: 'l',
  material: 'jersey',
  prize: 25,
  currency: 'euro'
}

let products = [shirt, socks, shorts]

console.log(products);


let basket = []


const addToBasket = (item) => {
  basket.push(item)
}

addToBasket(socks)
addToBasket(shorts)

console.log(basket);

const checkout = (someBasket) =>{
  let sum = 0
  for( item of someBasket) {
    console.log(item.prize);
    sum = sum + item.prize
  }
  return sum
}

let sumToPay = checkout(basket)

console.log(`Amount to pay ${sumToPay}`);
