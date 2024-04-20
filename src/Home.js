import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import property1 from "./images/brian-babb-XbwHrt87mQ0-unsplash.jpg"
import property2 from "./images/daria-nepriakhina-LwnIuhH_5Q4-unsplash.jpg"
import property3 from "./images/marvin-meyer-fBdlytm6Hp8-unsplash.jpg"
import property4 from "./images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"
import property5 from "./images/r-architecture-pzMghCq2kS0-unsplash.jpg"
import property6 from "./images/steven-ungermann-vvah86ql8iM-unsplash.jpg"
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

const Home = () => {

    const [property, setproperty] = useState("-- Select a location --");

    const propertyhandler = (event) => {
        setproperty(event.target.value);
    }
    return (
        <div>
            <div className="main-layout">
                {/* <! loader  --> */}
                {/* <div className="loader_bg">
    <div className="loader"><img src="images/loading.gif" alt="#" /></div>
 </div> */}
                {/* <! end loader --> */}
                {/* <! header --> */}
                <header>
                    {/* <! header inner --> */}
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-9 col-sm-9">
                                    <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarsExample04">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <a className="nav-link" href="index.html"> Home  </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#about">About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#service">Service</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#customer">Customer</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#contact">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo">
                                                <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                                    <ul className="email">
                                        <li><a href="#">Call: (+71) 1234567890</a></li>
                                        <li><a href="#">Email: demo@gmail.com</a></li>
                                        <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <! end header inner --> */}
                {/* <! end header --> */}
                {/* <! banner --> */}
                <section className="banner_main">
                    <div id="banner1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#banner1" data-slide-to="0" className="active"></li>
                            <li data-target="#banner1" data-slide-to="1"></li>
                            <li data-target="#banner1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container-fluid">
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-bg">
                                                    <span>Welcome to</span>
                                                    <h1>labspa</h1>
                                                    <p>Welcome to labspa, your exclusive destination for women's rental needs! From elegant evening gowns to professional attire and everything in between, labspa offers a curated collection tailored to the modern woman. Discover the convenience of renting high-quality fashion pieces without breaking the bank. Whether it's for a special occasion or everyday wear, labspa has you covered with style, sophistication, and a touch of empowerment.</p>
                                                    <a href="#">Read More </a> <a href="#">Book Now</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text_img">
                                                    <figure><img src="images/girl.png" alt="#" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container-fluid">
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-bg">
                                                    <span>Welcome to</span>
                                                    <h1>labspa</h1>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                                                    <a href="#">Read More </a> <a href="#">Book Now</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text_img">
                                                    {/* <figure><img src="images/girl.png" alt="#"/></figure> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container-fluid">
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-bg">
                                                    <span>Welcome to</span>
                                                    <h1>labspa</h1>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                                                    <a href="#">Read More </a> <a href="#">Book Now</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text_img">
                                                    <figure><img src="images/girl.png" alt="#" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        </a>
                        <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </section>
                {/* <! end banner --> */}
                {/* <! service --> */}
                <div id="service" className="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2> <img className=" ml-[50%]" src="images/head.png" alt="#" /> Tell us what do you want</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ml-[13vw]">
                                <div id="hover_chang" className="service_box">
                                    <NavLink to={"/rentalform"}>
                                        <div className=" absolute right-[50%] top-[10%]">
                                            <FaHome />
                                        </div>
                                        <h3>I have a room to rent</h3>
                                    </NavLink>

                                </div>


                            </div>

                            <div className="col-md-4">
                                <div id="hover_chang" className="service_box">
                                    <div className=" absolute right-[50%] top-[10%]">
                                        <FaMagnifyingGlass />
                                    </div>
                                    <h3>I am finding a room to rent</h3>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <a className="read_more" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <! end about --> */}
                {/* <! customer --> */}

                <div className="h-[130vh] w-full flex flex-col items-center gap-6">
                    <h2 className=" text-center text-3xl font-extrabold mt-20">Properties in which you will be interested in</h2>

                    <select onClick={(e) => propertyhandler(e)}>
                        <option>-- Select a location --</option>
                        <option>Chicago</option>
                        <option>Los Angeles</option>
                        <option>San Diego</option>
                    </select>
                    <div className=" flex flex-col gap-2">
                        <div className="flex gap-2">
                            <img src={property1} className={`${property === "Chicago" ? " block" : " hidden"} w-[400px]`}></img>
                            <img src={property2} className={`${property === "Chicago" ? " block" : " hidden"} w-[400px]`}></img>
                            <img src={property3} className={`${property === "Los Angeles" ? " block" : " hidden"} w-[400px]`}></img>
                        </div>

                        {property === "-- Select a location --" &&
                            <div className="flex gap-2">
                                <img src={property1} className={`w-[400px]`}></img>
                                <img src={property2} className={`w-[400px]`}></img>
                                <img src={property3} className={`w-[400px]`}></img>
                            </div>}



                        <div className="flex gap-2">
                            <img src={property4} className={`${property === "Los Angeles" ? " block" : " hidden"} w-[400px]`}></img>
                            <img src={property5} className={`${property === "San Diego" ? " block" : " hidden"} w-[400px]`}></img>
                            <img src={property6} className={`${property === "San Diego" ? " block" : " hidden"} w-[400px]`}></img>
                        </div>

                        {property === "-- Select a location --" &&
                            <div className="flex gap-2">
                                <img src={property4} className={`w-[400px]`}></img>
                                <img src={property5} className={`w-[400px]`}></img>
                                <img src={property6} className={`w-[400px]`}></img>
                            </div>}


                    </div>

                </div>

            </div>





        </div>
    )
}

export default Home