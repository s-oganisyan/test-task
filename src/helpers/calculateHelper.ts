import { InputData } from '../interfases';

export const calculateResult = (data: InputData): any => {
  const { expressionType, varA, varB, varC, varD, varE, varF } = data;
  const n = calculateN(varA, varB, varC, expressionType);
  const result = calculateK(expressionType, varD, varE, varF, n);
  return result;
};

export const calculateN = (varA: boolean, varB: boolean, varC: boolean, expressionType: string) => {
  const baseTable: any = {
    p: 'truetruetrue',
    m: 'truetruefalse',
    t: 'falsetruetrue',
  };
  const custom2Table: any = {
    p: 'truetruetrue',
    m: 'truefalsetrue',
    t: 'truetruefalse',
  };
  const varBool = `${varA}${varB}${varC}`;
  let n;
  if (expressionType === 'custom2') {
    for (const key in custom2Table) {
      if (custom2Table[key] === varBool) {
        n = key;
      }
    }
  } else {
    for (const key in baseTable) {
      if (baseTable[key] === varBool) {
        n = key;
      }
    }
  }
  return n;
};

export const calculateK = (expressionType: string, varD: number, varE: number, varF: number, n?: string,): any => {
  const errorString = 'ERROR! Please, change any variable';
  if (n) {
    switch (n) {
      case 'p':
        if (expressionType === 'custom1') {
          return {
            calculateResult: 2 * varD + (varD * varE / 100)
          }
        } else {
          return {
            calculateResult: varD + (varD * (varE - varF) / 25.5)
          }
        }
      case 'm':
        if (expressionType === 'custom2') {
          return {
            calculateResult: varF + varD + (varD * varE / 100)
          }
        } else {
          return {
            calculateResult: varD + (varD * varE / 10)
          }
        }
      case 't':
        return {
          calculateResult: varD - (varD * varF / 30)
        }
      default:
        return {
          error: errorString
        }
    }
  } else return {
    error: errorString
  }
};
