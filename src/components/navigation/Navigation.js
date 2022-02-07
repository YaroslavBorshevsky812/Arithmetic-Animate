import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navigation.module.scss'
import { motion } from 'framer-motion'
import ActionItem from './ActionItem'
import { exampleArray } from '../../config/examples.json'

const Navigation = () => {
    const [exampleStrings] = useState(exampleArray)

    return (
        <motion.div 
            exit={{opacity:0}}
            animate={{opacity:1}}
            initial={{opacity:0}}
        >
        
        <div className={classes.navigation}>
            <div className={classes.navigation_wrapper}>
            <div className={classes.navigation_inner}>
                <div className={classes.navigationSet}>
                
                    {exampleStrings.map((item, index) => (
                        <div key={index} className={classes.item}>
                        <h2 className={classes.title}>{item.title}</h2>
                            {item.arrayOfStrings.map((item, index) => (
                                 <ActionItem
                                    key={index}
                                    itemName={item}
                                />
                            ))}
                        </div>
                    ))}

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
            </div>
        </div> 
            
        </motion.div>
    )
}

export default Navigation
