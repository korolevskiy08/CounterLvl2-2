import React from "react";
import classes from './Counter.module.css'
import {ButtonComponents} from "../ButtonComponents/ButtonComponents";


type CounterComponentType = {
    startValue: number
    maxValue: number
    counter: number
    incCounterValue: () => void
    resetCounterValue: () => void
    offEditMode: () => void
}

export const CounterComponent = ({counter, incCounterValue, resetCounterValue, offEditMode, maxValue, startValue}:CounterComponentType) => {
    return (
        <div className={classes.counterWrapper}>
            <div className={classes.counter}>
                <div className={maxValue === counter ? classes.errorCounter : classes.counter}>
                    {counter}
                </div>
            </div>
            <div className={classes.buttonBlock}>
                <ButtonComponents title={'Inc'} callback={incCounterValue} disabled={maxValue === counter}/>
                <ButtonComponents title={'Reset'} callback={resetCounterValue}/>
                <ButtonComponents title={'Setting'} callback={offEditMode}/>

            </div>
        </div>

    )
}