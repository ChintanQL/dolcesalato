import React from "react"
import { Link } from "gatsby"


import slider1 from '../images/slider1.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Layout from "../components/layout"
import Slider from "../components/Home/Slider"
import EnjoyYourFunction from "../components/Home/EnjoyYourFunction"
import Products from "../components/Home/Products"
import LookingForSomethingSpecial from "../components/Home/LookingForSomethingSpecial"

import heart from '../images/heart.png';
import home_about from '../images/home_about.jpg';
import range01 from '../images/range01.png';
import range02 from '../images/range02.png';
import range03 from '../images/range03.png';
import new1 from '../images/new1.png';
import new2 from '../images/new2.png';
import new3 from '../images/new3.png';
import new4 from '../images/new4.png';
import spcial from '../images/spcial.png';
import sec07img1 from '../images/avtar.png';


export default function Home() {



  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  const responsive2 = {
    0: { items: 1 },
    767: { items: 2 },
    1024: { items: 4 },
  };
  const responsive3 = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (

    <Layout>



      <>
        <div className="main">
          <Slider/>
          <EnjoyYourFunction/>
          <Products/>
          
          <section className="sec03 pt pb">
            <div className="container">
              <div className="row">
                
                
                
                
              </div>
              <div className="row pt">
                <div className="col-md-12">
                  <div className="our_new">
                    <h2 className="heading_sub">Whats new at Dolce & Salato</h2>
                    <p>The coffee is brewed by first roasting the green coffee beans over <br /> hot coals in a brazier.</p>
                  </div>
                </div>
              </div>
              <div className="row_whatsne_slider">
                <AliceCarousel autoPlay autoPlayInterval="2000" infinite responsive={responsive2}>

                  <div className="item">
                    <div className="new_data_main">
                      <div className="mian_new_data">
                        <img src={new1} alt="new1" className="img-fluid" />
                      </div>
                      <div className="our_new_contetn">
                        <h4 className="heading_four">Christmas Panettone</h4>
                        <p className="para_con">Panettone has become the typical Italian Christmas dessert</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="new_data_main">
                      <div className="mian_new_data">
                        <img src={new2} alt="new2" className="img-fluid" />
                      </div>
                      <div className="our_new_contetn">
                        <h4 className="heading_four">Cicerchiata</h4>
                        <p className="para_con">Panettone has become the typical Italian Christmas dessert</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="new_data_main">
                      <div className="mian_new_data">
                        <img src={new3} alt="new3" className="img-fluid" />
                      </div>
                      <div className="our_new_contetn">
                        <h4 className="heading_four">Fruit Mince Pies</h4>
                        <p className="para_con">Panettone has become the typical Italian Christmas dessert</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="new_data_main">
                      <div className="mian_new_data">
                        <img src={new4} alt="new4" className="img-fluid" />
                      </div>
                      <div className="our_new_contetn">
                        <h4 className="heading_four">Panforte</h4>
                        <p className="para_con">Panettone has become the typical Italian Christmas dessert</p>
                      </div>
                    </div>
                  </div>
                </AliceCarousel>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="button_design pt">
                    <Link to="/app/whatsnew">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <LookingForSomethingSpecial/>
          
        </div>
      </>
    </Layout>

  )
}