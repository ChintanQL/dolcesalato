import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'


class Slider extends Component {
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
       allWpSlider {
    edges {
      node {
        id
        sliderInfo {
          buttonUrl
          fieldGroupName
          smallTitle
          title
		  sliderImage {
            sourceUrl
          }
        }
      }
    }
  }
      }
    `}
    render={data => (
		<AliceCarousel autoPlay autoPlayInterval="2000" infinite responsive={responsive3}>
		
      
						{data &&
				data.allWpSlider &&
				data.allWpSlider.edges &&
				data.allWpSlider.edges.map(
                (prop,i) => {
					return (
						<div className="item">
                    <div className="image_abnner">
                      <div className="inner_baner">
                        <div className="img_write">
                          <img src={prop.node.sliderInfo.sliderImage.sourceUrl} className="sliderimg" />
                        </div>
                        <div className="inner_dr">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="our_data_list">
                                  <div className="our_contetn">
                                    <p>{prop.node.sliderInfo.smallTitle}</p>
                                    <h1>{prop.node.sliderInfo.title}</h1>
                                    <div className="button_design">
                                      <a href={prop.node.sliderInfo.buttonUrl}>Enquire Now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>	
						
							
					
					)
                }
              )}		
	</AliceCarousel>
    )}
  />
              </div>
            </div>
          </section>
		  
		  
        </>

);
    }
}

export default Slider;



