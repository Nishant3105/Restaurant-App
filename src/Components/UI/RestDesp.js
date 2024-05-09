import React from 'react'
import ReactDOM from 'react-dom'

const DescriptionModal = () => {
    return (
        <div>
            <h1>Delicious Food, Delivered To You</h1>
            <p> Located in the heart of the city, our restaurant offers a culinary experience like no other.
                With a focus on locally sourced ingredients and innovative dishes, we strive to delight
                every palate. Our menu features a diverse selection of appetizers, entrees, and desserts,
                all crafted with care by our talented chefs. Whether you're craving a classic favorite or
                eager to explore new flavors, our menu has something for everyone. Pair your meal with a
                selection from our extensive wine list or choose a craft cocktail from our bar. Our warm
                and inviting atmosphere provides the perfect backdrop for a memorable dining experience,
                whether you're enjoying a romantic dinner for two or celebrating a special occasion with
                friends and family.
            </p>
        </div>
    )
}

const RestDesp = () => {
    return (
        <>
          { ReactDOM.createPortal(<DescriptionModal/>, document.getElementById('restaurantdesp-root')) }
        </>
    )
}

export default RestDesp