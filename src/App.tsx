import React, { useState } from 'react';
import './App.scss';
import { InputDataForm } from "./components/InputDataForm/InputDataForm";
import { InputData } from './interfases';
import Result from './components/Result/Result';
import { calculateResult } from './helpers/calculateHelper';

const App = () => {

    const [state, setState] = useState({
        variables: {
            varA: false,
            varB: false,
            varC: false,
            expressionType: 'base'
        },
        result: {
            calculateResult: 0,
            error: ''
        },
    });

    const handleSubmit = (data: InputData): void => {
        const result = calculateResult(data);
        setState({ variables: data, result: result });
    }

    return (
        <div className="App">
            <div className='container'>
                <InputDataForm
                    inputData={state.variables as InputData}
                    onSubmit={handleSubmit}
                />
                <Result result={state.result} />
            </div>
        </div>
    );
}

export default App;
