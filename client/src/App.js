import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import { Card,Image,Icon,Button } from "semantic-ui-react";

const App = ()=> {

  const [items,setItems] = useState([]);
  const [sort, setSort] = useState(null)
 

useEffect(()=>{
  axios
  .get("/api/items")
  .then(res=>{
    setItems(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

const sortLikebymost=()=>{
 
   const  most = items.sort(function(a,b){return b.likes-a.likes});
     setItems(most,setSort(false)); 
       
}

const sortLikebyleast=()=>{
 
  const  least = items.sort(function(a,b){return a.likes-b.likes}); 
    setItems(least,setSort(true));
      
}






const renderItems=()=>{
  return items.map(item =>(
    
    <Card key = {`ite-${item.id}`} style={{ margin: "0em 1em" }} >
    <Image src= {item.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{item.name}</Card.Header>
      <Card.Meta>
        {/* <span className='date'>Joined in 2015</span> */}
      </Card.Meta>
      <Card.Description>
        {item.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
       likes: {item.likes}
      </a>
    </Card.Content>
  </Card>
  

   
  ))
}

  return (
    <>
      <Button primary onClick ={sortLikebymost} >Sort by most</Button>
    <br/>
      <Button primary onClick ={sortLikebyleast} >Sort by least</Button>
    <br/>
    
<Card.Group   >
   {sort? renderItems(): renderItems()}
   </Card.Group>
   </>
  )
}

// const RowCenter = styled.div`

// `
// t.string "name"
// t.string "image"
// t.text "description"
// t.integer "likes"






export default App;
