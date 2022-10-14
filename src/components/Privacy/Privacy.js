import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'
import heart from '../../images/heart.png';
import home_about from '../../images/home_about.jpg';
import spcial from '../../images/spcial.png';
import sec07img1 from '../../images/avtar.png';

class Privacy extends Component {
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
        wpPage(id: {eq: "cG9zdDoz"}) {
    id
    title
    content
  }
      }
    `}
    render={data => (
		<>
		<section class="sec11 pt pb">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="our_contact ">
              <div class="title_b">
                
                <div class="pb_30 pt_30" dangerouslySetInnerHTML={{ __html: data.wpPage.content}} />
                
              </div>
              
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

export default Privacy;



