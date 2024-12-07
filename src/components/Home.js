import React from 'react'
import homeImg from "../images/home.jpg"
import Product from './Product';
import shortid from 'shortid';
import firstProduct from '../images/Products/1.png'
import secondProduct from '../images/Products/2.png'
import thirdProduct from '../images/Products/3.png'
import fourthProduct from '../images/Products/4.png'
import fifthProduct from '../images/Products/5.png'
import sixthProduct from '../images/Products/6.png'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
        <div className='home-container'>
           <img className='home-image' src={homeImg} alt="home-img"/>
           <div className='home-row'>
            <Product
             id={shortid.generate}
             image={firstProduct}
             price={64}
             title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
             rating={5}
             />
            <Product
             id={shortid.generate}
             image={secondProduct}
             price={64}
             title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
             rating={4.5}
             />
           </div>
           <div className='home-row'>
           <Product
             id={shortid.generate}
             image={thirdProduct}
             price={64}
             title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
             rating={3}
             />
            <Product
             id={shortid.generate}
             image={fourthProduct}
             price={64}
             title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
             rating={5}
             />
            <Product
             id={shortid.generate}
             image={fifthProduct}
             price={64}
             title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
             rating={4}
             />
           </div>
           <div className='home-row'>
           <Product
             id={shortid.generate}
             image={sixthProduct}
             price={64}
             title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
             rating={3.5}
             />
           </div>
        </div>
    </div>
  );
};

export default Home
