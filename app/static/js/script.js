console.log('Hi!, This is my online shop!')

let tshirt = {
  color: "red with orange dotts",
  price: 25,
  size: 'xl',
  material: `cotton`,
  description: 'T-Shirt'
}

let socks = {
  color: 'blue',
  price: 5,
  size: '39',
  material: 'nylon',
  description: 'Socks'
}

let shorts = {
  color: 'green',
  length: 'short',
  price: 50,
  availabeSizes: ['s', 'm', 'l', 'xl'],
  material: 'jersey',
  description: 'Shorts'
}

let products = [ tshirt, socks, shorts ]

let basket = []


// Functions: 
// define the arrow function: 
const addToBasket = (item) => {
  // here we do something:
  basket.push(item)
}


// function to calculate the sum of our products: 
const calculateSum = (someBasket) => {
  let totalSum = 0
  // look through the basket and caluculate the totalSum by the prize 
  for(product of someBasket ) {
    totalSum = totalSum + product.price
  }
  return totalSum
}

// console.log(window);
console.log(document);

// insert content:

let p = document.createElement('p')
p.innerText = "a basic example of text created and added to the page by JavaScript!"
// pick out the div with the class checkout, and add the p-element we created:
document.querySelector('.checkout').append(p)

// Callback function for Event listner function:
const addToCartOnClick = (event) => {
// find the object that is the item we clicked on: 
  let clickedItem = products.find((item) => {
    return item.description == event.target.id
  })
  // we add the item to the basket array: 
  addToBasket(clickedItem)
  // add the item to the page:
  let listItem = document.createElement('li')
  listItem.innerText = clickedItem.description
  document.querySelector('.listOfItems').append(listItem)
}

// find the buttons: 
let addToCartButtons = document.querySelectorAll('.products .btn')

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => addToCartOnClick(event))
})

// Function to display the sum: 

const displaySum = () => {
let p = document.createElement('p')
let sum = calculateSum(basket)
p.innerText = `Please pay ${sum} Euro.`
// pick out the div with the class checkout, and add the p-element we created:
document.querySelector('.checkout').append(p)
}

// click on the Go to chekout button:
// And dispaly the amount to pay.

let checkoutButton = document.querySelector('.buy')
checkoutButton.addEventListener('click', () => displaySum())