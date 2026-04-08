// reduce


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// }, 0 )

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 1499
    },
    {
        itemName: "Web Dev Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 8999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(totalPrice);
