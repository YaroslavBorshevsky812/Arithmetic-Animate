import React, { useState, useEffect, useRef } from 'react'
import MainButt from '../mainBtn/MainBtn'
import classes from './MainWindow.module.scss'
import ModalWin from '../modalWindow/ModalWindow'
import green from '../../../images/green.png'
import { motion } from 'framer-motion'
import Training from '../../training/Training'
import { connect } from 'react-redux'

const MainWindow = (props) => {

      

    const [isRight, setIsRight] = useState(false)
    const [isFalse, setIsFalse] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const [answer, setModalAnswer] = useState(' ')
    const [isFinished, setIsFinished] = useState(false)
    const [btnsModal] = useState([
        {value: '7'},
        {value: '8'},
        {value: '9'},
        {value: '4'},
        {value: '5'},
        {value: '6'},
        {value: '1'},
        {value: '2'},
        {value: '3'},
        {value: 'del'},
        {value: '0'},
        {value: '.'},
    ])

    let arrayOfActions = Object.values(props.amounts)
    let arrayOfInstances = []

    function rand(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }

    function createItem(){
        arrayOfActions.filter(item => item.amount !== 0)
                .map((item) => {
                    let counter = 0
                    switch(item.action) {

                    // Addition methods. i'm sorry

                        case 'A + A':
                            while(counter < item.amount) {
                                let first = rand(2, 10)
                                let second = rand(2, 10) 
                                let answer = first + second
                                const quiz = { 
                                    first: first,
                                    second: second,
                                    answer:  answer,
                                    action: '+', 
                                    isRight: null 
                                }
                                    arrayOfInstances.push(quiz)
                                    counter++
                            }
                                break
                        case 'AA + A':
                            while(counter < item.amount) {
                                let first = rand(11, 100)
                                let second = rand(2, 10) 
                                let answer = first + second
                                const quiz = { 
                                    first: first,
                                    second: second,
                                    answer:  answer,
                                    action: '+', 
                                    isRight: null 
                                }
                                    arrayOfInstances.push(quiz)
                                    counter++
                            }
                                break
                        case 'AA + AA':
                            while(counter < item.amount) {
                                let first = rand(12, 100)
                                let second = rand(12, 100) 
                                let answer = first + second
                                const quiz = { 
                                    first: first,
                                    second: second,
                                    answer:  answer,
                                    action: '+', 
                                    isRight: null 
                                }
                                    arrayOfInstances.push(quiz)
                                    counter++
                            }
                                break
                        // Addition ...\\\

                        // Subtraction
                        case 'A - A':
                            while(counter < item.amount) {
                                let first = rand(2, 10)
                                let second = rand(2, 10) 
                                let answer = first - second
                                if(answer > 0) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: '-', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                        break

                        case 'AA - A':
                            while(counter < item.amount) {
                                let first = rand(12, 100)
                                let second = rand(2, 10) 
                                let answer = first - second
                                if(answer > 0) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: '-', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                                break

                        case 'AA - AA':
                            while(counter < item.amount) {
                                let first = rand(12, 100)
                                let second = rand(12, 100) 
                                let answer = first - second
                                if(answer > 0) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: '-', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                                break
                        // Subtraction \\\\

                        // Multiplication

                        case 'A x A':
                            while(counter < item.amount) {
                                let first = rand(2, 9)
                                let second = rand(2, 9) 
                                let answer = first * second
                                if(Number.isInteger(answer)) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: 'x', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                                break 
                            
                        case 'AA x A':
                            while(counter < item.amount) {
                                let first = rand(12, 100)
                                let second = rand(2, 9) 
                                let answer = first * second
                                if(Number.isInteger(answer)) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: 'x', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                                break 

                        case 'AA x AA':
                            while(counter < item.amount) {
                                let first = rand(10, 100)
                                let second = rand(10, 100) 
                                let answer = first * second
                                if(Number.isInteger(answer)) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: 'x', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                                break
                        
                        // Multiplication \\\

                        // Division

                        case 'A / A':
                            while(counter < item.amount) {
                                let first = rand(1, 10)
                                let second = rand(1, 10) 
                                let answer = first / second
                                if(answer > 0 && Number.isInteger(answer)) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: '/', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                                break

                        case 'AA / A':
                            while(counter < item.amount) {
                                let first = rand(10, 100)
                                let second = rand(2, 9) 
                                let answer = first / second
                                if(answer > 0 && Number.isInteger(answer)) {

                                    const quiz = { 
                                        first: first,
                                        second: second,
                                        answer:  answer,
                                        action: '/', 
                                        isRight: null
                                }
                                arrayOfInstances.push(quiz)
                                counter++
                                }   
                            }
                                break

                            case 'AA / AA':
                                while(counter < item.amount) {
                                    let first = rand(10, 100)
                                    let second = rand(10, 100) 
                                    let answer = first / second
                                    if(answer > 0 && Number.isInteger(answer)) {
    
                                        const quiz = { 
                                            first: first,
                                            second: second,
                                            answer:  answer,
                                            action: '/', 
                                            isRight: null
                                    }
                                    arrayOfInstances.push(quiz)
                                    counter++
                                    }   
                                }
                                    break

                        // Division \\\

                        }    
                })
            return arrayOfInstances
    }

    const [instances] = useState(createItem())
    const [activeQuiz, setActiveQuiz] = useState(0)


    function renderQuiz() {
        if(instances.length === 0) {
            return (
                <div></div>
            )
        } else {
            return (
                <span className={classes.spanQuiz}>
                    <h5 className={classes.spanQuiz_item}>{instances[activeQuiz].first}</h5>
                    <h5 className={classes.spanQuiz_item}>{instances[activeQuiz].action}</h5>
                    <h5 className={classes.spanQuiz_item}>{instances[activeQuiz].second}</h5>
                    <h5 className={classes.spanQuiz_item}>{'='}</h5>
                </span>
            )
        }
    }

    function resetBtnHendler() {
        if(activeQuiz === instances.length - 1) {
            setActiveQuiz(activeQuiz)
            ckeckAnswer()
            setIsFinished(true)
        } else {
            setTimeout( () => {
                setIsFalse(false)
                setIsRight(false)
            }, 2000)
            
            ckeckAnswer()
            setActiveQuiz(activeQuiz + 1)
            
            setModalAnswer(' ')
        }
    }

    function ckeckAnswer() {
        if(activeQuiz === instances.length) {
            return
        } else {
            if(instances[activeQuiz].answer === parseInt(answer)) {
                instances[activeQuiz].isRight = true
                setIsRight(true)

            } else {
                instances[activeQuiz].isRight = false
                setIsFalse(true)
            }
        }
        if(activeQuiz === instances.length - 1) {
            setIsFinished(true)
        }
}



    

    function showList() {
        setIsFinished(!isFinished)
    }

    let modalHendler = () => {
        setModalActive(!modalActive)
    }

    let modalBtnsHendler = (btnValue) => {
        if(btnValue === 'del') {
            setModalAnswer(answer.substr(0, answer.length - 1))    
        } else 
        setModalAnswer(answer + btnValue) 
    }

    function handleChange(event) {
        setModalAnswer(event.target.value)   
     }
         
    const outputClasses = [classes.output]

        if(isRight === true) {
            outputClasses.push(classes['win'])
        } else {
            if(isFalse === true) {
                outputClasses.push(classes['lose'])
            }
        }
        
        return (
            <motion.div
                exit={{opacity:0}}
                animate={{opacity:1}}
                initial={{opacity:0}}
            >
                <div className={classes['mainWindow']}>
                    <div className={classes['mainWindow_inner']}>
                    <Training
                        arrayOfInstances={instances}
                        activeModal={isFinished}
                        />
                    
                        <div className={outputClasses.join(' ')}>
                            <div className={classes['output_line']}>
                                <div data-output className={classes['output_line-text']}>
                                    {renderQuiz()}
                                </div>
                                <input 
                                    className={classes['inform']} 
                                    type={classes['text']} 
                                    value={answer} 
                                    onChange={handleChange.bind(this)}
                                />
                            </div>
                            <div className={classes['output-point']}>
                                <img className={classes['output-point-pic']} src={green} alt=""/>
                            </div>
                        </div>
                    
                    <div className={classes.btns}>
                        <MainButt ResetClick={resetBtnHendler} name="Далее"/>
                        <MainButt ResetClick={ckeckAnswer} name="Проверить"/>
                        
                    </div>
                    <span className={classes.showListBtn} onClick={showList}>Показать список</span>
                    
                    <ModalWin
                        active={modalActive}
                        btns={btnsModal}
                        modalBtn={modalHendler}
                        modalBtns={modalBtnsHendler}
                    />


                    </div>
                </div>
            </motion.div>
        )
    }
    

function mapStateToProp(state) {
    return {
        amounts: state.setActions
    }
}

export default connect(mapStateToProp)(MainWindow)
