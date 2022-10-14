import React from "react"
import Layout from "../components/layout"
import aboutbg from '../images/aboutbg.png'
import Contact from "../components/Contact/Contact"

export default function ContactUS() {


  return (
	<Layout>
	<div className="main">
	<section class="breadcumb cake_bg">
        <div class="img_breadcumb">
          <img src={aboutbg} alt="contact_bg"/>
        </div>
        <div class="bread_cumbdata">
          <div class="container">
          <div class="row">
            <div class="col-md-12">
                 <div class="breadcumb_name">
                   <h1>Contact Us</h1>
                 </div>
            </div>
          </div>
        </div>
        </div>
      </section>
	   <Contact/>
	</div>
	 </Layout>
  )
}