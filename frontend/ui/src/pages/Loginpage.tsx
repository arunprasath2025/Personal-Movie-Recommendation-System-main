import React from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../styles/loginpage.css';
const iv :any = 1;



async function logindetails (user_name : string , pass_word : string){
    let res : any = 2
    const URL=`https://kyromovieapi.herokuapp.com/verifylogin?username=${user_name}&password=${pass_word}`
   await axios.get(URL,
    ).then((response) => res = response.data);
   
     return res[0] 
  
}


function Loginpage() {
    const formData  = React.useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    
    const  handlesignup = () => {
  
    
       navigate('/register')
      
    
    }
const add =  async (event : React.SyntheticEvent) =>{
   event.preventDefault();
  const newProduct = {
      user_name: formData?.current?.username.value,
      pass_word  : formData?.current?.u_password.value,
      

  }
  
 
  const results = await logindetails(newProduct.user_name,newProduct.pass_word)

  if (results != null ) {

     let b : any=results.user_id;
     let a : any= 2;

    if(results.user_name == newProduct.user_name && results.pass_word == newProduct.pass_word){
        
        const URL=`https://kyromovieapi.herokuapp.com/homepage?userid=${a}`
      await  fetch(URL)
        .then((response: Response) => response.json())
        .then((data) => {
          
          a = data
        }).catch((err:any) => {
            alert("USER ID ALREADY TAKEN");
         });
        
        navigate('/homepage',{state : {show : a,user_id : b}});
        
        
    } 
} else {
    alert("WRONG CRENDTIALS")
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
                      
              <h2>LOGIN</h2>
              <div className="info">
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
                 Login
              </button>
             </div>

             <div className="btn">

              <button className="btn-primaryup" onClick={handlesignup} >
                Signup
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
  )
}

export default Loginpage

