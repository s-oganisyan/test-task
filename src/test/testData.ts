export enum ExpressionType {
    Base = 'base',
    Custom1 = 'custom1',
    Custom2 = 'custom2'
};

export const truthTable = {
    baseM: [true, true, false],
    baseP: [true, true, true],
    baseT: [false, true, true],
    custom2M: [true, false, true],
    custom2T: [true, true, false],
};

export const failedTruthTableBase = [
    [false, false, false],
    [false, false, true],
    [false, true, false],
    [true, false, false],
    [true, false, true]
];

export const failedTruthTableCustom2 = [
    [false, false, false],
    [false, false, true],
    [false, true, false],
    [false, true, true],
    [true, false, false]
];

export const calculateErrorString = 'ERROR! Please, change any variable';
