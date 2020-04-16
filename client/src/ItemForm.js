import React, { useState, } from "react";
import axios from "axios";
import {Button,Form, } from "semantic-ui-react";


const ItemForm = (props)=>{

  const [name, setName]=useState('')
  const [image, setImage]=useState('')
  const [description, setDescription]=useState('')
  const [likes, setLikes]=useState('')

  

  const handleSubmit =(e)=>{
    e.preventDefault();
    axios.post('/api/items',{name,image,description,likes,})
    .then( res => {
      props.addItem(res.data)
      props.toggleForm();
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
       <Form onSubmit={handleSubmit}>
       <Form.Group widths="equal">
       <Form.Input
        label="name"
        autoFocus
        name='name'
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />
       <Form.Input
        label="image"
        name='image'
        value={image}
        placeholder='image'
        onChange={(e) => setImage(e.target.value)}
      />
       
       <Form.Input
        label="description"
        name='description'
        value={description}
        placeholder='description'
        onChange={(e) => setDescription(e.target.value)}
      />
       <Form.Input
        label="likes"
        name='likes'
        value={likes}
        placeholder='likes'
        type='number'
        onChange={(e) => setLikes(e.target.value)}
      />
       </Form.Group>
        <Button>Submit</Button>
      </Form> 
    </>
  );
};

export default ItemForm

