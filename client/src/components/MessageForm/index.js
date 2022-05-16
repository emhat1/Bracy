// Import external dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Import internal dependencies
import Auth from '../../utils/auth';
import { ADD_MESSAGE } from '../../utils/mutations';


function Message(props) {
  const [formState, setFormState] = useState({ messageText: '', messageAuthor: '', createdAt: ''});
  const [addMessage] = useMutation(ADD_MESSAGE);
  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');


  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const mutationResponse = await addMessage({
      variables: {
        messageText: formState.title,
        messageAuthor: Auth.getProfile().data.firstName,
        createdAt: Date.now,
      }
    });
    const token = mutationResponse.data.addMessage.token;
    Auth.login(token);
  };

 const handleInputChange = (e) => {
  };

  return (
    <div className="container my-1">
      <h2>What would you like to say?</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="messageText">Your squishy-faced thoughts</label>
          <input
            placeholder="What are your thoughts on these breeds?"
            name="messageText"
            type="messageText"
            id="messageText"
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

export default Message;
