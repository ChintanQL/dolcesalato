import React from "react"
import Layout from "../components/layout"
import contact_bg from '../images/contact_bg.png'
import AboutUs from "../components/About/AboutUs"

export default function Aboutus() {


  return (
	<Layout>
	<div className="main">
	<section class="breadcumb cake_bg">
        <div class="img_breadcumb">
          <img src={contact_bg} alt="contact_bg"/>
        </div>
        <div class="bread_cumbdata">
          <div class="container">
          <div class="row">
            <div class="col-md-12">
                 <div class="breadcumb_name">
                   <h1>About Us</h1>
                 </div>
            </div>
          </div>
        </div>
        </div>
      </section>
	   <AboutUs/>
	</div>
	 </Layout>
  )
}