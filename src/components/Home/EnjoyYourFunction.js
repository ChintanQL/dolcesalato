import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'
import heart from '../../images/heart.png';
import home_about from '../../images/home_about.jpg';

class EnjoyYourFunction extends Component {
    render() {
        const responsive3 = {
    0: { items: 1 },
    1024: { items: 1 },
  };
        return (
		<>
		
		
		
           
		  
		  <section className="sec01 main_banner">
            <div className="home-demo">
              <div className="main_section">
                <StaticQuery
    query={graphql`
      query {
        wpPage(id: {eq: "cG9zdDo4"}) {
    id
    homePageInfo {
      fieldGroupName
      enjoyYourFunction {
        fieldGroupName
        locations
        productsTotal
        serviceYear
        smallDesc
        smallTitle
        subDesc
        subTitle
        title
		image {
          sourceUrl
        }
      }
    }
  }
      }
    `}
    render={data => (
		<section className="sec02 pt pb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="head_sec">
                    <h2 className="heading_sub text-center">{data.wpPage.homePageInfo.enjoyYourFunction.title}</h2>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="main_counter">
                    <ul>
                      <li>
                        <div className="our_data">
                          <h3>{data.wpPage.homePageInfo.enjoyYourFunction.serviceYear}</h3>
                          <p>In Service</p>
                        </div>
                      </li>
                      <li>
                        <div className="our_data">
                          <h3>{data.wpPage.homePageInfo.enjoyYourFunction.productsTotal}</h3>
                          <p>Products </p>
                        </div>
                      </li>
                      <li>
                        <div className="our_data">
                          <h3>{data.wpPage.homePageInfo.enjoyYourFunction.locations}</h3>
                          <p>Locations</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pt">
                <div className="col-md-6">
                  <div className="img_about">
                    <img src={data.wpPage.homePageInfo.enjoyYourFunction.image.sourceUrl} alt="home_about" className="img-fluid" />
                    <div className="our_typo">
                      <div className="hear_list">
                        <div className="hear_icon">
                          <img src={heart} alt="heart" className="img-fluid" />
                        </div>
                        <div className="con_hjeart">
                          <h4>{data.wpPage.homePageInfo.enjoyYourFunction.smallTitle}</h4>
                          <p>{data.wpPage.homePageInfo.enjoyYourFunction.smallDesc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="our_about">
                    <div className="head_sec_f">
                      <h2 className="heading_sub">{data.wpPage.homePageInfo.enjoyYourFunction.subTitle}</h2>
                      <p>{data.wpPage.homePageInfo.enjoyYourFunction.subDesc}</p>
                      <div className="button_design pt">
                        <Link to="app/about">Explore More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )}
  />
              </div>
            </div>
          </section>
		  
		  
        </>

);
    }
}

export default EnjoyYourFunction;



