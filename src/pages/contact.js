import React from 'react'
import Link from 'gatsby-link'
import {Form, Button} from 'react-bootstrap'
const ContactPage = () => (
  <div>
    <h2>Contact us</h2>
     
    <p>Front end developer who loves Javascript | Badminton | Guitar</p>
    <Form>
        <div className="row">
            <div className="col-md-2">
                <label> Name </label>
            </div>
            <div className="col-md-4">
                <input type="text" className="form-control" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                <label className="control-label"> Mobile number </label>
            </div>
            <div className="col-md-4">
                <input type="text" className="form-control" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                <label> Email </label>
            </div>
            <div className="col-md-4">
                <input type="text" className="form-control" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                <label> Comments </label>
            </div>
            <div className="col-md-4">
                <textarea className="form-control" />
            </div>
        </div>
    </Form>
    <Link to="/contact-form-success/" className="btn btn-primary">Send Email</Link>
  </div>
)

export default ContactPage
