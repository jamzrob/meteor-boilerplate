import React from "react";
import {Link } from 'react-router';
export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                 <h1>Page Not Found</h1>
                 <p>We are unable to find the page</p>
                <Link to='/' className="button button--link">HOME</Link>
            </div>
        </div>
    );
}

