import { useState } from 'react';

const useForm = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  
  const valueIsValid = validationLogic(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const onBlurHandler = (event) => {
    setIsTouched(true);
  }

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }
  
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler, 
    reset,
  };
}

export default useForm;