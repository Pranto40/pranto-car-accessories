import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams()
    return (
        <div className='mt-16'>
           <h1>single details id: {id}</h1>
        </div>
    );
};

export default Purchase;