import React from 'react';
import './App.css';


export default function Home() {
    return (
        <div className='home'>
            

            <div className='home-bg'>
            
                
                <div className='welcome-screen'>

                    
                    <div className='well'>
                        <h1 className='h1' >Squishy Animals</h1>
                        <p className='shop-detail' >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultr
                        </p>
                    </div>
                </div>
                <div id='services'>
                    <div className='services'>
                        <LocalShippingIcon id='delivery' />
                        <div className='service-text'> <h4>Free Delivery</h4>
                            <p className='desc'>Free Shipping on all order</p></div>
                    </div>
                    <div className='services'>
                        <SyncIcon id='return-policy' />
                        <div className='service-text'><h4 >Return Policy</h4>
                            <p className='desc'>Return Policy Available</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}