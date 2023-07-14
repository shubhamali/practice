import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function Login() {
  // const [toggle,setToggle]=useState(false);
  // const [count,setCount]=useState(0);
  const [data,postData]=useState([]);
const [body,setBody]=useState('')
//   const update=()=>{
//     setCount(count+1);
//   }
//   const dec=()=>{
//     setCount(count - 1);
//     if(count <= 0)
// {
//   setCount(0);
// }  }
useEffect(()=>{
      // setInterval(()=>{
      //   setCount(count + 1);
        // if(count>=25){
        //   setCount(1)
        // }
      // },1000)
      axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        console.log(res);
        postData(res.data)
      }).catch((err)=>{
        console.log(err)
      })
},[]);
const update=()=>{  
  axios.post('https://jsonplaceholder.typicode.com/posts',{body})
  .then(res=>{
    console.log("posting data:::::::::::::::::::::::::",res.data);
    // postData(res.data)
  }).catch((err)=>{
    console.log(err)
  });
  setBody('');
}
  return (
    <div>
      {
        data.map((val,index)=>(
          <tr key={index}>
            {/* <td>{val.title}</td> */}
             <td>{val.body}</td>
          </tr>
        ))
      }
      <form>
        <input type='text' value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button onClick={update}>submit</button>
      </form>
       {/* {
        toggle?<h1>FFFFFF</h1>:''
       } 
       <p>{count}</p>
       <button onClick={()=>setToggle(!toggle)}>Click</button> */}
       {/* <button onClick={update}>inc</button> */}
       {/* <button onClick={dec}>inc</button> */}
    </div>
  )
}
