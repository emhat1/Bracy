// Import external dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Import internal dependencies
import Auth from '../../utils/auth';
import { ADD_RESCUE } from '../../utils/mutations';
import { DELETE_RESCUE } from '../../utils/mutations';

function Rescue(props) {
  const [formState, setFormState] = useState({ title: '', rescueType: '', suburb: '', state: '', website: '' });
  const [addRescue] = useMutation(ADD_RESCUE);
  const [title, setTitle] = useState('');
  const [rescueType, setRescueType] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [website, setWebsite] = useState('');

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const mutationResponse = await addRescue({
      variables: {
        title: formState.title,
        rescueType: formState.rescueType,
        suburb: formState.suburb,
        state: formState.state,
        website: formState.website
      },
    });
    const token = mutationResponse.data.addRescue.token;
    Auth.login(token);
  };

 const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    //const { target } = e;
    //const inputType = target.name;
    //const inputValue = target.value;
  };

  return (
    <div className="container my-1">
      <h2>Add a Rescue Organisation</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="title">Rescue Organisation name:</label>
          <input
            placeholder="Squishies Flat Faced Animal Rescue"
            name="title"
            type="title"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="rescueType">Rescue Speciality type:</label>
          <input
            placeholder="Brachycephalic"
            name="rescueType"
            type="rescueType"
            id="rescueType"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="suburb">Suburb:</label>
          <input
            placeholder="Wantirna"
            name="suburb"
            type="suburb"
            id="suburb"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="state">State:</label>
          <input
            placeholder="Victoria"
            name="state"
            type="state"
            id="state"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="website">Website:</label>
          <input
            placeholder="https://www.squishiesrescue.org.au/"
            name="website"
            type="website"
            id="website"
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

export default Rescue;
