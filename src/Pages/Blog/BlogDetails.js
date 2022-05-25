import React from 'react';

const BlogDetails = ({title, blog}) => {
    return (
        <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <p>{blog}</p>
        </div>
        </div>
    );
};

export default BlogDetails;