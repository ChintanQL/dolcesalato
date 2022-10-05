import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'


class Review extends Component {
    render() {
        const responsive3 = {
    0: { items: 1 },
    1024: { items: 1 },
  };
        return (
		<>
		
		
		
           <section className="sec07 pt pb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="rev_desig">
                    <h2 className="heading_sub">Our Reviews</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                
				
				<StaticQuery
    query={graphql`
      query {
        allWpOurReviews {
    edges {
      node {
        id
        reviewInfo {
          fieldGroupName
          name
          review
		  image {
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
				data.allWpOurReviews &&
				data.allWpOurReviews.edges &&
				data.allWpOurReviews.edges.map(
                (prop,i) => {
					return (
							
						<div className="item">
                    <div className="our_reviw">
                      <div className="rev_data_in">
                        <div className="img_data_review">
                          <img src={prop.node.reviewInfo.image.sourceUrl} alt="avtar" className="img-fluid" />

                        </div>
                        <div className="name_clit">
                          <p>{prop.node.reviewInfo.name}</p>
                        </div>
                      </div>
                      <div className="revi_cont">
                        <p>{prop.node.reviewInfo.review}</p>
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

export default Review;



