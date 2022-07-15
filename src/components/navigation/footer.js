import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon,MDBCard,MDBCardBody , MDBBtn } from "mdbreact";





const Footer =(props)=>{
    return(

            <MDBFooter color='green' dark className="font-small pt-4 mt-4 footer">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="4" className='contact'>
                <h5 className="title">Contact Us</h5>
                <ul className="list-unstyled mb-0">
                    <li>
                    <MDBIcon icon="map-marker-alt" size="2x" className="light-green-text d-inline mr-2" />
                    <p className='d-inline'>Hope Valley street,Taifa-Accra, Ghana</p>
                    </li>
                    <li>
                    <MDBIcon icon="phone" size="2x" className="light-green-text  mr-2 d-inline" />
                    <p className='d-inline'>+ 233 234 567 89</p>
                    </li>
                    <li className='d-inline'>
                    <MDBIcon icon="envelope" size="2x" className="light-green-text  mr-2 d-inline" />
                    <p className='d-inline'> nakwaarmscompanyltd@gmail.com</p>
                    
                    </li>
                </ul>
                    
                </MDBCol>
                <MDBCol md="4" className='company'>
                    <h5 className="title">Company</h5>
                    <ul>
                    <li className="list-unstyled">
                        <a href="#!">About Us</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Products</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Events</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Contact</a>
                    </li>
                    </ul>
                </MDBCol>

                <MDBCol md="4" className='community'>
                    <h5 className="title">Community</h5>
                    <ul className="list-unstyled mb-0">
                    <li>
                    <MDBIcon fab icon="facebook" size="2x" className="light-green-text d-inline mr-2" />
                    <a href='www.facebook.com'className='d-inline'>facebook</a>
                    </li>
                    <li>
                    <MDBIcon fab icon="linkedin" size="2x" className="light-green-text  mr-2 d-inline" />
                    <a href='wwww.linkedin.com' className='d-inline'>linkedin</a>
                    </li>
                    <li>
                    <MDBIcon fab icon="instagram" size="2x" className="light-green-text  mr-2 d-inline" />
                    <a href='www.instagram.com' className='d-inline'>Instagram</a>
                    </li>
                    <li className='d-inline'>
                    <MDBIcon fab icon="twitter" size="2x" className="light-green-text  mr-2 d-inline" />
                    <a href='www.twitter.com' className='d-inline'>Twitter</a>
                    
                    </li>
                </ul>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.LoanNy.com">Nakwa Arms | THE NONI FAMILY </a>
                </MDBContainer>
            </div>
            </MDBFooter>                    
        )};


export default Footer;