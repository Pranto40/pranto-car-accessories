import React from 'react';
import OurMemberDetails from './OurMemberDetails';

const OurMember = () => {
    return (
        <div>
            <div className='text-center'>
               <h1 className='text-2xl font-bold my-2'>Our Member</h1>
               <p className='text-2xl'>Meet our telented team members</p>
            </div>
            <div className='my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                <OurMemberDetails img="https://i.ibb.co/Y3VP4gH/member01.webp" name="JENNIFER LAWRENCE" surname="Tech Leader" />
                <OurMemberDetails img="https://i.ibb.co/yBRq8TT/member02.webp" name="GEORGE SCOOTS" surname="Ceo & Director" />
                <OurMemberDetails img="https://i.ibb.co/WBY6LWm/member03.webp" name="GEORGE SCOOTS" surname="Ceo & Director" />
                <OurMemberDetails img="https://i.ibb.co/vsBbjRC/member04.webp" name="JENNIFER LAWRENCE" surname="Tech Leader" />
            </div>
        </div>
    );
};

export default OurMember;