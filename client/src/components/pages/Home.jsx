import React, { useEffect, useState } from 'react';
import heroimg1 from "../../assets/images/hero-img01.png";
import heroimg2 from "../../assets/images/hero-img02.png";
import heroimg3 from "../../assets/images/hero-img03.png";
import icon1 from "../../assets/images/icon01.png";
import icon2 from "../../assets/images/icon02.png";
import icon3 from "../../assets/images/icon03.png";
import {Link} from 'react-router-dom';
import {BsArrowBarRight } from 'react-icons/bs';
import About from "../About";
import lung from "../../assets/images/lungs-solid.svg";
import heart from "../../assets/images/heart-solid.svg";
import pregnant from "../../assets/images/person-pregnant-solid.svg";
import bone from "../../assets/images/bone-solid.svg";
import virus from "../../assets/images/viruses-solid.svg";
import tooth from "../../assets/images/tooth-solid.svg";

function Home() {
  const [val , setval]=useState({
    year: 0,
    clinical: 0,
    patient: 0,
  });

  useEffect(()=>{
    const yid=setInterval(()=>{
        setval((prev)=>{
          if(prev.year+1>30){
            clearInterval(yid);
            return prev;
          }
          return {...prev, year: prev.year+1}
        });
    },30);

    const cid=setInterval(()=>{
      setval((prev)=>{
        if(prev.clinical+1>15){
          clearInterval(cid);
          return prev;
        }
        return {...prev, clinical: prev.clinical+1}
      });
    },30);


    const pid=setInterval(()=>{
      setval((prev)=>{
        if(prev.patient+1>15){
          clearInterval(pid);
          return prev;
        }
        return {...prev, patient: prev.patient+1}
      });
    },30);
    
    return()=>{
      clearInterval(yid);
      clearInterval(pid);
      clearInterval(cid);
    }
  },[]);


  return (
    <>
      {/* hero section */}

      <section className="hero_section pt-[0px] 2xl:h-[600px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
                md:leading-[70px]">
                  We Help patients live a Healthy, longer Life.
                </h1>
                <p className='text_para'>
                Welcome to Aditi Hospital, where compassionate care meets cutting-edge technology. Our state-of-the-art facility offers diverse medical services, tailored to your needs. With a team of skilled professionals dedicated to personalized treatment, we prioritize your well-being. Experience the difference at Aditi Hospital, where you come first
                </p>
                <button className="btn ">Request an Appointment</button>
              </div>


                {/* hero countter */}
                <div className="mt-[20px] lg:mt-[20px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                   <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                        {val.year}
                        {val.year===30 && <span>+</span>}
                      </h2>
                      <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Years of Experience</p>
                   </div>
                   <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                        {val.clinical}
                        {val.clinical===15 && <span>+</span>}
                      </h2>
                      <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Clinical Experience</p>
                   </div>
                   <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                        {val.patient}
                        {val.patient===15 && <span>+</span>}
                      </h2>
                      <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Patient's Satisfaction</p>
                   </div>
                </div>
            </div>
            <div className='flex gap-[30px] justify-end '>
              <div>
                <img className="w-full mt-[30px]" src={heroimg1} alt="hero1" />
              </div>
              <div className='mt-[10px]'>
                <img className="w-full mb-[30px]" src={heroimg2} alt="hero1" />
                <img className="w-full" src={heroimg3} alt="hero1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION KHATAM  */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className='heading text-center'>
              Providing the  Best Medical Services
            </h2>
            <p className='text-para text-center mt-4 font-[500] text-[20px]'>
              World Class care for Everyone. our Healthsystem offers unmatched , expert health care. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:[mt-55px] ">
              <div className="py-[30px] px-5 w-[400px]">
                    <div className="flex items-center justify-center">
                      <img src={icon1} alt=" "/>
                    </div>
                    <div className="mt-[10px]">
                      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find A Doctor</h2>
                      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      Experience unparalleled care with cutting-edge facilities and personalized treatment from our expert team. Trust us to blend compassion with innovation for your well-being.    
                      </p>
                      <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                          <BsArrowBarRight className='group-hover:text-white w-6 h-5'/>
                      </Link>
                    </div>
              </div>
              <div className="py-[30px] px-5 w-[400px]">
                    <div className="flex items-center justify-center">
                      <img src={icon3} alt=" "/>
                    </div>
                    <div className="mt-[10px]">
                      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book An Appointment</h2>
                      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      Secure your appointment hassle-free with our streamlined booking system. Enjoy convenience and peace of mind as you schedule your visit with just a few clicks.
                      </p>
                      <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                          <BsArrowBarRight className='group-hover:text-white w-6 h-5'/>
                      </Link>
                    </div>
              </div>
              <div className="py-[30px] px-5 w-[400px]">
                    <div className="flex items-center justify-center">
                      <img src={icon2} alt=" "/>
                    </div>
                    <div className="mt-[10px]">
                      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Navigate Us</h2>
                      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      Effortlessly navigate through our user-friendly platform for streamlined access to comprehensive healthcare resources.Reach us out!
                      </p>
                      <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                          <BsArrowBarRight className='group-hover:text-white w-6 h-5'/>
                      </Link>
                    </div>
              </div>
          </div>
        </div>
      </section>
      <About></About>
      <section className="bg-[url('./assets/images/hero-bg.png')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-full leading-[100px]" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-header text-center">
                <h1 className=" text-5xl font-bold mb-4">Health services for you</h1>
                <p className='text-lg font-bold '>We are always here to listen and understand</p>
              </div>
            </div>
          </div>
          <div className="about-content mt-20">
            <div className="row flex justify-center gap-20">
              <div className="col-lg-2 col-md-4 transform transition-transform hover:border-r-4 hover:border-b-4 hover:scale-110 ">
                <div className="icon-text p-4 pb-3 text-center shadow">
                  <img src={virus} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold">Covid-19 Test</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4"> 
                <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
                  <img src={tooth} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold text-light">Dental Care</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4">
                <div className="icon-text p-4 pb-3 text-center shadow">
                  <img src={heart} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold">Heart Caring</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4">
                <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
                  <img src={bone} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold text-light">Orthopedic</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4">
                <div className="icon-text p-4 pb-3 text-center shadow">
                  <img src={pregnant} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold">obstetrics</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform  hover:scale-110 hover:border-r-4 hover:border-b-4">
                <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
                  <img src={lung} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold text-light">Lungs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
export default Home;