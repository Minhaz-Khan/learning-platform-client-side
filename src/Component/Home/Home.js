import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import firstImg from '../../sliding img/animation.jpeg';
import firstImg2 from '../../sliding img/lapton img.jfif';
import firstImg3 from '../../sliding img/smail img.jpg';
import Footer from '../Footer/Footer';

const slider = (
    <AwesomeSlider>
        <div className=''><img src={firstImg} alt="" /> </div>
        <div><img src={firstImg2} alt="" /></div>
        <div><img src={firstImg3} alt="" /></div>
        <div><img src={firstImg} alt="" /></div>
    </AwesomeSlider>
);


const Home = () => {

    return (
        <div>
            <p>this is home</p>
            <div>
                <div className='w-full h-48'>
                    {slider}
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;


