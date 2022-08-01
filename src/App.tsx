import React from 'react';
import './App.css';
import {CounterComponent} from "./CounterComponents/CounterComponent";
import {SettingComponents} from "./SettingComponent/SettingComponents";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/Redux-store";
import {editModeAC} from "./redux/counterEditReducer";
import {setCurrentValueAC} from "./redux/settingsReducer";

function App() {

    // const getMaxValue = Number(localStorage.getItem('maxValue'))
    // const getStartValue = Number(localStorage.getItem('startValue'))

    // let [counter, setCounter] = useState(getStartValue)

    const editMode = useSelector<AppRootStateType, boolean>( state => state.counterEditReducer.editMode)
    const maxValue = useSelector<AppRootStateType, number>(state => state.settingsReducer.maxValue)
    const startValue = useSelector<AppRootStateType, number>( state => state.settingsReducer.minValue)
    const counter = useSelector<AppRootStateType, number>( state => state.settingsReducer.currentValue)
    console.log(counter)
    const dispatch = useDispatch()
    // let counter = 0
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    //     setCounter(startValue)
    // }, [startValue, maxValue])

    const onEditMode = () => dispatch(editModeAC(true))
    const offEditMode = () => {
        dispatch(setCurrentValueAC(startValue))
        dispatch(editModeAC(false))

    }

    const incCounterValue = () => dispatch(setCurrentValueAC(counter + 1))

    const resetCounterValue = () => dispatch(setCurrentValueAC(startValue))

    return (
        <div className="App">
            {editMode ?
                <CounterComponent
                    startValue={startValue}
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
                    onEditMode={onEditMode}
                />
            }
        </div>
    );
}

export default App;
