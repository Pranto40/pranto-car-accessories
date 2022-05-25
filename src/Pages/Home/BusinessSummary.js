import React from 'react';
import { BiMedal } from 'react-icons/bi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { GiIonicColumn } from 'react-icons/gi';

const BusinessSummary = () => {
    return (
        <div >
            <h1 className='text-center text-2xl font-bold uppercase mb-5'>Business Summary</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 my-12">
        <div className="stat border-2">
        <div className="stat-figure text-secondary">
            <div className="text-6xl">
                <IoBriefcaseOutline />
            </div>
            </div>
            <div className="stat-value text-primary">32154+</div>
            <div className="stat-desc text-2xl">Trusted Clients</div>
        </div>
        
        <div className="stat border-2">
        <div className="stat-figure text-secondary">
            <div className="text-6xl">
                <GiIonicColumn />
            </div>
            </div>
            <div className="stat-value text-secondary">114587+</div>
            <div className="stat-desc text-2xl">Successful Cases</div>
        </div>
        
        <div className="stat border-2">
            <div className="stat-figure text-secondary">
            <div className="text-6xl">
                <BiMedal />
            </div>
            </div>
            <div className="stat-value">2000+</div>
            <div className="stat-desc text-secondary text-2xl">Honors & Awards</div>
        </div>
        </div>
        
    </div>
    );
};

export default BusinessSummary;