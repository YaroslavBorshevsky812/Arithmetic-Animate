import classes from './ActionItem.module.scss'
import { connect } from 'react-redux'

const Action = props => {

    return(
        <div className={classes.ActionItem}>
            <div className={classes.ActionItem_left}>
                <h5>{props.optionNum}</h5>
            </div>
            <div className={classes.ActionItem_right}>
                <span  onClick={() => props.onAdd(props.action)} className={classes.btn}>+</span>
                <h4 className={classes.num}>{props.amounts[props.action].amount}</h4>
                <span onClick={() => props.onSub(props.action)} className={classes.btn}>-</span>
            </div>
        </div>
    )    
}

function mapStateToProp(state) {
    return {
        counter: state.counter,
        amounts: state.setActions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (i) => dispatch({type: 'ADD', index: i}),
        onSub: (i) => dispatch({type: 'SUB', index: i})
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Action)