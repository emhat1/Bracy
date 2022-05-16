//Importing external dependencies
import React from 'react';
import { useQuery } from '@apollo/client';

// Importing internal dependencies
import Card from '../Card';
import { QUERY_RESCUES } from '../../utils/queries';

export default function Rescues() {
    const { loading, data } = useQuery(QUERY_RESCUES);

    if ( loading ) {
        return 'loading...';
    }

    return (
        <div className='rescues'>
            <h1 className='h1'>Specialised Rescue Organisations</h1>
            <p className='page_detail' ></p>
            {data?.rescues?.map((rescue,i) => {
                return <Card
                    title={rescue.title}
                    rescueType={rescue.rescueType}
                    suburb={rescue.suburb}
                    state={rescue.state}
                    website={rescue.website} />
            })}
        </div>
    )
}

