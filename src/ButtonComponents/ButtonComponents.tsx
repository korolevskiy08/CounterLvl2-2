import React from "react";
import classes from './ButtonComponents.module.css'

type ButtonComponentsType = {
    title: string
    callback: () => void
    disabled?: boolean
}

export const ButtonComponents = ({title, callback, disabled}: ButtonComponentsType) => {

    const onclickHandler = () => {
        callback()
    }

    return (
        <button disabled={disabled} className={classes.buttonStyle} onClick={onclickHandler}>{title}</button>
    )
}