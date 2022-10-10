import React, {Component} from 'react';
import Layout from "../components/layout"

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
			
			<section class="breadcumb cake_bg">
				<div class="img_breadcumb">
				  <img src={data.banner_image} alt="cakebg" />
				</div>
				<div class="bread_cumbdata">
				  <div class="container">
				  <div class="row">
					<div class="col-md-12">
						 <div class="breadcumb_name">
						   <h1>{data.name}</h1>
						 </div>
					</div>
				  </div>
				</div>
				</div>
			</section>
			{(data.display_ui == 1) ? (
			<>
			{(data.cat_data.length > 0) ? (
					<section class="sec08 pt pb">
						<div class="container">
						{data.cat_data.map((prop,i) => {return (
							<div class="cake_store pt">
								<div class="row">
									<div class="col-md-12">
										<div class="title_b">
											<h2 class="heading_sub text-center clr_black">{prop.name}</h2>
										</div>
									</div>
								</div>

								<div class="row pt_30">
								{prop.products.map((innerprop,i) => {return (
									<>
									<div class=" col-lg-3 col-md-6 col-sm-6">
									  <div class="product_main">
										<div class="product_inner ">
										  <div class="product_img">
											<a href="#">
											<div class="our_hover_code"></div>
											<img src="" />
											</a>
										  </div>
										  <div class="prd_content">
											<div class="our_new_contetn">
											   <h4 class="heading_four"><a href="#"> {innerprop.name} </a></h4>
											   <p class="para_con"> <a href="#"> tomato, mozzarella, anchovy, olive, caper </a></p>
											   <div class="quntit">
												 <div class="half_qunti">
												  <p><a href="#">Half $19 </a></p>
												 </div>
												 <div class="full_qunti">
													<p><a href="#">Full $30 </a></p>
												 </div>
											   </div>
											</div>
										  </div>
										</div>
									  </div>
									</div>
										
									
									</>
								)})}
								<div class="col-md-12">
											<div class="btn_design_more pt_30">
												<div class="button_design">
													<a href="#">See More</a>
												</div>
											</div>
										</div>
								</div>
								</div>
						)})}
					</div>
					</section>
				) : (
					<>
					<section class="sec09 pt pb">
						<div class="container">
						
							<div class="cake_store pt">
								<div class="row">
									<div class="col-md-12">
										<div class="title_b">
											<h2 class="heading_sub text-center clr_black">{data.name}</h2>
										</div>
									</div>
								</div>

								<div class="row">
								{data.products.map((innerprop,i) => {return (
									<>
									<div class="col-md-6">
										<div class="cake_wrap">
											<div class="cake_adt">
												<div class="ckae_image">
													<div class="our_hover_codePf"></div>
														<a href="#"><img src="" alt="1" /></a>
													</div>
													<div class="cake_comntet">
														<div class="our_new_contetn">
															<h4 class="heading_four"><a href="#"> {innerprop.name} </a></h4>
																<p class="para_con"> <a href="#"> D&amp;S signature sponge cake filled with vanilla custard, chocolate custard and liqueur. Decorated with white or dark chocolate flakes or crushed almonds </a></p>
                       
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-12">
											<div class="btn_design_more pt_30">
												<div class="button_design">
													<a href="#">See More</a>
												</div>
											</div>
										</div>
									
									</>
								)})}
								</div>
								</div>
						
					</div>
					</section>
					</>
			)}
			</>
			) : (
			<>
				{(data.cat_data.length > 0) ? (
					<section class="sec09 pt pb">
						<div class="container">
						{data.cat_data.map((prop,i) => {return (
							<div class="cake_store pt">
								<div class="row">
									<div class="col-md-12">
										<div class="title_b">
											<h2 class="heading_sub text-center clr_black">{prop.name}</h2>
										</div>
									</div>
								</div>

								<div class="row pt_30">
								{prop.products.map((innerprop,i) => {return (
									<>
									<div class=" col-lg-3 col-md-6 col-sm-6">
              <div class="product_main">
                <div class="product_inner ">
                  <div class="product_img">
                    <a href="#">
                    <div class="our_hover_code"></div>
                    <img src="" />
                    </a>
                  </div>
                  <div class="prd_content">
                    <div class="our_new_contetn">
                       <h4 class="heading_four"><a href="#"> {innerprop.name} </a></h4>
                       <p class="para_con"> <a href="#"> tomato, mozzarella, anchovy, olive, caper </a></p>
                       <div class="quntit">
                         <div class="half_qunti">
                          <p><a href="#">Half $19 </a></p>
                         </div>
                         <div class="full_qunti">
                            <p><a href="#">Full $30 </a></p>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
										
									
									</>
								)})}
								
								</div>
								</div>
						)})}
					</div>
					</section>
				) : (
					<>
					<section class="sec09 pt pb">
						<div class="container">
						
							<div class="cake_store pt">
								<div class="row">
									<div class="col-md-12">
										<div class="title_b">
											<h2 class="heading_sub text-center clr_black">{data.name}</h2>
										</div>
									</div>
								</div>

								<div class="row">
								{data.products.map((innerprop,i) => {return (
									<>
									<div class=" col-lg-3 col-md-6 col-sm-6">
									  <div class="product_main">
										<div class="product_inner ">
										  <div class="product_img">
											<a href="#">
											<div class="our_hover_code"></div>
											<img src="" />
											</a>
										  </div>
										  <div class="prd_content">
											<div class="our_new_contetn">
											   <h4 class="heading_four"><a href="#"> {innerprop.name} </a></h4>
											   <p class="para_con"> <a href="#"> tomato, mozzarella, anchovy, olive, caper </a></p>
											   <div class="quntit">
												 <div class="half_qunti">
												  <p><a href="#">Half $19 </a></p>
												 </div>
												 <div class="full_qunti">
													<p><a href="#">Full $30 </a></p>
												 </div>
											   </div>
											</div>
										  </div>
										</div>
									  </div>
									</div>
									
									</>
								)})}
								</div>
								</div>
						
					</div>
					</section>
					</>
			)}
			
			</>
			)}

				
				
      
            
            </>
          </Layout>
      )
  }
}



export default CategoryDetails

