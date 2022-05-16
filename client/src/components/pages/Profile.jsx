// Importing external dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';import {  } from 'react-router-dom';

// Imporing internal dependencies
import RescueForm from '../RescueForm';
import MessageForm from '../MessageForm';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

const Profile = () => {
  const { email: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER: {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if email is yours
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
       <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {user.firstName} {user.lastName}'s profile.
        </h2>
       <h5 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          What would you like to do?
        </h5>
            <MessageForm />
        <p></p>
        <h5 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Would you like to upload a specialty rescue organisation?
        </h5>
            <RescueForm />
          </div>
      </div>
    );
  };
};

export default Profile
