import React, { useState, useEffect } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Alert
} from 'reactstrap';


import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfile, uploadImageAction } from '../../redux/actions/users/userActions';

const EditProfile = ({ history }) => {
  
const userLogin = useSelector(state=> state.userLogin);
const {userInfo} = userLogin;

const id  = userInfo.user._id
const [bio, setBio] = useState(userInfo.user?.bio);
const [tech, setTech] = useState(userInfo.user?.tech);
const [jobtitle, setJobtitle] = useState(userInfo.user?.jobtitle);
const [file, setFile] = useState([])
const [visible, setVisible] = useState(false);

  const onDismiss = () => {
    setVisible(false);
    history.push(`/profile/${id}`)
  }

const dispatch = useDispatch();
const updateProfileHandler = e =>{
  if(bio==''||tech==''||jobtitle==''){
    alert('Fields cannot be empty')
  }else{
  e.preventDefault();

  dispatch(editUserProfile(id,bio,tech,jobtitle))
  setVisible(true);
 
}
}
const updateImage = e =>{
  e.preventDefault();
  console.log(file)
  const filedata = new FormData();
  var imagedata = document.querySelector('input[type="file"]').files[0];
  console.log(imagedata)
  filedata.append("file",imagedata);
  
  console.log(filedata)
 
  dispatch(uploadImageAction(id,imagedata))
}

  return (
    <Container className="signup">
      <Alert color="success" isOpen={visible} toggle={onDismiss}>
      Your Profile Edited Successfully!
    </Alert>
      <h2>Edit Profile</h2>
      <Form className="form" onSubmit={updateProfileHandler} >
    
        <Col>
          <FormGroup>
            <center><strong><i><Label for="name">Name: {userInfo.user.name}</Label></i></strong>
            </center>
            
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Label>Bio*</Label>
            <Input
              type="text"
              name="bio"
              id="bio"
              placeholder="Enter a breif Introduction about Yourself"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Job Title*</Label>
            <Input
              type="text"
              name="jobtitle"
              id="jobtitle"
              placeholder="Must Be filled"
              value={jobtitle}
              onChange={e => setJobtitle(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Technology*</Label>
            <Input
              type="text"
              name="tech"
              id="tech"
              placeholder="Must be filled"
              value={tech}
              onChange={e => setTech(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Upload Profile Image*</Label>
            <Input
              type="file"
              name="file"
              id="file"
              onChange={e => setFile(e.target.files[0])}
            />
            <br/>
              <Button color="primary" className="btn-submit" onClick={updateImage}>Upload</Button>
          </FormGroup>
          <br/>

      
        </Col>
        <Col>

        <Button color="primary" className="btn-submit">Submit</Button>
      </Col>
        </Form>
    </Container>
  )
}

export default EditProfile;