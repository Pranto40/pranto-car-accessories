import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const MyProfileDetails = () => {
    const url = "http://localhost:5000/profile";
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
    console.log(profiles);
    return (
        <div>
             {
                isLoading && <Loading />
            }
           {
               profiles.map(profile => <>
                <h1>Education: {profile.education}</h1>
                <h1>Location: {profile.location}</h1>
                <h1>Phone Number: {profile.phoneNumber}</h1>
                <h1>Your Hobby: {profile.hobbies}</h1>
               </>)
           }
        </div>
    );
};

export default MyProfileDetails;