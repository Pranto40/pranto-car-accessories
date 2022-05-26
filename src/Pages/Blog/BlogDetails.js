import React from 'react';

const BlogDetails = ({title, blog}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{blog}</p>
        </div>
        </div>
    );
};

export default BlogDetails;