import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'
import heart from '../../images/heart.png';
import home_about from '../../images/home_about.jpg';
import spcial from '../../images/spcial.png';
import sec07img1 from '../../images/avtar.png';

class LookingForSomethingSpecial extends Component {
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
        wpPage(id: {eq: "cG9zdDo4"}) {
    id
    homePageInfo {
      fieldGroupName
      lookingForSomethingSpecial {
        desc
        fieldGroupName
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
		<>
		<section className="sec06 pt pb">
				<div className="container">
				  <div className="row">
					<div className="col-md-12">
					  <div className="funct_data">
						<div className="div_fun opsit_data">
						  <img src={data.wpPage.homePageInfo.lookingForSomethingSpecial.image.sourceUrl} alt="spcial" className="img-fluid" />
						</div>
						<div className="function_details left_side">

						  <h2 className="heading_sub">{data.wpPage.homePageInfo.lookingForSomethingSpecial.title}</h2>
						  <p>{data.wpPage.homePageInfo.lookingForSomethingSpecial.desc}</p>
						 

						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </section>
		</>
    )}
  />
			
        </>
		);
    }
}

export default LookingForSomethingSpecial;



