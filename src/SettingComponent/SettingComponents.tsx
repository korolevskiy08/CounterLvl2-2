import React, {ChangeEvent, useState} from 'react';
import classes from "../SettingComponent/SettingsComponent.module.css";
import {ButtonComponents} from "../ButtonComponents/ButtonComponents";

type SettingComponents = {
    startValue: number
    maxValue: number
    onEditMode: () => void
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
}

export const SettingComponents = ({onEditMode, setMaxValue, setStartValue, maxValue, startValue}: SettingComponents) => {

    const [error, setError] = useState<string | null>()

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const changeMaxValue = Number(e.currentTarget.value)
        if (changeMaxValue >= 0){
            setMaxValue(Number(changeMaxValue))
            setError(null)
        } else if (changeMaxValue < 0) {
            setError('Start value must be greater than 0')
        }
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const changeStartValue = Number(e.currentTarget.value)
        if (changeStartValue >= 0){
            setStartValue(changeStartValue)
            setError(null)
        } else if (changeStartValue < 0) {
            setError('Start value must be greater than 0')
        }
    }


    return (
        <div className={classes.counterWrapper}>
            <div className={classes.counter}>
                <span>max:</span><input value={maxValue} onChange={onChangeMaxValue} type={'number'}/>
                <span>start:</span> <input value={startValue} onChange={onChangeStartValue} type={'number'}/>
                <span className={error ? classes.error : ''}>{error}</span>
            </div>
            <div className={classes.buttonBlock}>
                <ButtonComponents title={'Let\'s go'} callback={onEditMode}/>
            </div>
        </div>
    );
};
