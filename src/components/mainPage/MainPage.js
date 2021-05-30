import React from 'react'
import classes from './MainPage.module.scss'
import {NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'

class MainPage extends React.Component {

    render() {
        return (
            <motion.div 
                
                exit={{opacity:0}}
                animate={{opacity:1}}
                initial={{opacity:0}}
                ref={this.vantaRef}
            >
                <div 
                    className={classes.MainPage}
                >
                  <div className={classes.container}>
                    <h1 className={classes.MainPage_title}>Добро пожаловать</h1>
                        <NavLink 
                            className={classes.btn} 
                            to='/navigation'
                            >
                            Выбрать примеры
                        </NavLink>
                  </div>
                </div>
            </motion.div>
        )
    }
    
}

export default MainPage