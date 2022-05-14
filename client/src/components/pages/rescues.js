import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import mongoose from 'mongoose';


export default function Rescues() {
    return (
        <div className='rescues'>
            <h1 className='h1'>Specialised Rescue Organisations</h1>
            <p className='page_detail' ></p>

        </div>
    )
}