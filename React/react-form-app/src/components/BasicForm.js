import useForm from "../hooks/use-Form";

const BasicForm = (props) => {
  
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useForm(value => value.trim() !== '');
  
  const {
    value: lastNameValue, 
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useForm(value => value.trim() !== '');
  
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useForm(value => value.includes('@'));
  
  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError ? 'invalid form-control' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'invalid form-control' : 'form-control';
  const emailClasses = emailHasError ? 'invalid form-control' : 'form-control';

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (firstNameHasError) {
      return;
    }

    console.log('FIRST NAME : ' + firstNameValue);
    console.log('LAST NAME  : ' + lastNameValue);
    console.log('EMAIL      : ' + lastNameValue);

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameValue}/>
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameValue}/>
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailValue}/>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
