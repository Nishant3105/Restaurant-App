import React, {useContext} from 'react'
import Card from '../../UI/Card'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../Store/CartContext'

const MealItemForm = (props) => {
  const cartCtx=useContext(CartContext)
  const addNewItem=(e)=>{
    e.preventDefault()
    // console.log('clicked')
    const quantity=document.getElementById('amount_'+props.id).value
    // console.log(quantity)
    cartCtx.addItem({...props.items, quantity:quantity}) 
    console.log('mealitem',cartCtx)
  }
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
        <button onClick={addNewItem}>+ Add</button>
        </form>
    </Card>
  )
}

export default MealItemForm