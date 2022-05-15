// Import external dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Import internal dependencies
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { checkPassword, validateEmail } from '../../utils/helpers';

function Signup(props) {
/*   const [formState, setFormState] = useState({ email: '', password: '' }); */
  const [addUser] = useMutation(ADD_USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    // Check validity of email and password formats
    if (!validateEmail(email)) {
      setErrorMessage('This does not look like a valid email address.  Please try again');
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Please choose a more secure password`
      );
      return;
    }

    const mutationResponse = await addUser({
      variables: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    });
    console.log( mutationResponse );
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    } else if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if ( inputType === 'lastName') {
      setLastName( inputValue );
    }
  };

  return (
    <div className="container my-1">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="Joe"
            name="firstName"
            type="FirstName"
            id="FirstName"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="LastName">Surname:</label>
          <input
            placeholder="Bloggs"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
