import React,{useState} from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

import { AiOutlineGoogle } from "react-icons/ai";

import { AiOutlineLinkedin } from "react-icons/ai";


import { Formik, Form, Field, ErrorMessage, useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';

import { Link } from "react-router-dom";


function Contactus(){

    const formik = useFormik({
        initialValues: { email: '', password: '' ,name :'' },
        onSubmit: (data) => {
            console.log(data)
        },
        validate: (value) => {
            let error = {}

            if(!value.name){
                error.name = "Enter Name "
            }

            else if(value.name.length<5){
                error.name='Name Must be Greater Than 5'


            }

            else if (!value.email)
                error.email = 'Email Required'

            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email) ) {
                error.email = 'Invalid email address';
            }



            else if (!value.password)
                error.password = 'Plz Enter Password'

            

           

            return error
        }
      
    
        // validationSchema : Yup.object({
        //     name: Yup.string().required('Required'),
        //     password: Yup.string()
        //       .max(20, 'Must be 20 characters or less')
        //       .required('Required'),
        //     email: Yup.string().email('Invalid email address').required('Required'),
        //   })
      
    })

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
     
        <Image src="https://www.veripark.com/sites/default/files/styles/image_style_1_3_landscape_xl_2x/public/media/images/2020-11/newspapers-444448_1920.jpg?h=d1f6bb1a&itok=R5Pv5S9z" fluid />
          
      </div>
    </div>
  </section>



  <br/>
<br/>
  <section>
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
     
            <h2 style={{color:'black',textAlign:'center',fontWeight:'500',fontFamily:'"Roboto","Arial",sans-serif',fontsize: '3.27273rem', marginBottom:'1.25rem'}}>Contact US</h2>
          </div>
        </div>
        <br/>
  
      </div>
    </section>

<section>
    <div class='container'>
        <div class='row'>
            <div class='col-md-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7414138.181638396!2d57.81618497499999!3d24.857542000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e7e75100001%3A0xc669d277c147af8!2sVeriPark%20Karachi!5e0!3m2!1sen!2s!4v1683453784555!5m2!1sen!2s" height='300' width="300" ></iframe>
           </div>
            <div class='col-md-6'>
<Formik>
<form onSubmit={formik.handleSubmit}>

<label>Name</label>
    <br />
    <input type='text' id='name' value={formik.values.name} onChange={formik.handleChange} />
    {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : ""}
    <br />


    <label>Email</label>
    <br />
    <input type='text' id='email' value={formik.values.email} onChange={formik.handleChange} />
    {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : ""}
    <br />


    <label>Password</label>
    <br />

    <input type='text' id='password' value={formik.values.password} onChange={formik.handleChange} />
    {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : ""}

    <input type='submit' />

</form>

</Formik>
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

export default Contactus;