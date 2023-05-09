import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

import { AiFillAndroid } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";


import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

import { AiOutlineGoogle } from "react-icons/ai";

import { AiOutlineLinkedin } from "react-icons/ai";

function Service(){
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
     
        <Image src="https://www.veripark.com/sites/default/files/styles/image_style_1_3_landscape_xl_2x/public/media/images/2020-11/read-876536_1920.jpg?h=62c27c7e&itok=oHIZY5cS" fluid />
          
      </div>
    </div>
  </section>


  <br/>
<br/>
  <section>
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
     
            <h2 style={{color:'black',textAlign:'center',fontWeight:'500',fontFamily:'"Roboto","Arial",sans-serif',fontsize: '3.27273rem', marginBottom:'1.25rem'}}>Service</h2>
          </div>
        </div>
        <br/>
  
      </div>
    </section>

    <section>
        <div class='container'>
            <div class='row'>
                <div class='col-md-12'>
                    <h2 style={{textAlign:'center'}}>Launch your Digital Bank on Mobile in less than 90 Days !</h2>
                </div>

            </div>
            <br/>
            <div class='row'>
                <div class='col-md-12'>
                <p style={{textAlign:'justify'}}>For most banks, traditional operating models and legacy systems are the biggest challenges and greatest obstacles to remain competitive. In order to move at speed and pace in their digital transformation journeys, banks need to:</p>
                
                <ul>
                    <li style={{textAlign:'justify'}}>Catch up with the next wave in digital banking: speed, personalization and enhanced customer experience,</li>
                    <li style={{textAlign:'justify'}}>Create a unique alternative to a traditional banking experience,</li>
                    <li style={{textAlign:'justify'}}>,Provide best-in-class transactional capabilities & functionalities.</li>

                </ul>
                </div>
            </div>
            <br/>
            <div class='row'>
                <div class='col-md-4'>
                <Card>
      <div style={{textAlign:'center', fontSize:'40px', color:'red'}}><AiFillAndroid/></div>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Mobile App Development</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor at quas aut accusantium eos facilis amet? Asperiores labore officiis aspernatur perferendis earum, ad omnis, consequatur quisquam nulla necessitatibus fugiat?
        </Card.Text>
       
      </Card.Body>
    </Card>
                </div>
                <div class='col-md-4'>
                <Card>
      <div style={{textAlign:'center', fontSize:'40px', color:'red'}}><AiFillYoutube/></div>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Youtube</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor at quas aut accusantium eos facilis amet? Asperiores labore officiis aspernatur perferendis earum, ad omnis, consequatur quisquam nulla necessitatibus fugiat?
        </Card.Text>
       
      </Card.Body>
    </Card>
                </div>
                <div class='col-md-4'>
                <Card>
      <div style={{textAlign:'center', fontSize:'40px', color:'red'}}><AiFillAmazonCircle/></div>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Amazon</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor at quas aut accusantium eos facilis amet? Asperiores labore officiis aspernatur perferendis earum, ad omnis, consequatur quisquam nulla necessitatibus fugiat?
        </Card.Text>
       
      </Card.Body>
    </Card>
                </div>
            </div>
           
        </div>
    </section>

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

export default Service;