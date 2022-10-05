


import React from "react"
import Helmet from 'react-helmet'
import "../css/style.css"
import "../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Common/Header"
import Footer from "../components/Common/Footer"
import Review from "../components/Common/Review"

const Layout = ({ children }) => (
  <>
  <Helmet>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
  </Helmet>
    <Header />
    {children}
     <Review />
     <Footer />
  </>
  
)

export default Layout






