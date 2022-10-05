import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'
import range01 from '../../images/range01.png';
import range02 from '../../images/range02.png';
import range03 from '../../images/range03.png';

class Products extends Component {
    render() {
        const responsive3 = {
    0: { items: 1 },
    1024: { items: 1 },
  };
        return (
		<>
		
		
		
           
		  
		  <section className="sec03 pt pb">
            <div className="container">
              <div className="row">
                
				
				<StaticQuery
    query={graphql`
      query {
        wpPage(id: {eq: "cG9zdDo4"}) {
    id
    homePageInfo {
      fieldGroupName
      productCategories {
        category
        categoryDesc
        fieldGroupName
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
				{data &&
				data.wpPage &&
				data.wpPage.homePageInfo &&
				data.wpPage.homePageInfo.productCategories &&
				data.wpPage.homePageInfo.productCategories.map(
                (prop,i) => {
					return (
						<div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="our_product">
                    <Link to={"/product-category/"+prop.category}>
                      <div className="image_t">
                        <img src={prop.image.sourceUrl} alt="range01" className="img-fluid" />
                      </div>
                      <div className="cont_categroy">
                        <div className="inner_cate">
                          <h2> {prop.category} </h2>
                          <p>{prop.categoryDesc}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
						
							
					
					)
                }
              )}
		
		</>
    )}
  />
				
				
				
               
                
              </div>
              </div>
              </section>
		  
		  
        </>

);
    }
}

export default Products;



