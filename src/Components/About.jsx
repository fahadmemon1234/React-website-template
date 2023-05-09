import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

import { AiOutlineGoogle } from "react-icons/ai";

import { AiOutlineLinkedin } from "react-icons/ai";

function about(){
    return(
        <>
        
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{fontWeight:'600'}}>VeriPark</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
          <Nav.Link href="#"><Link to='/' style={{textDecoration:'none',color:'black'}}>Home</Link></Nav.Link>
          
            <Nav.Link href="#"><Link to='/About' style={{textDecoration:'none',color:'black'}}>About</Link></Nav.Link>
         
            <Nav.Link href="#"><Link to='/Gallery' style={{textDecoration:'none',color:'black'}}>Gallery</Link></Nav.Link>
            
            <Nav.Link href="#"><Link to='/Service' style={{textDecoration:'none',color:'black'}}>Service</Link></Nav.Link>
           
            <Nav.Link href="#"><Link to='/Contactus' style={{textDecoration:'none',color:'black'}}>Contact Us</Link></Nav.Link>
            
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  <section>
      <div class='row'>
        <div class='col-md-12'>
     
        <Image src="https://www.veripark.com/sites/default/files/styles/image_style_1_3_landscape_xl_2x/public/media/images/2022-08/About-us_Banner_2022.jpg?h=61ca0bd2&itok=V5b-auKD" fluid />
          
      </div>
    </div>
  </section>


<br/>
<br/>
  <section>
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
     
            <h2 style={{color:'black',textAlign:'center',fontWeight:'500',fontFamily:'"Roboto","Arial",sans-serif',fontsize: '3.27273rem', marginBottom:'1.25rem'}}>About</h2>
          </div>
        </div>
        <br/>

        <div class='row'>
          <div class='col-md-6'>
          <Image src="https://www.veripark.com/sites/default/files/styles/image_style_14_10_landscape_sm/public/media/images/2023-02/Story_Values_Professional_new.png?h=56188f9a&itok=h2WP5yui" width={400} rounded />
          </div>
        
          <div class='col-md-6'>
            <p><strong>WE STRIVE TO ACHIEVE OUR POTENTIAL</strong>
            <br/>
        › We take responsibility for our own development and career 
        <br/>    
        › We self-pace and self-style our development and career
        <br/>
        › We seek opportunities to expand our skillsets
        <br/>
        › We support our colleagues to achieve their potential
        </p>

        <p><strong>WE ARE ONE TEAM</strong>
            <br/>
            › We collaborate and share knowledge and experience to make a difference        
            <br/>    
            › We understand what colleagues do and trust their expertise        
            <br/>
            › We take pride in our work and recognize excellence when we see it
        <br/>
        › We are a well-connected community
        </p>
          </div>
          </div>

  
      </div>
    </section>

<br/>
<br/>
<br/>

    <section style={{backgroundColor:'lightgray'}}>
        <div class='container'>
            <div class='row'>
                <div class='col-md-6'>
                    <br/>
                    <br/>
                    <h2>We're Progressive</h2>
                    <br/>
                <p><strong>WE ARE AGENTS OF CHANGE</strong>
            <br/>
            › We courageously challenge mediocrity
        <br/>    
        › We encourage creative, innovative and imaginative solutions
        <br/> 
        › We are future-focused
        <br/>

        › We build on our success and share best practice
                </p>
                </div>
                <div class='col-md-6'>
                    <br/>
                <Image src="https://www.veripark.com/sites/default/files/styles/image_style_14_10_landscape_sm_2x/public/media/images/2023-02/Story_Values_Progressive_new.png?h=56188f9a&itok=nrAb7CB9" width={400} rounded />
                </div>
            </div>
        </div>
    </section>


    <footer className='footer footer--primary'> 
<div class='container'>
  <div class='row'>
    <div class='col-md-6'>
      
      <Image style={{marginTop:'32px', color:'white', float:'left'}} src="https://www.veripark.com/sites/default/files/styles/company_info_logo/public/media/images/2020-09/logo_0.png?itok=I-zbcwV-" rounded />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p style={{color:'white', textAlign:'left', fontSize: '12px', lineHeight:'25px'}}>Enabling Financial Institutions to become Digital Leaders with our Intelligent Customer Experience Suite.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolores saepe dolor. Est molestiae quaerat magni sequi in a velit, eius voluptate eaque ipsam pariatur? Veniam saepe sit doloribus repellat?
      </p>
    </div>

    <div class='col-md-6'>
      <ul style={{color:'white',  textAlign:'left', textDecoration:'none', listStyleType:'none', marginTop:'35px', lineHeight:'35px', fontSize:'0.875rem',marginLeft:'300px'}}>
      <li style={{fontWeight:'500'}}>Company</li>
      <li><a href='#' style={{color:'white', textDecoration:'none'}}><Link to='/About' style={{textDecoration:'none',color:'white'}}>About</Link></a></li>
        <li><a href='#' style={{color:'white', textDecoration:'none'}}><Link to='/Gallery' style={{textDecoration:'none',color:'white'}}>Gallery</Link></a></li>
        <li><a href='#' style={{color:'white', textDecoration:'none'}}><Link to='/Service' style={{textDecoration:'none',color:'white'}}>Service</Link></a></li>
        <li><a href='#' style={{color:'white', textDecoration:'none'}}><Link to='/Contactus' style={{textDecoration:'none',color:'white'}}>Contact Us</Link></a></li>
      </ul>
    </div>
  </div>
  <div class='row'>
  <hr/>
    <div class='col-md-4'>
      <div style={{color:'white', fontSize:'20px'}}><CiFacebook/> <AiOutlineYoutube/></div>
    </div>
    <div class="col-md-4">

    

<h4 style={{color:'white',fontSize:'12px'}}>
© 2023 VeriPak. All rights reserved.
  </h4>
  </div>

  <div class='col-md-4'>
      <div style={{color:'white', fontSize:'20px'}}><AiOutlineGoogle/> <AiOutlineLinkedin/></div>
    </div>
  </div>
</div>
</footer>
        </>
    )
}

export default about;