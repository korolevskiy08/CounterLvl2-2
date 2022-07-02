import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterComponent} from "./CounterComponents/CounterComponent";
import {SettingComponents} from "./SettingComponent/SettingComponents";

function App() {

    const getMaxValue = Number(localStorage.getItem('maxValue'))
    const getStartValue = Number(localStorage.getItem('startValue'))

    let [counter, setCounter] = useState(getStartValue)
    const [editMode, setEditMode] = useState(true)
    const [maxValue, setMaxValue] = useState(getMaxValue)
    const [startValue, setStartValue] = useState(getStartValue)

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setCounter(startValue)
    }, [startValue, maxValue])

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => setEditMode(false)
    const incCounterValue = () => setCounter(++counter)
    const resetCounterValue = () => setCounter(startValue)

    return (
        <div className="App">
            {editMode ?
                <CounterComponent
                    maxValue={maxValue}
                    resetCounterValue={resetCounterValue}
                    incCounterValue={incCounterValue}
                    counter={counter}
                    offEditMode={offEditMode}
                />
                :
                <SettingComponents
                    startValue={startValue}
                    maxValue={maxValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    onEditMode={onEditMode}
                />
            }
        </div>
    );
}

export default App;
