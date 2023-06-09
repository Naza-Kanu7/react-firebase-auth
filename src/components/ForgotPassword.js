import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [alert, setAlert] = useState('')
  const { sendPasswordReset } = useUserAuth()

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    try{
        await sendPasswordReset(email)
        setAlert('Reset Link sent to your email.')
    } catch (err) {
        setError(err.message)
    }
  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Reset Password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {alert && <Alert variant="success">{alert}</Alert>}
        <Form onSubmit={handleForgotPassword}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={ (e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {!alert && 
            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Send Reset Link
              </Button>
            </div>
          }
          
        </Form>
      </div>
      {alert && 
        <div className="p-4 box mt-3 text-center">
          Log In With new password
          <Link to="/">Log In</Link>
        </div> 
      }
      
    </>
  );
};

export default ForgotPassword;