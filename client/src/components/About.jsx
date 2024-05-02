import React from 'react'
import aboutImg from '../assets/images/about.png';
function About() {
  return (
    <section>
        <div className="container">
            <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                        {/* image about */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt="aboutimg" />
                    </div>
           
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className='heading text-center  mb-8'>Proud to be Mumbai's best </h2>
              <p className="text_para font-[600] ">For the past three decades, our unwavering commitment to excellence has propelled us to unparalleled success. With a legacy of thirty years of exemplary service, we have continuously raised the bar in healthcare provision, earning the trust of the community we serve. 
              Our enduring dedication and proven track record make us the cornerstone of medical excellence in Mumbai.</p>
              <p className="text_para font-[600] mt-5">For the past three decades, our unwavering commitment to excellence has propelled us to unparalleled success. With a legacy of thirty years of exemplary service, we have continuously raised the bar in healthcare provision, earning the trust of the community we serve. 
              Our enduring dedication and proven track record make us the cornerstone of medical excellence in Mumbai.</p>
              <p className="text_para font-[600] mt-5">For the past three decades, our unwavering commitment to excellence has propelled us to unparalleled success. With a legacy of thirty years of exemplary service, we have continuously raised the bar in healthcare provision, earning the trust of the community we serve. 
              Our enduring dedication and proven track record make us the cornerstone of medical excellence in Mumbai.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About;