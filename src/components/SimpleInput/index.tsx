import { LegacyRef, useRef, useState } from 'react';

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const formSubmissonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      return;
    }

    console.log('enteredName', enteredName);

    const enteredValue = nameInputRef.current?.value;
    console.log('enteredValue', enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissonHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
