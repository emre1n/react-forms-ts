import { useRef, useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const formSubmissonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('enteredName', enteredName);
  };

  return (
    <form onSubmit={formSubmissonHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
