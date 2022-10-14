import React, { Component  } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import callicon from '../../images/call.png';
import { Link, StaticQuery, graphql } from 'gatsby'
import heart from '../../images/heart.png';
import home_about from '../../images/home_about.jpg';
import spcial from '../../images/spcial.png';
import sec07img1 from '../../images/avtar.png';
import LazyLoad from 'react-lazyload';
class Contact extends Component {
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
         wpPage(id: {eq: "cG9zdDo0OTU="}) {
    id
    title
    contactUsInfo {
      callUs
      desc
      email
      fieldGroupName
      title
      image {
        sourceUrl
      }
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
			<section class="sec11 pt pb">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="our_contact ">
              <div class="title_b">
                <h2 class="heading_sub clr_black">{data.wpPage.contactUsInfo.title}</h2>
                <p>{data.wpPage.contactUsInfo.desc}</p>
              </div>
              
          </div>
          <div class="out_fdes pt">
                <div class="email_data">
                  <div class="title_b">
                <h2 class="heading_sub clr_black">Email Us</h2>
                <p>{data.wpPage.contactUsInfo.email}</p>
                </div>
              </div>
              <div class="email_data">
                  <div class="title_b">
                <h2 class="heading_sub clr_black">Call Us</h2>
                <p>{data.wpPage.contactUsInfo.callUs}</p>
                </div>
              </div>
            </div>
          
        </div>
        <div class="col-md-6">
            <div class="image_contact">
			<LazyLoad height={200} >
              <img src={data.wpPage.contactUsInfo.image.sourceUrl} alt="contac_us"/> 
				</LazyLoad>
			</div>
          </div>
      </div>
    </div></section>
	<section class="contact_form pb">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
                <div class="form_das">
                     <form class="row g-3">
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="John"/>
                      </div>
                      <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Snow"/>
                      </div>
                      <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputAddress" placeholder="John.snow@gmail.com"/>
                      </div>
                      <div class="col-md-6">
                        <label for="inputAddress2" class="form-label">Phone No.</label>
                        <input type="number" class="form-control" id="inputAddress2" placeholder="+1 (873) 305 7862"/>
                      </div>
                       <div class="col-md-12">
                        <label for="inputAddress2" class="form-label">Message</label>
                          <textarea class="form-control text_aria" id="exampleFormControlTextarea1"></textarea>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn bl_btn">Send Message</button>
                      </div>
                    </form>
                </div>
          </div>
        </div>
      </div>
    </section>
	<section class="sec06 pt pb">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="funct_data">
                <div class="div_fun opsit_data">
				<LazyLoad height={200} >	
                  <img src={data.wpPage.contactUsInfo.lookingForSomethingSpecial.image.sourceUrl} alt="spcial"/>
					</LazyLoad>
				</div>
                <div class="function_details left_side">
                  
                   <h2 class="heading_sub">{data.wpPage.contactUsInfo.lookingForSomethingSpecial.title}</h2>
                   <p>{data.wpPage.contactUsInfo.lookingForSomethingSpecial.desc}</p>
                 
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

export default Contact;



