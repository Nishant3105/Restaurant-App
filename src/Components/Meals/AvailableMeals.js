import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const meals = [
    {
        id: "m1",
        name: "Spaghetti Carbonara",
        price: 12.99,
        description: "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper."
    },
    {
        id: "m2",
        name: "Chicken Parmesan",
        price: 15.99,
        description: "Breaded chicken breast topped with marinara sauce and melted mozzarella cheese."
    },
    {
        id: "m3",
        name: "Caesar Salad",
        price: 8.99,
        description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing."
    },
    {
        id: "m4",
        name: "New York Cheesecake",
        price: 6.99,
        description: "Creamy cheesecake with a graham cracker crust, topped with whipped cream."
    },
    {
        id: "m5",
        name: "Margherita Pizza",
        price: 11.99,
        description: "Traditional Italian pizza with tomato sauce, fresh mozzarella, and basil."
    },
    {
        id: "m6",
        name: "Beef Tacos",
        price: 9.99,
        description: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa."
    },
    {
        id: "m7",
        name: "Grilled Salmon",
        price: 16.99,
        description: "Fresh salmon fillet grilled to perfection, served with lemon and dill sauce."
    },
    {
        id: "m8",
        name: "Chocolate Brownie Sundae",
        price: 7.99,
        description: "Warm chocolate brownie topped with vanilla ice cream, chocolate syrup, and whipped cream."
    }
];

const AvailableMeals = () => {
    const mealList = meals.map((meal) => {
        return (
            <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )
    })

    return (
        <section className={classes.meals}>
            <ul>
                {mealList}
            </ul>
        </section>
    )
}

export default AvailableMeals