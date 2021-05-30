import React from 'react'
import classes from './MainBtn.module.scss'

function MainBtn(props) {
    return ( 
        <span onClick={() => props.ResetClick()} className={classes['btn']}>{props.name}</span>
    )
}

export default MainBtn