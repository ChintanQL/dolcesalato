import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'
import heart from '../../images/heart.png';
import home_about from '../../images/home_about.jpg';
import spcial from '../../images/spcial.png';
import sec07img1 from '../../images/avtar.png';

class AboutUs extends Component {
    render() {
        const responsive3 = {
			0: { items: 1 },
			1024: { items: 1 },
		};
        return (
		<>
			<StaticQuery
    query={graphql`
      query {
        wpPage(id: {eq: "cG9zdDoxNDI="}) {
    id
    aboutPageInfo {
      desc
      fieldGroupName
      pageTitle
      image {
        sourceUrl
      }
    }
  }
      }
    `}
    render={data => (
		<>
		<section class="sec11 pt pb">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="our_contact ">
              <div class="title_b">
                <h2 class="heading_sub clr_black ">{data.wpPage.aboutPageInfo.pageTitle}</h2>
                <p class="pb_30 pt_30" dangerouslySetInnerHTML={{ __html: data.wpPage.aboutPageInfo.desc}} />
                
              </div>
              
          </div>
        
          
        </div>
        <div class="col-md-6">
            <div class="image_contact">
              <img src={data.wpPage.aboutPageInfo.image.sourceUrl} alt="about_us"/> 
            </div>
          </div>
      </div>
    </div></section>
		</>
    )}
  />
			
        </>
		);
    }
}

export default AboutUs;



