import React from 'react';
import Service1 from '../../../images/Service1.jpg';
import Service2 from '../../../images/Service2.jpg';
import Service3 from '../../../images/Service3.jpg';
import Service4 from '../../../images/Service4.jpg';
import Service5 from '../../../images/Service5.jpg';
import './Decoration.css'

const Decoration = () => {
    return (
        <div className="container my-5">
            <h2 className="AddServiceHeader mx-auto mt-1 mb-3">
                Our Best Service       
            </h2>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img width="100%" src={Service1} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img width="100%" src={Service2} alt="" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="dec-text col-lg-6 col-md-6 col-12">
                    <p className=''>carsales.com Ltd (ASX: CAR) is the largest online automotive, motorcycle and marine classifieds business in Australia. Attracting more Australians interested in buying or selling cars, motorcycles, trucks, caravans and boats than any other classified group of websites. Together with its subsidiaries employing over 600 people in Australia, carsales develops world leading technology and advertising solutions that drive its business around the world. carsales.com Ltd has operations across the Asia Pacific region and has interests in leading online automotive classified businesses in Brazil, South Korea, Malaysia, Indonesia, Thailand and Mexico.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="col-lg-6 col-md-6 col-12">
                                <img className="" width="100%" src={Service3} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt-3">
                                <img width="100%" src={Service4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6">
                            <img width="100%" src={Service5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Decoration;