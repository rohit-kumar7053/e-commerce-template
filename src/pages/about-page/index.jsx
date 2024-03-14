/** @format */

import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import VideoPlayer from "../../components/video-player";

const About = () => {
    return (
        <section>
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <div className="h-screen w-full flex justify-center items-center">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className=" h-full w-full"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-full flex justify-center items-center text-white">
                                {/* Banner Section */}
                                <img
                                    src="../src/assets/local-images/slideshow-about.webp"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                                {/* Banner Content Section  */}
                                <div className="absolute flex flex-col items-center justify-start p-10 w-3/4 h-full">
                                    <div className="flex text-center item-center gap-3 pt-10">
                                        <img
                                            src="../src/assets/local-images/round_profil4.webp"
                                            alt="Profile"
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                        <div className="flex flex-col text-center">
                                            <h2 className="text-lg font-medium mt-4">
                                                Annie.L
                                            </h2>
                                            <h3 className="text-sm font-light">
                                                Managing Director
                                            </h3>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-bold py-10">
                                        Cosmo de Milance
                                    </h3>
                                    <p className="text-sm flex justify-center items-center text-center">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cupiditate architecto
                                        illo sapiente alias voluptas, distinctio
                                        enim quas veniam, harum necessitatibus
                                        culpa maiores deleniti, doloremque
                                        beatae dolores deserunt quae fuga ab!
                                        provident perferendis
                                    </p>
                                    <button className="cursor-pointer font-bold py-2 mt-12 w-72 text-white hover:bg-black hover:text-white border border-white hover:border-black">
                                        MEET THE TEAM
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-full flex justify-center items-center text-white">
                                {/* Banner Section */}
                                <img
                                    src="../src/assets/local-images/slideshow-about.webp"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                                {/* Banner Content Section  */}
                                <div className="absolute flex flex-col items-center justify-start p-10 w-3/4 h-full">
                                    <div className="flex text-center item-center gap-3 pt-10">
                                        <img
                                            src="../src/assets/local-images/round_profil.webp"
                                            alt="Profile"
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                        <div className="flex flex-col text-center">
                                            <h2 className="text-lg font-medium mt-4">
                                                Annie.L
                                            </h2>
                                            <h3 className="text-sm font-light">
                                                Managing Director
                                            </h3>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-bold py-10">
                                        Cosmo de Milance
                                    </h3>
                                    <p className="text-sm flex justify-center items-center text-center">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cupiditate architecto
                                        illo sapiente alias voluptas, distinctio
                                        enim quas veniam, harum necessitatibus
                                        culpa maiores deleniti, doloremque
                                        beatae dolores deserunt quae fuga ab!
                                        provident perferendis
                                    </p>
                                    <button className="cursor-pointer font-bold uppercase py-2 mt-12 w-72 text-white hover:bg-black hover:text-white border border-white hover:border-black">
                                        shop now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-full flex justify-center items-center text-white">
                                {/* Banner Section */}
                                <img
                                    src="../src/assets/local-images/slideshow-about.webp"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                                {/* Banner Content Section  */}
                                <div className="absolute flex flex-col items-center justify-start p-10 w-3/4 h-full">
                                    <div className="flex text-center item-center gap-3 pt-10">
                                        <img
                                            src="../src/assets/local-images/round_profil3.webp"
                                            alt="Profile"
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                        <div className="flex flex-col text-center">
                                            <h2 className="text-lg font-medium mt-4">
                                                Annie.L
                                            </h2>
                                            <h3 className="text-sm font-light">
                                                Managing Director
                                            </h3>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-bold py-10">
                                        Cosmo de Milance
                                    </h3>
                                    <p className="text-sm flex justify-center items-center text-center">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cupiditate architecto
                                        illo sapiente alias voluptas, distinctio
                                        enim quas veniam, harum necessitatibus
                                        culpa maiores deleniti, doloremque
                                        beatae dolores deserunt quae fuga ab!
                                        provident perferendis
                                    </p>
                                    <button className="cursor-pointer font-bold uppercase py-2 mt-12 w-72 text-white hover:bg-black hover:text-white border border-white hover:border-black">
                                        More about us
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-full flex justify-center items-center text-white">
                                {/* Banner Section */}
                                <img
                                    src="../src/assets/local-images/slideshow-about.webp"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                                {/* Banner Content Section  */}
                                <div className="absolute flex flex-col items-center justify-start p-10 w-3/4 h-full">
                                    <div className="flex text-center item-center gap-3 pt-10">
                                        <img
                                            src="../src/assets/local-images/round_profil2.webp"
                                            alt="Profile"
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                        <div className="flex flex-col text-center">
                                            <h2 className="text-lg font-medium mt-4">
                                                Annie.L
                                            </h2>
                                            <h3 className="text-sm font-light">
                                                Managing Director
                                            </h3>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-bold py-10">
                                        Cosmo de Milance
                                    </h3>
                                    <p className="text-sm flex justify-center items-center text-center">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cupiditate architecto
                                        illo sapiente alias voluptas, distinctio
                                        enim quas veniam, harum necessitatibus
                                        culpa maiores deleniti, doloremque
                                        beatae dolores deserunt quae fuga ab!
                                        provident perferendis
                                    </p>
                                    <button className="cursor-pointer font-bold uppercase py-2 mt-12 w-72 text-white hover:bg-black hover:text-white border border-white hover:border-black">
                                        shop now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* Bread Crumbs Section */}
                <div className="mx-12 mt-16">
                    <div className="flex justify-center gap-2 p-3 text-sm text-gray-400">
                        <h4>Home</h4>
                        <span>{">"}</span>
                        <h2>About Us 1</h2>
                    </div>
                </div>
                <div className="mx-12">
                    {/* About Us Section */}
                    <div className="flex justify-center text-gray-600">
                        <div className="flex flex-col justify-center items-center text-center pb-10 w-3/5">
                            <h2 className="py-5 font-bold">ABOUT US 1</h2>
                            <p className="font-thin text-sm">
                                Cosmo lacus meleifend menean diverra loremous.
                                Nullam sit amet orci rutrum risus laoreet semper
                                vel non magna. Mauris vel sem a lectus vehicula
                                ultricies. Etiam semper sollicitudin lectus
                                indous scelerisque.
                            </p>
                        </div>
                    </div>
                    {/* Dress Section  */}
                    <div className="flex justify-between gap-3 my-10 p-2">
                        <div className="flex flex-col item-center text-center gap-5">
                            <div className="flex justify-center items-center text-center">
                                <img
                                    src="../src/assets/local-images/dress-hanger.webp"
                                    alt=""
                                    className=""
                                />
                            </div>

                            <h1 className="flex justify-center font-bold text-2xl">
                                {" "}
                                Lorem De Dorus
                            </h1>
                            <p className="text-sm px-1">
                                Nullam aliquet vestibulum augue non varius. Cras
                                cosmo congue an melitos. Duis tristique del
                                maliquam.
                            </p>
                            <span className="underline decoration-1 underline-offset-4 text-sm">
                                Learn How
                            </span>
                        </div>
                        <div className="flex flex-col item-center text-center gap-5">
                            <div className="flex justify-center items-center text-center">
                                <img
                                    src="../src/assets/local-images/dress-stand.webp"
                                    alt=""
                                    className=""
                                />
                            </div>

                            <h1 className="flex justify-center font-bold text-2xl">
                                {" "}
                                Milancelos Lanos
                            </h1>
                            <p className="text-sm px-1">
                                Nullam aliquet vestibulum augue non varius. Cras
                                cosmo congue an melitos. Duis tristique del
                                maliquam.
                            </p>
                            <span className="underline decoration-1 underline-offset-4 text-sm">
                                Read Full Story
                            </span>
                        </div>
                        <div className="flex flex-col item-center text-center gap-5">
                            <div className=" flex justify-center items-center text-center">
                                <img
                                    src="../src/assets/local-images/dress-tap.webp"
                                    alt=""
                                    className=""
                                />
                            </div>

                            <h1 className="flex justify-center font-bold text-2xl">
                                {" "}
                                Como A Milano
                            </h1>
                            <p className="text-sm px-1">
                                Nullam aliquet vestibulum augue non varius. Cras
                                cosmo congue an melitos. Duis tristique del
                                maliquam.
                            </p>
                            <span className="underline decoration-1 underline-offset-4 text-sm">
                                Learn How
                            </span>
                        </div>
                    </div>
                    {/* About Store */}
                    <div className="h-full w-full flex justify-center items-center">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            // direction={"vertical"}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className=" h-full w-full"
                        >
                            <SwiperSlide>
                                <div className="flex items-center justify-between text-center">
                                    <div className="flex justify-between my-10">
                                        <div className="w-1/2 flex flex-col justify-start text-start bg-stone-100">
                                            <div className="w-3/4 ml-20 my-32">
                                                <h2 className="font-extrabold tracking-wide text-2xl mb-10">
                                                    ABOUT STORE
                                                </h2>
                                                <p className="tracking-wide leading-relaxed text-sm mb-5">
                                                    Lorem ipsum dolor, sit amet
                                                    consectetur adipisicing
                                                    elit. Aut sapiente suscipit
                                                    laborum tempore. Ratione, ut
                                                    iste expedita labore minus
                                                    esse laborum fugiat fugit!
                                                    Voluptatum impedit quidem
                                                    doloremque perspiciatis,
                                                    magnam voluptates!, saepe!
                                                    In consequuntur laborum
                                                    quis, perferendis atque
                                                    placeat. Dolorem
                                                    perferendis?
                                                </p>
                                                <div className="justify-start text-start">
                                                    <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                                        EXPLORE SHOP
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 bg-white flex justify-center items-center">
                                            <div className="image-card relative overflow-hidden w-full h-full">
                                                <img
                                                    src="../src/assets/local-images/about-store.webp"
                                                    alt=""
                                                    className="object-cover transition-transform duration-1000 transform hover:scale-105"
                                                />
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <VideoPlayer />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-between text-center">
                                    <div className="flex justify-between my-10">
                                        <div className="w-1/2 bg-white flex justify-center items-center">
                                            <div className="image-card relative overflow-hidden w-full h-full">
                                                <img
                                                    src="../src/assets/local-images/about-store.webp"
                                                    alt=""
                                                    className="object-cover transition-transform duration-1000 transform hover:scale-105"
                                                />
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <VideoPlayer />
                                                </div>{" "}
                                            </div>
                                        </div>
                                        <div className="w-1/2 flex flex-col justify-start text-start bg-stone-100">
                                            <div className="w-3/4 ml-20 my-32">
                                                <h2 className="font-extrabold tracking-wide text-2xl mb-10">
                                                    ABOUT STORE
                                                </h2>
                                                <p className="tracking-wide leading-relaxed text-sm mb-5">
                                                    Lorem ipsum dolor, sit amet
                                                    consectetur adipisicing
                                                    elit. Aut sapiente suscipit
                                                    laborum tempore. Ratione, ut
                                                    iste expedita labore minus
                                                    esse laborum fugiat fugit!
                                                    Voluptatum impedit quidem
                                                    doloremque perspiciatis,
                                                    magnam voluptates!, saepe!
                                                    In consequuntur laborum
                                                    quis, perferendis atque
                                                    placeat. Dolorem
                                                    perferendis?
                                                </p>
                                                <div className="justify-start text-start">
                                                    <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                                        EXPLORE SHOP
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-between text-center">
                                    <div className="flex justify-between my-10">
                                        <div className="w-1/2 flex flex-col justify-start text-start bg-stone-100">
                                            <div className="w-3/4 ml-20 my-32">
                                                <h2 className="font-extrabold tracking-wide text-2xl mb-10">
                                                    ABOUT STORE
                                                </h2>
                                                <p className="tracking-wide leading-relaxed text-sm mb-5">
                                                    Lorem ipsum dolor, sit amet
                                                    consectetur adipisicing
                                                    elit. Aut sapiente suscipit
                                                    laborum tempore. Ratione, ut
                                                    iste expedita labore minus
                                                    esse laborum fugiat fugit!
                                                    Voluptatum impedit quidem
                                                    doloremque perspiciatis,
                                                    magnam voluptates!, saepe!
                                                    In consequuntur laborum
                                                    quis, perferendis atque
                                                    placeat. Dolorem
                                                    perferendis?
                                                </p>
                                                <div className="justify-start text-start">
                                                    <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                                        EXPLORE SHOP
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 bg-white flex justify-center items-center">
                                            <div className="image-card relative overflow-hidden w-full h-full">
                                                <img
                                                    src="../src/assets/local-images/about-store.webp"
                                                    alt=""
                                                    className="object-cover transition-transform duration-1000 transform hover:scale-105"
                                                />
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <VideoPlayer />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                {/* Contact Store */}
                <div className="flex items-center justify-between text-center my-20 mx-8">
                    <div className="flex justify-between w-full">
                        <div className="w-1/2 bg-white flex justify-center items-center">
                            <div className="image-card relative overflow-hidden w-full h-full">
                                <img
                                    src="../src/assets/local-images/about-contact.webp"
                                    alt=""
                                    className="object-cover w-full h-full transition-transform duration-1000 transform hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 bg-white flex flex-col justify-start text-start">
                            <div className="pl-20 pt-20 bg-stone-200 h-screen">
                                <h2 className="flex text-2xl font-bold tracking-wide ml-5 mb-5">
                                    Contact Us
                                </h2>
                                <div className="flex justify-between p-2 w-full">
                                    <div className="h-full">
                                        <div className="flex gap-3 mb-2">
                                            <span className="text-2xl">
                                                <RiMessage2Fill />
                                            </span>
                                            <span className="text-xs">
                                                TEXT: 091-123-ELLA
                                            </span>
                                        </div>
                                        <div className="flex justify-start items-center text-center gap-3 mb-8">
                                            <span className="text-2xl">
                                                <MdEmail />
                                            </span>
                                            <span className="text-xs">
                                                email@domain.com
                                            </span>
                                        </div>

                                        <p className="text-gray-600 text-xs font-normal leading-6">
                                            685 Market Street
                                            <br />
                                            San Francisco, CA 94105,
                                            <br />
                                            United States
                                        </p>
                                        <ul className="list-inside text-gray-600 mt-4 text-xs font-normal leading-6">
                                            <li>OPENING HOURS</li>
                                            <li className="w-56">
                                                MON to SAT: 9:00 AM - 10:00 PM
                                            </li>
                                            <li>SUN: 10:00 AM - 6:00 PM</li>
                                        </ul>
                                    </div>
                                    <div className="border-b border-gray-300 bg-black w-1 mx-6 h-68"></div>
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="">
                                            <button className="bg-white hover:bg-black hover:text-white text-black border border-black hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                                LIVE CHAT
                                            </button>
                                            <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                                CONTACT US
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default About;
