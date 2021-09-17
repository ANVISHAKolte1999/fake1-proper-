import   React from 'react'
import {Form , Col,Row,Container, Button } from 'react-bootstrap'

import Logout from './Logout';
import Pass from './Pass';
import { Link } from 'react-router-dom';


const ChangePass = () => {
    return (
        <div className="container">
            <div className="py-4">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Usename</Form.Label>
    
    <Col xs lg="2">
    <Form.Control type="email" placeholder="Enter email" />
    </Col>
   
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Col xs lg="2">
    <Form.Control type="password" placeholder="Password" />
    </Col>
   
  </Form.Group>
  <br></br><br></br>
<Container>
<Row xs={2} md={4} lg={6}>
    <Col>
    <Button variant="dark">Save Password</Button>{' '}
</Col>
    <Col sm><Logout></Logout></Col>
    <Col sm></Col>
  </Row>
</Container>
 
  </Form>
  
            </div>
        </div>
    );
};
 
export default ChangePass;
        
       