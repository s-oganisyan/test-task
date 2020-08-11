import React, { useState } from 'react';
import { InputData } from '../../interfases';
import './InputDataForm.scss';

interface IProps {
  inputData: InputDataq;
  onSubmit(v: any): void;
}
export interface InputDataq {
  varA: boolean;
  varB: boolean;
  varC: boolean;
  varD?: number;
  varE?: number;
  varF?: number;
  expressionType: 'base' | 'custom1' | 'custom2';
}
export const InputDataForm = (props: IProps) => {
  const { inputData } = props;
  const booleanVar: Array<'varA' | 'varB' | 'varC'> = ['varA', 'varB', 'varC'];
  const integerVar: Array<'varD' | 'varE' | 'varF'> = ['varD', 'varE', 'varF'];
  const expressionType = ['Base', 'Custom 1', 'Custom 2'];

  const [state, setState] = useState({
    varA: {
      type: 'Boolean',
      errorMessage: '',
      value: inputData.varA
    },
    varB: {
      type: 'Boolean',
      errorMessage: '',
      value: inputData.varB
    },
    varC: {
      type: 'Boolean',
      errorMessage: '',
      value: inputData.varC
    },
    varD: {
      isReq: true,
      type: 'Fractional',
      errorMessage: '',
      value: inputData.varD
    },
    varE: {
      isReq: true,
      type: 'Integer',
      errorMessage: '',
      value: inputData.varE
    },
    varF: {
      isReq: true,
      type: 'Integer',
      errorMessage: '',
      value: inputData.varF
    },
    expressionType: {
      value: inputData.expressionType
    },
  });

  const validate = (value: any, property: string) => {
    switch (property) {
      case 'isReq':
        if ((value && typeof (value) !== 'string') || (typeof (value) === 'string' && value.trim())) {
          return true;
        } else {
          return false;
        }
      case 'isInteger':
        if (Number.isInteger(value)) {
          return true;
        } else {
          return false;
        }
    }
  }

  const handleChangeInputValue = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    const stateObj: any = { ...state };
    if (stateObj[name].isReq && !validate(value, 'isReq')) {
      stateObj[name].errorMessage = `${name} is requared. Please enter this value`;
    } else {
      switch (stateObj[name].type) {
        case 'Boolean':
          stateObj[name].value = value === 'true';
          stateObj[name].errorMessage = '';
          break;
        case 'Integer': {
          const isValid = validate(+value, 'isInteger');
          if (isValid) {
            stateObj[name].value = +value;
            stateObj[name].errorMessage = '';
          } else {
            stateObj[name].errorMessage = `${name} is integer. Please change this value`;
          }
        }
          break;
        case 'Fractional':
          stateObj[name].value = +value;
          stateObj[name].errorMessage = '';
          break;
        default:
          stateObj[name].value = value;
          break;
      }
    }
    setState(stateObj);
  };

  const handlerButtonClick = () => {
    const stateObj: any = { ...state };
    let isValid = true;
    for (const key in stateObj) {
      if (stateObj[key].isReq && !validate(stateObj[key].value, 'isReq')) {
        stateObj[key].errorMessage = `This field is requared. Please enter this value`;
        isValid = false;
      }
    }
    if (isValid) {
      const dataForCalculate: InputData = {
        varA: state.varA.value,
        varB: state.varB.value,
        varC: state.varC.value,
        varD: state.varD.value!,
        varE: state.varE.value!,
        varF: state.varF.value!,
        expressionType: state.expressionType.value
      };
      props.onSubmit(dataForCalculate);
    } else {
      setState(stateObj);
    }
  }

  return (
    <div className='form-container'>

      {booleanVar.map((variable: 'varA' | 'varB' | 'varC') => (
        <div className="form-input-block" key={variable}>
          <label htmlFor="varA-radio-group" className='input-label'>{`${variable[variable.length - 1]}(boolean)`}</label>
          <div id={`${variable}-radio-group`} role="group">
            <label>
              <input
                type="radio"
                name={variable}
                value="true"
                onChange={handleChangeInputValue}
                defaultChecked={state[variable].value}
              />
                True
              </label>
            <label>
              <input
                type="radio"
                name={variable}
                value="false"
                onChange={handleChangeInputValue}
                defaultChecked={!state[variable].value}
              />
                False
              </label>
          </div>
        </div>
      ))}

      {integerVar.map((variable: 'varD' | 'varE' | 'varF') => (
        <div className="form-input-block" key={variable}>
          <label htmlFor={variable}>
            {`${variable[variable.length - 1]} (${state[variable].type.toLowerCase()} number): `}
          </label>
          <input
            className={`${state[variable].errorMessage ? 'error-field' : ''} input-field`}
            type="number"
            id={variable}
            name={variable}
            placeholder={`${state[variable].type === 'Integer' ? '123' : '12.5'}`}
            onChange={handleChangeInputValue}
            defaultValue={state[variable].value}
          />
          <div className='error-text'>{state[variable].errorMessage}</div>
        </div>
      ))}

      <div className="expression-type-container">
        {expressionType.map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="expressionType"
              value={type.toLowerCase().trim()}
              onChange={handleChangeInputValue}
              defaultChecked={state.expressionType.value === type.toLowerCase().trim()}
            />
            {type}
          </label>
        ))}
      </div>
      <div className="btn-container">
        <button type="submit" className="btn-calculate" onClick={handlerButtonClick}>Calculate</button>
      </div>
    </div>
  );
};
