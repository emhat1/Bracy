import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/messageboard/messageboardRead';
import CommentForm from '../components/messageboard/messageboardAdd';

import { QUERY_SINGLE_GAUGE } from '../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { gaugeId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_GAUGE, {
    // pass URL parameter
    variables: { gaugeId: gaugeId },
  });

  const gauge = data?.gauge || {};


  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">

        Name:     {gauge.gauge_name} <br />

        <span style={{ fontSize: '1rem' }}>

          Category: {gauge.category.category_name} <br />
          In-stock: {gauge.current_inventory} <br />
          Checked Out: {gauge.quantity_borrowed} <br />
          gauge was created last {gauge.createdAt}

        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {gauge.gauge_name}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList gauges={gauge.gauge_name} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm gaugeId={gauge._id} />
      </div>
    </div>
  );
};

export default SingleThought;
