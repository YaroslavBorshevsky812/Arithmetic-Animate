import React from 'react'
import classes from './MainPage.module.scss'
import {NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'
import BIRDS from 'vanta/dist/vanta.globe.min'

class MainPage extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = BIRDS({
        el: this.vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        color2: 0xd3ff,
        size: 1.50,
        backgroundColor: 0x0
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
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