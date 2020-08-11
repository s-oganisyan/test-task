import React from 'react';

export interface IProps {
  result: {
    calculateResult: number;
    error: string;
  };
}

export const Result = (props: IProps) => {
  const { error, calculateResult } = props.result;
  return (
    <div
      className={`${error ? 'error-string' : 'result'}`}
    >
      {error ? error : `K = ${calculateResult}`}
    </div>
  )
}

export default Result;
