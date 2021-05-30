import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navigation.module.scss'
import { motion } from 'framer-motion'
import ActionItem from './ActionItem'
import { connect } from 'react-redux'

class Navigation extends Component {
    render() {
        return (
            <motion.div 
                exit={{opacity:0}}
                animate={{opacity:1}}
                initial={{opacity:0}}
                ref={this.vantaRef}
                >
                <div 
                    className={classes.navigation}
                >
                    <div className={classes.navigationSet}>
                
                        <div className={classes.item}>
                            <h2 className={classes.title}>Сложение</h2>
                            <ActionItem
                                optionNum = 'A + A'
                                action = {0}
                                onActionClick ={this.props.onChangeState}
                                />
                            <ActionItem
                                optionNum = 'AA + A'
                                action = {1}
                                onActionClick ={this.props.onChangeState}
                                />
                            <ActionItem
                                optionNum = 'AA + AA'
                                action = {2}
                                onActionClick ={this.props.onChangeState}
                                />
                        </div>

                        <div className={classes.item}>
                            <h2 className={classes.title}>Вычитание</h2>
                            <ActionItem
                                action = {3}
                                optionNum = 'A - A'
                                onActionClick ={this.changeState}
                                />
                                <ActionItem
                                action = {4}
                                optionNum = 'AA - A'
                                onActionClick ={this.changeState}
                                />
                                <ActionItem
                                action = {5}
                                optionNum = 'AA - AA'
                                onActionClick ={this.changeState}
                                />
                        </div>

                        <div className={classes.item}>
                            <h2 className={classes.title}>Умножение</h2>
                            <ActionItem
                                action = {6}
                                optionNum = 'A x A'
                                onActionClick ={this.changeState}
                                />
                                <ActionItem
                                action = {7}
                                optionNum = 'AA x A'
                                onActionClick ={this.changeState}
                                />
                                <ActionItem
                                action = {8}
                                optionNum = 'AA x AA'
                                onActionClick ={this.changeState}
                                />
                        </div>

                        <div className={classes.item}>
                            <h2 className={classes.title}>Деление</h2>
                            <ActionItem
                                action = {9}
                                optionNum = 'A / A'
                                onActionClick ={this.changeState}
                                />
                                <ActionItem
                                action = {10}
                                optionNum = 'AA / A'
                                onActionClick ={this.changeState}
                                />
                                <ActionItem
                                action = {11}
                                optionNum = 'AA / AA'
                                onActionClick ={this.changeState}
                                />
                        </div>
        
                    </div>

                    <div className={classes.navigationRight}>
                        <p className={classes.navigationRight_text}>
                            Здесь необходимо выбрать количество примеров, которое Вы хотите решить, а также их тип.
                            Типы примеров представлены схематично и указывают на<strong> количество десятков в цифрах. </strong> Например
                            ( АА+A может быть 34+9 соотвественно ).
                        </p>
                        <span className={classes.navigationRight_autor}>"Математику уже затем учить надо, что она ум в порядок приводит."<br></br>(М.В. Ломоносов)</span>
                        
        
                            <NavLink 
                                className={classes.btnT} 
                                to='/navigation/training'
                                >
                                Решать примеры
                            </NavLink>
                    </div>
                </div>
            </motion.div>
        )
    }  
}

function mapStateToProp(state) {
    return {
        counter: state.counter,
        quiz: state.quiz,
        amounts: state.setActions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeState: (num, i) => dispatch({type: 'CHANGE', number: num, index: i}),
        onGenerateList: () => dispatch({type: 'GENERATE'})
    }
}


export default connect(mapStateToProp, mapDispatchToProps)(Navigation)
