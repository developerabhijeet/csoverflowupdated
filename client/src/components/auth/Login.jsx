import React, { useContext, useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../UserContext';
import {



  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import signin from '../../redux/actions/userAction';
const Login = (porps)=>{

  // const { user, setUser } = useContext(UserContext);
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  // const [emailError, setEmailError] = useState('')
  // const [passwordError, setPasswordError] = useState('')
  const userSignin = useSelector(state=>state.userSignin);
  const {loading,userInfo,error}=userSignin;
  const dispatch = useDispatch();
  useEffect(()=>{
    if(userInfo){
     <Redirect to="/"/>
    }
    return()=>{
     <Redirect to="/login"/>
    };
  },[userInfo]);
    const submitHandler = (e)=>{
      e.preventDefault();
      dispatch(signin(email,password));
    }
  // const submitHandler = async e => {
  //   e.preventDefault();
  //   setEmailError('');
  //   setPasswordError('');

  //   console.log(email, password)
  //   try {
  //     const res = await fetch('http://localhost:4000/app/login', {

  //       method: 'POST',
  //       body: JSON.stringify({ email, password }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         "Authorization": "Bearer" + localStorage.getItem('user')
  //       }
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //     setUser(res.data)
  //     // store the user in localStorage
  //     localStorage.setItem('user', JSON.stringify(res.data))
      
  //     if (data.errors) {
  //       setEmailError(data.errors.email);

  //       setPasswordError(data.errors.password);
  //     }
  //     if (data.user) {
  //       setUser(data.user)

  //     }
  //   } catch (error) {
  //     console.log(error);

  //   }
  // }

  // if (user) {
  //   return <Redirect to="/" />
  // }
  return (
    <Container className="login">
      
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email*</Label>

            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            {/* <div className="email error red-text">{emailError}</div>
            <label htmlFor="email">Email</label> */}
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password*</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            {/* <div className="password error red-text">{passwordError}</div>
            <label htmlFor="password">Password</label> */}
          </FormGroup>
        </Col>
        <Button className="btn-submit" onClick={submitHandler}>Submit</Button>
      </Form><br/>
      <Label><Link to="/resetpassword">Forgot Password?</Link></Label>
    </Container>
  );
}

export default Login
