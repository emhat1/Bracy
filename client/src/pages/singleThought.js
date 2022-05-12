import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/messageboard/messageboardRead';
import CommentForm from '../components/messageboard/messageboardAdd';


export default SingleThought;
