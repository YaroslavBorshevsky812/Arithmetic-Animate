import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MainButt from '../mainBtn/MainBtn'
import classes from './MainWindow.module.scss'
import ModalWin from '../modalWindow/ModalWindow'
import green from '../../../images/green.png'
import { motion } from 'framer-motion'
import Training from '../../training/Training'
import { modalBtns } from '../../../config/examples.json'

const MainWindow = () => {
    const [isRight, setIsRight] = useState(false)
    const [isFalse, setIsFalse] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const [answer, setModalAnswer] = useState(' ')
    const [isFinished, setIsFinished] = useState(false)
    const [btnsModal] = useState(modalBtns)

    const examples = useSelector(state => state.examples)
    const arrayOfExamples = []

    const rand = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const createNum = (numLength) => {
        if(numLength === 1) return  rand(2, 10)
        if(numLength === 2) return  rand(12, 100)
    }

    const renderExamples = () => {
        const examplesList = examples.filter(item => item.count !== 0)

        examplesList.map(item => {
            let numString = item.name
            let arrayOfNumSrtrings = []
            let operationString = numString.replace(/A/gi, '').trim()
            arrayOfNumSrtrings = numString.split(operationString).map(item => item.trim()) 
            let firstNumLength = arrayOfNumSrtrings[0].length
            let secondNumLength = arrayOfNumSrtrings[arrayOfNumSrtrings.length - 1].length

            let counter = 0;
            while(counter < item.count) {
                let firstNum = createNum(firstNumLength, operationString)
                let secondNum = createNum(secondNumLength, operationString)
                let rightAnswer
                if(isNaN(firstNum) || isNaN(secondNum)) return
                    switch(operationString) {
                        case '+':
                           rightAnswer = firstNum + secondNum
                            break
                        case '-':
                           rightAnswer = firstNum - secondNum
                            break   
                        case '/':
                            rightAnswer = firstNum / secondNum
                            break 
                        case 'x':
                            rightAnswer = firstNum * secondNum
                            break
                        default:
                            return 
                    }
                    if(rightAnswer > 0 && Number.isInteger(rightAnswer)) {
                        const example = {
                            first: firstNum,
                            second: secondNum,
                            operation: operationString,
                            answer: rightAnswer
                        }
                        arrayOfExamples.push(example)
                        counter ++
                    }
            }
        })
        return arrayOfExamples
    }

    const [instances] = useState(renderExamples())
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
                    <h5 className={classes.spanQuiz_item}>{instances[activeQuiz].operation}</h5>
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

export default React.memo(MainWindow)
