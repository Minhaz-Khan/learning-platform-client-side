import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    const { cours_name, _id } = course;
    return (
        <p ><Link to={`/course/${_id}`}>{cours_name}</Link></p>
    );
};

export default LeftSideNav;