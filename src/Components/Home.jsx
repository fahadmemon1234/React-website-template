import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Route,Routes,Link } from "react-router-dom";

import { BsCommand } from "react-icons/bs";
import { BsClouds } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";

import { BsCurrencyBitcoin } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

import { AiOutlineGoogle } from "react-icons/ai";

import { AiOutlineLinkedin } from "react-icons/ai";



import './index.css';
import { NavItem } from 'react-bootstrap';

function BasicExample() {




  return (
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
     
        <Image src="https://www.veripark.com/sites/default/files/styles/image_style_1_4_landscape_lg_2x/public/media/images/2021-07/HomeSlider.png.jpg?itok=JnuvUSWu" fluid />
          
      </div>
    </div>
  </section>
 
    
 
<br/>
<br/>
    <section>
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
     
            <h2 style={{color:'black',textAlign:'center',fontWeight:'500',fontFamily:'"Roboto","Arial",sans-serif',fontsize: '2.27273rem', marginBottom:'1.25rem'}}>Intelligent Customer Experience Suite</h2>
          </div>
        </div>

        <div class='row'>
          <div class='col-md-12'>
            <p style={{textAlign:'justify',}}>In today's hyper-connected digital world, customer and employee expectations are changing. Now, more than ever, customers need uninterrupted digital services from their bank or insurer, without losing the human touch. Employees need tools to continue to serve, solve and sell, even remotely. </p>
          </div>
          </div>
          <div class='row'>
          <div class='col-md-12'>
            <p style={{textAlign:'justify',}}>It is time to become simpler, faster and expand your financial institution's digital channel offerings to offer your customers and employees the personalized experiences they expect. It's time for <strong style={{color:'#ce252a'}}>VeriPark's Intelligent Customer Experience Suite.</strong></p>
          </div>

        </div>
      </div>
    </section>
<br/>
<br/>
<section>
  <div class='container'>
    <div class='row'>
      <div class='col-md-12'>
        <h2 className='h2'>Dedicated exclusively to the Financial Services Industry</h2>
      </div>
    </div>

    <div class='row'>
      <div class='col-md-12'>
        <p style={{textAlign:'center'}}>    
Find out how VeriPark can make the difference for your financial institution and your customers
</p>
      </div>
    </div>
<br/>
<div class="row">

  <div class='col-md-4'>
  <Card>
      <Card.Img variant="top" src="https://www.veripark.com/sites/default/files/styles/image_style_3_2_landscape_sm_2x/public/media/images/2021-01/AdobeStock_127321424.jpeg?h=1ab555d0&itok=XQmb9A_0" />
      <Card.Body>
        <Card.Title>Retail Banking</Card.Title>
        <Card.Text>
        Transform the way your bank engages with customers to unlock more 
        meaningful customer relationships and create new business growth 
        opportunities.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div class='col-md-4'>
    
  <Card>
      <Card.Img variant="top" src="https://www.veripark.com/sites/default/files/styles/image_style_3_2_landscape_sm_2x/public/media/images/2021-01/Corporate-Banking.jpg?h=97023e6a&itok=SEqgys6S" />
      <Card.Body>
        <Card.Title>Corporate/SME Banking</Card.Title>
        <Card.Text>
        Digitalize and personalize end-to-end processes across the entire 
        SME and corporate client journey to deliver an outstanding digital 
        experience.
        </Card.Text>
      </Card.Body>
    </Card>

  </div>

  <div class='col-md-4'>

  <Card>
      <Card.Img variant="top" src="https://www.veripark.com/sites/default/files/styles/image_style_3_2_landscape_sm_2x/public/media/images/2021-01/AdobeStock_230269991.jpeg?h=8aa5fa2d&itok=15OukxWX" />
      <Card.Body>
        <Card.Title>Private Banking/Wealth</Card.Title>
        <Card.Text>
        Give your Relationship Managers and advisors the right tools to 
        deliver truly personalized experiences and advisory services to your 
        high-net-worth clients.
        </Card.Text>
      </Card.Body>
    </Card>

  </div>
</div>

  </div>
</section>

<br/>
<br/>
<section>
  <div class='container'>
  <div class='row'>
  <div class='col-md-12'>
    <h2 style={{textAlign:'center'}}>Explore Our Digital Banking & Insurance Solution Suite</h2>
  </div>
  </div>

<br/>
<div class='row'>

<div class='col-md-6'>
 
  <h3 style={{textAlign:'left',fontSize:'25px'}}><BsCommand/>  VeriChannel | Omni-Channel Delivery</h3>
  <br/>
  <p style={{textAlign:'left'}}>
  VeriChannel offers a secure, unified platform that empowers organizations to 
  provide customers a seamless, integrated and connected experience across all 
  channels, from&nbsp;
  </p>
</div>

<div class='col-md-6'>

<h3 style={{textAlign:'left',fontSize:'25px'}}><BsClouds/>  VeriTouch | Customer Engagement (CRM)</h3>
  <br/>
  <p style={{textAlign:'left'}}>
  VeriChannel offers a secure, unified platform that empowers organizations to 
  provide customers a seamless, integrated and connected experience across all 
  channels, from&nbsp;
  </p>

</div>

</div>


<br/>
<div class='row'>

<div class='col-md-6'>
 
  <h3 style={{textAlign:'left',fontSize:'25px'}}><BsCurrencyBitcoin/>  VeriBranch | Branch Automation</h3>
  <br/>
  <p style={{textAlign:'left'}}>
  VeriChannel offers a secure, unified platform that empowers organizations to 
  provide customers a seamless, integrated and connected experience across all 
  channels, from&nbsp;
  </p>
</div>

<div class='col-md-6'>

<h3 style={{textAlign:'left',fontSize:'25px'}}><BsCreditCard/>  VeriLoan | Loan Origination & Servicing</h3>
  <br/>
  <p style={{textAlign:'left'}}>
  VeriChannel offers a secure, unified platform that empowers organizations to 
  provide customers a seamless, integrated and connected experience across all 
  channels, from&nbsp;
  </p>

</div>

</div>


  </div>
</section>

<br/>
<br/>

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

export default BasicExample;