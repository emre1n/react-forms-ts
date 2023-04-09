import { useReducer } from 'react';

interface IInputState {
  value: string;
  isTouched: boolean;
}

interface IInputAction {
  type: string;
  payload: string;
}

const initialInputState: IInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: IInputState, action: IInputAction) => {
  if (action.type === 'INPUT') {
    return { value: action.payload, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return {
    value: '',
    isTouched: false,
  };
};

type TValue = (enteredValue: string) => boolean;

const useInput = (validateValue: TValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: event.target.value });
  };

  const inputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch({ type: 'BLUR', payload: '' });
  };

  const reset = () => {
    dispatch({ type: 'RESET', payload: '' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
