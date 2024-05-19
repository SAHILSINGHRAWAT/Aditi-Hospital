import React from 'react';
import lung from "./../../../assets/images/lungs-solid.svg";
import heart from "./../../../assets/images/heart-solid.svg";
import pregnant from "./../../../assets/images/person-pregnant-solid.svg";
import bone from "./../../../assets/images/bone-solid.svg";
import virus from "./../../../assets/images/viruses-solid.svg";
import baby from "./../../../assets/images/baby-solid.svg";


function BasicServices() {
  return (
    <section className="bg-[url('./assets/images/hero-bg.png')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-full leading-[100px] " id="services">
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
              <div className="col-lg-2 col-md-4 transform transition-transform hover:border-r-4 hover:border-b-4 hover:scale-110" onClick={() => window.location.href = "http://www.google.com/covid-19"}>
                <div className="icon-text p-4 pb-3 text-center shadow">
                  <img src={virus} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold">Covid-19 Test</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4" onClick={() => window.location.href = "https://www.google.com/search?q=pediatrics&oq=pediatrics&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABixAxiABDINCAIQABixAxjJAxiABDINCAMQABiSAxiABBiKBTINCAQQABiSAxiABBiKBTIKCAUQABixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIHCAgQABiABDINCAkQABiDARixAxiABNIBCTY3MzhqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"}> 
                <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
                  <img src={baby} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold text-light">Pediatrics</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4" onClick={() => window.location.href = "https://www.google.com/search?q=heart+caring&oq=heart+caring&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIICAgQABgWGB4yCAgJEAAYFhge0gEJMTI0NTdqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8"}>
                <div className="icon-text p-4 pb-3 text-center shadow">
                  <img src={heart} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold">Heart Caring</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4" onClick={() => window.location.href = "https://www.google.com/search?q=orthopedic&oq=orthopedic&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIKCAEQABiSAxiABDINCAIQABiSAxiABBiKBTINCAMQABixAxjJAxiABDIHCAQQABiABDIHCAUQABiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIHCAkQABiPAtIBCTU5NzZqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"}>
                <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
                  <img src={bone} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold text-light">Orthopedic</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform hover:scale-110 hover:border-r-4 hover:border-b-4" onClick={() => window.location.href = "https://www.google.com/search?q=obstetrics&sca_esv=dc1b946dcae22bbc&ei=ORA9ZoC4I_7e2roPrb-xmA8&oq=obstetrics&gs_lp=Egxnd3Mtd2l6LXNlcnAiCm9ic3RldHJpY3MqAggAMg0QABiABBixAxhDGIoFMggQABiABBixAzINEAAYgAQYsQMYQxiKBTIFEAAYgAQyChAAGIAEGEMYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQLhiABEj-IFAAWK0WcAF4AZABAJgB1wGgAcgOqgEFMC44LjK4AQPIAQD4AQGYAgugAo0PqAIUwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQLCAhYQLhgDGLQCGOUCGOoCGIwDGI8B2AECwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAZgDEroGBAgBGAe6BgYIAhABGAqSBwUxLjcuM6AHjjw&sclient=gws-wiz-serp"}>
                <div className="icon-text p-4 pb-3 text-center shadow">
                  <img src={pregnant} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold">obstetrics</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 transform transition-transform  hover:scale-110 hover:border-r-4 hover:border-b-4" onClick={() => window.location.href = "https://www.google.com/search?q=lungs&sca_esv=dc1b946dcae22bbc&ei=jhA9Zu3yF8G70-kPz6WmmAU&ved=0ahUKEwjt8YKvlIGGAxXB3TQHHc-SCVMQ4dUDCBA&uact=5&oq=lungs&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWx1bmdzMg4QABiABBiRAhixAxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIIEAAYgAQYsQMyDRAAGIAEGLEDGEMYigUyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDSJswUHxYoCtwAXgBkAEAmAH8AaABxgOqAQMyLTK4AQPIAQD4AQL4AQGYAgOgAtwDwgIKEAAYsAMY1gQYR8ICBRAhGKABmAMAiAYBkAYIkgcFMS4wLjKgB-UI&sclient=gws-wiz-serp"}>
                <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
                  <img src={lung} alt=" " className="h-24 w-24 object-contain"/>
                  <p className="mt-4 font-semibold text-light">Lungs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default BasicServices;