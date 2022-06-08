import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value};
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return initialInputState;
};

const useForm = (validationLogic) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validationLogic(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const onChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  }

  const onBlurHandler = (event) => {
    dispatch({ type: 'BLUR' })
  }

  const reset = () => {
    dispatch({type: 'RESET'});
  };
  
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler, 
    reset,
  };
}

export default useForm;