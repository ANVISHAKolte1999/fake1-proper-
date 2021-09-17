import React, { useState } from "react";
import { useCookies } from "react-cookie";
import TimePicker from 'react-time-picker';
import {Col,Button} from 'react-bootstrap';

const Signoff = () => {
  const [name, setName] = useState("");
  
  const [time, setTimelocal] = useState('');
  const [cookies, setCookie] = useCookies(["user"]);
  const [fullname,setFullName] = useState();

  const onSubmits = (event) => {
      event.preventDefault();
    setFullName(name);
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handle = () => {
       setCookie("Name", name, { path: "/" });
      
       setCookie("time",time,{ path: "/" });
     };
  return (
    <>
    <div style={{display:'flex', marginLeft:'400px'}} className="main_div">
    
    
    <form onSubmit={onSubmits }>
      <h1 style={{display:'flex',marginTop:'15vh'}} > Sign Off {fullname}</h1>
      <br></br>
     Enter Your Name Here :<input style={{marginLeft:'35px'}}
        placeholder="name"
        
        onChange={inputEvent}
        value={name}

      />
     

      <div>
      <br/>
      <button style={{color:'blue',border:'700px',boxSizing:'70px',marginLeft:'155px', padding: '5px 32px',backgroundcolor:'black'}}  onClick={handle}>Sign off</button>
      </div>
      </form>
     
    </div>
    </>
  );
};

export default Signoff;
