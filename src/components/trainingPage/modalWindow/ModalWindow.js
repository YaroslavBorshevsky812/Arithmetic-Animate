import React from 'react'
import classes from './ModalWindow.module.scss'


const ModalWin = (props) => {
    console.log('1');
    const modalClasses = [classes.modal]
    if(props.active) {
        modalClasses.push(classes['active'])
    }
    
    return (
        <div className={ modalClasses.join(' ')}>
                <div className={classes['modal_button']}>
                    <h4 onClick={() =>props.modalBtn()} className={classes['btns_text']}>кнопки</h4>
                </div>
                <div className={classes['gridBtns']}>
                    {props.btns.map((btn) => {
                        return (
                            <button onClick={() => props.modalBtns(btn.value)} key={btn.value}>{btn.value}</button>
                        )
                    })}
                </div>
            </div>
    )
}

export default React.memo(ModalWin)