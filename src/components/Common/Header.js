import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import logo from '../../images/logo.png';
import cartoon from '../../images/carticon.png';


export default function Header() {
  
  return (
    <div>
	 <header className="header-area style-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <nav className="navbar navbar-expand-lg main_head navbar-fixed-top">
                <div className="container-fluid">
                  <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" />
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <StaticQuery
    query={graphql`
      query {
        wpMenu(id: {eq: "dGVybToz"}) {
    id
    menuItems {
      nodes {
        id
        label
      }
    }
  }
      }
    `}
    render={data => (
		<>
		
      
						{data &&
				data.wpMenu &&
				data.wpMenu.menuItems &&
				data.wpMenu.menuItems.nodes.map(
                (prop,i) => {
					return (
							 <li className="nav-item">
							<Link to={prop.label.replace(/\s+/g, '-').replace("'", '').toLowerCase()} className="nav-link" activeClassName="active">{prop.label}</Link>
							</li>
						
						
							
					
					)
                }
              )}		
	</>
    )}
  />
                    </ul>
                    <div className="d-flex align-items-center">
                      <div className="log_in_link">
                        <ul>
                          <li><Link to="/app/login">Log In</Link></li>
                          <li><Link to="/app/signup">Sign Up</Link></li>
                        </ul>
                      </div>
                      <div className="cart_icon">
                        <Link to="/app/cart"><img src={cartoon} alt="" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  )
}