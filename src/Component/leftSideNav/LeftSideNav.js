import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const LeftSideNav = ({ course }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const { cours_name, _id } = course;
    return (
        <p data-aos="fade-right"><Link to={`/course/${_id}`}>{cours_name}</Link></p>
    );
};

export default LeftSideNav;