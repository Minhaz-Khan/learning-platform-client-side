import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    const { cours_name } = course;
    return (
        <p ><Link>{cours_name}</Link></p>
    );
};

export default LeftSideNav;