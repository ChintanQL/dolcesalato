import React, {Component} from 'react';
import Layout from "../components/layout"
import LazyLoad from 'react-lazyload';
import { Link,graphql } from 'gatsby'

import cakebg from '../images/cakebg.png';
import { Helmet } from "react-helmet"

class CategoryDetails extends Component {
	
  componentDidMount() {
		console.log(this.props.pageContext);
	}
  render() {
  
	var data = this.props.pageContext.Data;
	
	
      return (
          <Layout>
            <>
			<section class="sec03 pt pb">
         <div class="container">
          <div class="row pb_30">
            <div class="col-md-12">
              <h2 class="heading_sub text-center clr_black">Sample Catering Menu</h2>
            </div>
          </div>
            <div class="row">
			
			{data.map(
                (prop,i) => {
					return (
					<>
						<div class="col-md-4">
							<LazyLoad height={200} >
								<div class="our_product">
									<div class="image_t">
										<img src={prop.category_image} />
									</div>
									<div class="cont_categroy">
										<div class="inner_cate">
											<h2> <Link to={"/product-category/"+prop.slug}>{prop.name} </Link> </h2>
										</div>
									</div>
								</div>
						  </LazyLoad>
					   </div>
					</>
				)
                }
              )}	
               
              
               
            </div>
            
           
            
         </div>
      </section>
			
      
            
            </>
          </Layout>
      )
  }
}



export default CategoryDetails

