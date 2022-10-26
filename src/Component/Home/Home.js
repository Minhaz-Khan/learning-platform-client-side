import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import firstImg from '../../sliding img/animation.jpeg';
import firstImg2 from '../../sliding img/lapton img.jfif';
import firstImg3 from '../../sliding img/smail img.jpg';
import Footer from '../Footer/Footer';

const slider = <AwesomeSlider animation="cubeAnimation">
    <div data-src={firstImg} />
    <div data-src={firstImg2} />
    <div data-src={firstImg3} />
</AwesomeSlider>



const Home = () => {

    return (
        <div>
            <p>this is home</p>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;