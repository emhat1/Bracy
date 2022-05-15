//Importing external dependencies
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import mongoose from 'mongoose';

// Importing internal dependencies
import Card from '../Card';

export default function Rescues() {
    return (
        <div className='rescues'>
            <h1 className='h1'>Specialised Rescue Organisations</h1>
            <p className='page_detail' ></p>
            <Card title={Rescues.title} description={Rescue.rescueType} suburb={Rescue.suburb}  state={Rescue.state} website={Rescue.website}/>

        </div>
    )
}

