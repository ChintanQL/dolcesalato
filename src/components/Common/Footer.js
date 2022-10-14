import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'
export default function Footer() {
    const responsive3 = {
        0: { items: 1 },
        767: { items: 2 },
        1024: { items: 4 },
    };
    return (
        <>
            <footer className="main_footer pt  pb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading_sub text-center">Our Locations</h2>
                        </div>
                    </div>
                    <div className="row">
					<StaticQuery
    query={graphql`
      query {
       allWpStoreLocations {
    edges {
      node {
        id
        storeLocationInfo {
          address
          contactNumber
          fieldGroupName
          storeContactPerson
          storeEmail
          storeName
          storePassword
          username
        }
      }
    }
  }
      }
    `}
    render={data => (
		<AliceCarousel infinite responsive={responsive3}>
		
      
						{data &&
				data.allWpStoreLocations &&
				data.allWpStoreLocations.edges &&
				data.allWpStoreLocations.edges.map(
                (prop,i) => {
					return (
							
						<div className="item">
                                <div className="our_footer1">
                                    <h4>{prop.node.storeLocationInfo.storeName}</h4>
                                    <p>{prop.node.storeLocationInfo.address}</p>
                                    <div className="img_erd">
                                        <img src={callicon} alt="callicon" className="img-fluid" />
                                    </div>
                                    <div className="no_mob"><a href="#">{prop.node.storeLocationInfo.contactNumber}</a></div>
                                </div>
                            </div>
							
					
					)
                }
              )}		
	</AliceCarousel>
    )}
  />
					
					
                        
                    </div>
                    <div className="row">
                        <div className="dlt_copy text-center pt">
                            <p>© 2022 <Link to={"/"} >Dolce &amp; Salato</Link>  | <Link to={"/privacy-policy"}>Privacy Policy</Link> </p>
                            <span>Please note photos are for illustration purposes</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

