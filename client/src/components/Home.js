import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import moment from "moment";
import Alert from 'react-bootstrap/Alert';
const Home = () => {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  // console.log(data)
  const getUserData = async () => {
    const res = await axios.get("https://image-upload-project-using-mern-api.vercel.app/getdata", {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      setData(res.data.getUser)
    }
  }
  const dltUser=async(id)=>{
    console.log(`http://localhost:8000/${id}`)
    const res = await axios.delete(`https://image-upload-project-using-mern-api.vercel.app/${id}`,{
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.data.status === 401 || !res.data){
      console.log("error");
    } else {
      console.log("User Delete");
      setShow(true);
    }
  }
  useEffect(() => {
    getUserData()
  },[dltUser])
  return (
    <>
    {
      show?
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>User has been deleted!</Alert.Heading>
     
    </Alert>
    :""
    }
      <div className='container mt-2'>
        <h1 className='text-center mt-2'>MERN Image Upload Project</h1>
        <div className='text-end'>
          <Button variant="primary"><NavLink to="/register" className="text-decoration-none text-light">Add User</NavLink></Button>{' '}
        </div>
        <div className='row d-flex justify-content-between align-items-center mt-5'>
          {
            data.length > 0 ? data.map((el, i) => {
              return (
                <>
              <Card  style={{ width: '22rem', height: "18rem" }} className="mb-3">
                <Card.Img variant="top" src={`./uploads/${el.imgpath}`} style={{ width: "100px", textAlign: "center", margin: "auto",height:"100px" }} className='mt-2' />
                <Card.Body className='text-center'>
                  <Card.Title>User Name:{el.fname}</Card.Title>
                  <Card.Text>
                    Date Added :{moment(el.date).format("L")}
                  </Card.Text>
                  <Button variant="danger" className='col-lg-6 text-center' onClick={()=>dltUser(el._id)}>Delete</Button>
                </Card.Body>
              </Card>
              </>
                )
            })
              : ""
          }



        </div>
      </div>
    </>
  )
}

export default Home
