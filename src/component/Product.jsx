import food_01 from "../assets/food_01.jpg"
import food_02 from "../assets/food_02.jpg"
import food_03 from "../assets/food_03.jpg"
import drink_01 from "../assets/drink_01.jpg"


export const Product = [

    {
        id:1,
        imgUrl : food_01,
        type:"Rice",
        name:"Nasi Lemak",
        price:12.00,
        addon:[{name:"Egg",price:5},{name:"Chicken",price:12},{name:"Anchovies",price:70},{name:"Lettuce",price:120}]
        
    },
    {
        id:2,
        imgUrl : drink_01,
        type:"Drink",
        name:"White Coffee",
        price:3.50
    },
    {
        id:3,
        imgUrl : food_03,
        type:"Rice",
        name:"Fried Rice",
        price:7.00,
        addon:[{name:"Egg",price:5},{name:"Chicken",price:12},{name:"Anchovies",price:70},{name:"Lettuce",price:120}]

    },
    {
        id:4,
        imgUrl : food_02,
        type:"Noodle",
        name:"Curry Mee",
        price:8.50,
        addon:[{name:"Egg",price:5},{name:"Chicken",price:12},{name:"Anchovies",price:70}]

    }
]