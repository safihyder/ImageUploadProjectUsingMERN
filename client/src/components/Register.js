import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const history=useNavigate()
  const [fname,setFName]=useState("");
  const [file,setFile]=useState("");
  
  // console.log(fname)
  // console.log(file)
  const setdata=(e)=>{
    const {value}=e.target;
    setFName(value)
  }
  const setimgfile=(e)=>{
    setFile(e.target.files[0])
  }

  const addUserData= async (e)=>{
    e.preventDefault();
    if(fname===""){
      alert("Enter name");
    }else if(file===""){
      alert("Enter photo")
    }else{

      var formData=new FormData();
      formData.append("photo",file)
      formData.append("fname",fname)
      const config={
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
      const res=await axios.post("http://localhost:8000/register",formData,config);
      if(res.data.status===401 || !res.data){
        console.log("error");
      }else{
        history("/")
      }
    }
  }
  return (
    <>
      <div className='container mt-3'>
        <h1>Upload Your Image Here</h1>
        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" name='fname' placeholder="" onChange={setdata} />
          
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select your Image</Form.Label>
            <Form.Control type="file" name='photo' placeholder="" onChange={setimgfile}/>
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register