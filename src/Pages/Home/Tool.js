import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Tools from './Tools';

const Tool = () => {
    const url = "http://localhost:5000/tools";
    const [isLoading, setIsLoading] = useState(true);
    const [tools, setTools] = useState([]);
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url)
            const data = await res.json();
            setTools(data)
            setIsLoading(false)
        }catch {
            setIsLoading(false)
        }
    }
    useEffect ( () => {
        fetchData(url)
    } , [])
    return (
        <div className='my-20'>
            {
                isLoading && <Loading />
            }
            <h1 className='text-center font-bold uppercase text-2xl'>Our Service</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
            {
                tools.map(tool => <Tools
                tool={tool}
                key={tool._id}
                ></Tools>)
            }
            </div>
        </div>
    );
};

export default Tool;