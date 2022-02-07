import classes from './ActionItem.module.scss'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ActionItem = ({itemName}) => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const add = () => {
        setCount(count + 1)
        const item = {
            name: itemName,
            count: count
        }
        dispatch({type: 'ADD', payload: item})
    }
    
    const remove = () => {
        const a = count - 1
        setCount(a)
        const item = {
            name: itemName,
            count: a
        }
        dispatch({type: 'SUB', payload: item})
    }

    return(
        <div className={classes.ActionItem}>
            <div className={classes.ActionItem_left}>
                <h5>{itemName}</h5>
            </div>
            
            <div className={classes.ActionItem_right}>
                <span onClick={() => add()} className={classes.btn}>+</span>
                <h4 className={classes.num}>{count}</h4>
                <span onClick={() => remove()} className={classes.btn}>-</span>
            </div>
        </div>   
    )    
}

export default React.memo(ActionItem)



    
