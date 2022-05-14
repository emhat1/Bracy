import React from 'react';
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';

import MessageList from '../components/MessageList';

// Import the query we are going to execute from its file
import { QUERY_MESSAGES } from '../utils/queries';

const Home = () => {
  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_MESSAGES);

  // Use optional chaining to check if data exists and if it has a messages property. If not, return an empty array to use.
  const messages = data?.messages || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MessageList
              messages={messages}
              title="What other people think of the issue ..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
