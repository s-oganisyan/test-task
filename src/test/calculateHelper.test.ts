import { calculateResult, calculateN, calculateK } from '../helpers/calculateHelper';
import {
    ExpressionType,
    truthTable,
    failedTruthTableBase,
    failedTruthTableCustom2,
    calculateErrorString
} from './testData';

describe('check function calculateN', () => {
    test('for base, result should be m', () => {
        const [varA, varB, varC] = truthTable.baseM;
        const result = calculateN(varA, varB, varC, ExpressionType.Base);
        expect(result).toEqual('m');
    });
    test('for base, result should be t', () => {
        const [varA, varB, varC] = truthTable.baseT;
        const result = calculateN(varA, varB, varC, ExpressionType.Base);
        expect(result).toEqual('t');
    });
    test('for base, result should be p', () => {
        const [varA, varB, varC] = truthTable.baseP;
        const result = calculateN(varA, varB, varC, ExpressionType.Base);
        expect(result).toEqual('p');
    });
    test('for custom1, result should be m', () => {
        const [varA, varB, varC] = truthTable.baseM;
        const result = calculateN(varA, varB, varC, ExpressionType.Custom1);
        expect(result).toEqual('m');
    });
    test('for custom1, result should be t', () => {
        const [varA, varB, varC] = truthTable.baseT;
        const result = calculateN(varA, varB, varC, ExpressionType.Custom1);
        expect(result).toEqual('t');
    });
    test('for custom1, result should be p', () => {
        const [varA, varB, varC] = truthTable.baseP;
        const result = calculateN(varA, varB, varC, ExpressionType.Custom1);
        expect(result).toEqual('p');
    });
    test('for custom2, result should be m', () => {
        const [varA, varB, varC] = truthTable.custom2M;
        const result = calculateN(varA, varB, varC, ExpressionType.Custom2);
        expect(result).toEqual('m');
    });
    test('for custom2, result should be p', () => {
        const [varA, varB, varC] = truthTable.baseP;
        const result = calculateN(varA, varB, varC, ExpressionType.Custom2);
        expect(result).toEqual('p');
    });
    test('for custom, result should be t', () => {
        const [varA, varB, varC] = truthTable.custom2T;
        const result = calculateN(varA, varB, varC, ExpressionType.Custom2);
        expect(result).toEqual('t');
    });
    test('for base, result should be faild', () => {
        failedTruthTableBase.forEach(rule => {
            const [varA, varB, varC] = rule;
            const result = calculateN(varA, varB, varC, ExpressionType.Base);
            expect(result).toBeUndefined();
        })
    });
    test('for custom1, result should be faild', () => {
        failedTruthTableBase.forEach(rule => {
            const [varA, varB, varC] = rule;
            const result = calculateN(varA, varB, varC, ExpressionType.Custom1);
            expect(result).toBeUndefined();
        })
    });
    test('for custom2, result should be faild', () => {
        failedTruthTableCustom2.forEach(rule => {
            const [varA, varB, varC] = rule;
            const result = calculateN(varA, varB, varC, ExpressionType.Custom2);
            expect(result).toBeUndefined();
        })
    });
});
describe('check function calculateK', () => {
    test('for base, m, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * varE / 10)
        };
        const result = calculateK(ExpressionType.Base, varD, varE, varF, 'm');
        expect(result).toEqual(successResult);
    });
    test('for base, p, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * (varE - varF) / 25.5)
        };
        const result = calculateK(ExpressionType.Base, varD, varE, varF, 'p');
        expect(result).toEqual(successResult);
    });
    test('for base, t, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD - (varD * varF / 30)
        };
        const result = calculateK(ExpressionType.Base, varD, varE, varF, 't');
        expect(result).toEqual(successResult);
    });
    test('for base, failed n, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            error: calculateErrorString
        };
        const result = calculateK(ExpressionType.Base, varD, varE, varF);
        expect(result).toEqual(successResult);
    });

    test('for custom1, m, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * varE / 10)
        };
        const result = calculateK(ExpressionType.Custom1, varD, varE, varF, 'm');
        expect(result).toEqual(successResult);
    });
    test('for custom1, p, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: 2 * varD + (varD * varE / 100)
        };
        const result = calculateK(ExpressionType.Custom1, varD, varE, varF, 'p');
        expect(result).toEqual(successResult);
    });
    test('for custom1, t, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD - (varD * varF / 30)
        };
        const result = calculateK(ExpressionType.Custom1, varD, varE, varF, 't');
        expect(result).toEqual(successResult);
    });
    test('for custom1, failed n, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            error: calculateErrorString
        };
        const result = calculateK(ExpressionType.Custom1, varD, varE, varF);
        expect(result).toEqual(successResult);
    });

    test('for custom2, m, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varF + varD + (varD * varE / 100)
        };
        const result = calculateK(ExpressionType.Custom2, varD, varE, varF, 'm');
        expect(result).toEqual(successResult);
    });
    test('for custom2, p, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * (varE - varF) / 25.5)
        };
        const result = calculateK(ExpressionType.Custom2, varD, varE, varF, 'p');
        expect(result).toEqual(successResult);
    });
    test('for custom2, t, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD - (varD * varF / 30)
        };
        const result = calculateK(ExpressionType.Custom2, varD, varE, varF, 't');
        expect(result).toEqual(successResult);
    });
    test('for base, failed n, d=112.13, e=168, f=75', () => {
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            error: calculateErrorString
        };
        const result = calculateK(ExpressionType.Custom2, varD, varE, varF);
        expect(result).toEqual(successResult);
    });
});
describe('check function calculateResult', () => {
    test('for base, m, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.baseM;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * varE / 10)
        };
        const result = calculateResult({ expressionType: ExpressionType.Base, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for base, p, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.baseP;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * (varE - varF) / 25.5)
        };
        const result = calculateResult({ expressionType: ExpressionType.Base, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for base, t, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.baseT;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD - (varD * varF / 30)
        };
        const result = calculateResult({ expressionType: ExpressionType.Base, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for base, failed n, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = failedTruthTableBase[0];
        const [varD, varE, varF] = [112.13, 168, 75]
        const errorResult = {
            error: calculateErrorString
        };
        const result = calculateResult({ expressionType: ExpressionType.Base, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(errorResult);
    });

    test('for custom1, m, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.baseM;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * varE / 10)
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom1, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for custom1, p, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.baseP;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: 2 * varD + (varD * varE / 100)
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom1, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for custom1, t, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.baseT;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD - (varD * varF / 30)
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom1, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for custom1, faild n, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = failedTruthTableBase[1];
        const [varD, varE, varF] = [112.13, 168, 75]
        const errorResult = {
            error: calculateErrorString
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom1, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(errorResult);
    });

    test('for custom2, m, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.custom2M;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varF + varD + (varD * varE / 100)
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom2, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for custom2, p, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.baseP;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD + (varD * (varE - varF) / 25.5)
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom2, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for custom2, t, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = truthTable.custom2T;
        const [varD, varE, varF] = [112.13, 168, 75]
        const successResult = {
            calculateResult: varD - (varD * varF / 30)
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom2, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(successResult);
    });
    test('for custom2, field n, d=112.13, e=168, f=75', () => {
        const [varA, varB, varC] = failedTruthTableCustom2[0];
        const [varD, varE, varF] = [112.13, 168, 75]
        const errorResult = {
            error: calculateErrorString
        };
        const result = calculateResult({ expressionType: ExpressionType.Custom2, varA, varB, varC, varD, varE, varF });
        expect(result).toEqual(errorResult);
    });
});
