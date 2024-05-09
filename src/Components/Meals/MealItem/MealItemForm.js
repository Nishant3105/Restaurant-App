import React from 'react'
import Card from '../../UI/Card'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  return (
    <Card>
        <form className={classes.form}>
        <Input
            label='Amount'
            input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
            }}
        />
        <button>+ Add</button>
        </form>
    </Card>
  )
}

export default MealItemForm