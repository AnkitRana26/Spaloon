import React from 'react';
import './Home.css'
import { gridContainerImages, popularSpaAndSalon, servicesData, trendingServices } from '../../data'
import { Slider } from '../../components/Slider/Slider';
import { Slider2 } from '../../components/Slider2/Slider2';
import GridComponent from '../../components/GridComponent/GridComponent';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div id='homeContainer'>
            <div id='homeTopImage'>
                <h1>Discover & Book</h1>
                <h2>Looking for Best Spa & Salon Near you ?</h2>
                <div id='searchSection'>
                    <div>
                        <input type='text' placeholder='What are you looking for' />
                        <i className="fa-solid fa-magnifying-glass" ></i>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Location' />
                        <i className="fa-solid fa-location-dot"></i>
                        <button id='searchId'>Search</button>
                    </div>
                </div>
            </div>
            <div id='sliderContainer'>
                <div id='servicesMainContainer'>
                    {

                        servicesData.map((ele) => {
                            return <div key={ele.id} className="servicesDiv">
                                <img src={ele.img} />
                                <p>{ele.content}</p>
                            </div>
                        })
                    }
                </div>
                <h1>What's Trending</h1>
                <h3>Let's not wait for the "Perfect Look"</h3>
                <Slider data={trendingServices} />
            </div>
            <div id='slider2MainContainer'>
                <h1>Popular Spa & Salon</h1>
                <h3>We want you to look Fabulous</h3>
                <Slider2 data={popularSpaAndSalon} />
            </div>
            <div id='bannerSpaloonMainContainer'>
                <div id='bannerSpaloonContainer'>
                    <div>
                        <h3>SPAALON</h3>
                        <h1>More than 3000 Spas & Salons</h1>
                        <h2>Book an appointment now within seconds</h2>
                        <button>View All</button>
                    </div>
                </div>
            </div>
            <div id='gridMain'>
                <GridComponent data={gridContainerImages}/>
            </div>
            <Footer/>
        </div >
    )
}

export default Home