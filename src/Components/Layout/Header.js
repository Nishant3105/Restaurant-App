import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
import mealsPic from '../../assests/meals.jpg'


const Header = (props) => {

  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onClick}/>
        </header>
        <div className={classes['main-image']}>
          <img src={mealsPic} alt="background_image"></img>
        </div>

    </React.Fragment>
  )
}

export default Header