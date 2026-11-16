import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Footer = () => {
  return (
    <footer className='bg-black text-white' >
    <Container fluid>
      <Row>
        <Col>
        <img src={'Luma bg 2.png'} alt="" />
        <p><h3>LUMA-CINEMAS WHERE EVERYONE HAS A STORY TO TELL</h3>
        
        
Luma Cinemas is dedicated to
bringing you the ultimate cinematic
experience, featuring cutting-edge
projection, luxurious seating, and
unforgettable storytelling..</p>
        </Col>
        <Col><h5>MOVIES</h5>
        <Nav>
        <Nav.Link href="/">All Movies</Nav.Link> 
        <Nav.Link href="/Booking">Now Showing </Nav.Link>
        <Nav.Link href="/Booking">Coming Soon</Nav.Link>
        <Nav.Link href="/Booking">Advance Tickets</Nav.Link>
        <Nav.Link href="/Booking">Film Festival</Nav.Link>
        <Nav.Link href="/Booking">Special Events</Nav.Link>
        <Nav.Link href="/Booking">Gift Cards</Nav.Link>
        </Nav>
        
        </Col>
       <Col><h5>EXPERIENCES</h5>
        <Nav>
        <Nav.Link href="/Booking">Luxury Lounges</Nav.Link>
        <Nav.Link href="/Booking">IMAX@Experience</Nav.Link>
        <Nav.Link href="/Booking">Current Offers</Nav.Link>
        <Nav.Link href="/Booking">Doulby CInema</Nav.Link>
        <Nav.Link href="/Booking">Dine-in Theatre</Nav.Link>
        <Nav.Link href="/Booking">Arcade&Fun</Nav.Link>
        <Nav.Link href="/Booking">Group Bookings</Nav.Link>
        </Nav>
        
        </Col>
        <Col><h5>MEMBERS</h5>
        <Nav>
        <Nav.Link href="/Booking">Join Club Luma</Nav.Link>
        <Nav.Link href="/Booking">Loyalty Rewards </Nav.Link>
        <Nav.Link href="/Booking">Luma App</Nav.Link>
        <Nav.Link href="/Booking">Ticket Support</Nav.Link>
        <Nav.Link href="/Booking">Accessability</Nav.Link>
        <Nav.Link href="/Booking">Lost&Found</Nav.Link>
      

      </Nav>
        
        </Col>
        <Col><h5>ABOUT US</h5>
        <Nav>
        <Nav.Link href="/Booking">Our Story</Nav.Link>
        <Nav.Link href="/Booking">Careers</Nav.Link>
        <Nav.Link href="/Booking">Press&Media</Nav.Link>
        <Nav.Link href="/Booking">Partnerships</Nav.Link>
        <Nav.Link href="/Booking">Community</Nav.Link>
        <Nav.Link href="/Booking">Contact Us</Nav.Link>
    
        </Nav>
        
        </Col>
      
      </Row>

      <Row className='border-top border-secondary mt-3 py-4'>
         <Col>
         <h5>Stay updated with Luma-CInemas</h5>
         <p>Get the latest Movie collections, latest Movies just for you and New brand new movie updates.</p>
         </Col>
         <Col>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    

<Button type='button' style={{backgroundcolor: "grey",color:'black',whitespace: 'nowrap'}}>SUBSRCIBE</Button>
    </Form>
         </Col>
         
  
      </Row>
      <Row className='border-top border-secondary mt-3 py-4'>
        <Col>&copy; {new Date().getFullYear()}  Luma-Cinemas. All  Rights Reserved.</Col>
      </Row>
    </Container>

    </footer>
  );
}

export default Footer;