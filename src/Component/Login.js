import React, {useState} from 'react';
import "./Login.css";
import {login} from "../Features/userSlice";
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import validator from 'validator'
import { useForm } from 'react-hook-form';


 
const Login = () => {
    const [name,setName] = useState("");
    const [firstname,setFirstName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {  errors } = useForm(); 
  const [errorMessage, setErrorMessage] = useState('')

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
    const classes = useStyles();

    const validate = (value) => {
  
        if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setErrorMessage('Is Strong Password')
        } else {
          setErrorMessage('Is Not Strong Password')
        }
      }
      

    const dispatch =  useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
            name:name,
            firstname: firstname,
            email:email,
            password: password,
            loggedIn: true,
        })
        );
    };

    return (
       
        <div className="login">
        
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
        
            <h1>Login Here </h1>
            <input 
            type="name" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}

            />
            <br></br><br></br>
         
          
<br></br>



            <input 
            type="email"
             placeholder="Email-id"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
             
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
              />

              
     
               <br></br><br></br>

            {/* <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}

            /> */}
            <input type="password"
             value={password} 
          onChange={(e) => validate(e.target.value)}></input>
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
           <br></br>
           <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      
    </form>

            <br></br><br></br>
            <button type= "submit" className="submit__btn">submit</button>
        </form>
            
        </div>
    )
}

export default Login
