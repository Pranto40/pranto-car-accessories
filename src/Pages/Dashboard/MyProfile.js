import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import MyProfileDetails from './MyProfileDetails';

const MyProfile = () => {
    const url = `https://desolate-journey-84026.herokuapp.com/profile`;
    const [isLoading, setIsLoading] = useState(true);
    const [profiles, setProfiles] = useState([]);
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url)
            const data = await res.json();
            setProfiles(data)
            setIsLoading(false)
        }catch {
            setIsLoading(false)
        }
    }
    useEffect ( () => {
        fetchData(url)
    } , [])
    return (
        <div className='mt-16'>
            {
                isLoading && <Loading />
            }
           {
               profiles.map(profile => <MyProfileDetails
                profile={profile}
               ></MyProfileDetails>)
           }
        </div>
    );
};

export default MyProfile;