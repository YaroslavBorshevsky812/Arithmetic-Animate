import React from 'react'
import classes from './Training.module.scss'


const Training = (props) => {
    const testBoxClasses = [classes.testBox]
    function showList() {
    
        return props.arrayOfInstances.map((item, index) => {
            const instanceItemClasses = [classes.instanceItem]
            switch(item.isRight) {
                case true:
                    instanceItemClasses.push(classes['true'])
                    console.log(item)
                case false:
                    instanceItemClasses.push(classes['false'])
            }

            return (
                <div
                    className={instanceItemClasses.join(' ')}
                    key={index}
                >
                        <div className={classes.instanceItem_index}>{index + 1}.</div>
                        <div>&nbsp;{item.first}&nbsp;</div>
                        <div>&nbsp;{item.operation}&nbsp;</div>
                        <div>&nbsp;{item.second}&nbsp;</div>
                        <div>&nbsp;{'='}&nbsp;</div>
                        <div>&nbsp;{item.answer}&nbsp;</div>

                </div>
            )
        })
    }

    if(props.activeModal === true) {
        testBoxClasses.push(classes['active'])
    }

    return (
            <div className={testBoxClasses.join(' ')}>
                <div className={classes.testBox_inner}>
                    <h4 className={classes.title}>Результаты</h4>
                    {showList()}
                </div>
            </div>
    )
}

export default React.memo(Training)
