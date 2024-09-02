import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../styles/loginpage.css';


function Signuppage() {
 
    
  const formData  = React.useRef<HTMLFormElement>(null);
      const navigate = useNavigate();

      const  handlelogin = () => {
  
    
        navigate('/')
       
     
     }
  const add =  async (event : React.SyntheticEvent) =>{
     event.preventDefault();
    const newProduct = {
        user_name: formData?.current?.username.value,
        pass_word  : formData?.current?.u_password.value,
        email  : formData?.current?.u_email.value

    }
   
    let res : any = 2
    const signupURL=`https://kyromovieapi.herokuapp.com/verifysignup?username=${newProduct.user_name}`
   await axios.get(signupURL,
    ).then((response) => res = response.data);
  
     if(res [0] != null){
        if(res[0].user_name == newProduct.user_name){
          console.log(res[0].user_name);
          alert("USER ID ALREADY TAKEN");

        } 
      }else {
        const userregisterURL=`https://kyromovieapi.herokuapp.com/signup`;
        axios.post(userregisterURL,{
            user_name : newProduct.user_name,
            password : newProduct.pass_word,
            email : newProduct.email
        }).then(()=>  alert("REGISTERED SUCCESSFULLY")).catch((err:any) => {
            alert("ERROR");
         });
      }
        
  

        }






                

  
   

  return (
    
    <header className="showcase">
    <div className="bg-img">
        <div className="header">
        <div className="logo">
        
            </div>
        <div className="showcase-content">
                <div className="formm">
            <form onSubmit={add}  ref={formData}>
                      
              <h2>Register</h2>
              <div className="info">
              <div className="form-group">
                
                <input
                  className="email"
                  type="email"
                  placeholder="Email"
                  name="u_email"
                  required
                />
              </div>
           
              <div className="form-group">
                <input
                className="email"
                  type="text"
                  placeholder="Enter Username"
                  name = "username"
                />
              </div>


              <div className="form-group">
                
                <input
                className="email"
                  type="password"
                  placeholder="Password"
                  name="u_password"
                  required
                />
              </div>
             
           
             
</div>
            
<div className="btn">

              <button className="btn-primary" type="submit" >
                 Register
              </button>
             </div>

             <div className="btn">

              <button className="btn-primaryup" onClick={handlelogin} >
                Login
              </button>
             </div>
    
             <div>
                            <div>
                               
                            </div>

                           
                        
                        </div>
           
              
            </form>
            
          </div>
    </div>
        </div>
        </div>
        </header>
    
    
  );
}


export default Signuppage;