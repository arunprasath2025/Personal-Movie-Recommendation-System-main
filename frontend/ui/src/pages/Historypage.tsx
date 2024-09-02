
import axios from "axios";
import {useLocation,useNavigate} from "react-router-dom"
import '../styles/homepage.css';
import '../styles/historypage.css';

function Historypage() {

    const location = useLocation();
    const navigate  = useNavigate();

    const  handlehistory = async() => {
      const url = `https://kyromovieapi.herokuapp.com/clearhistory?userid=${location.state.userid}`;  
      console.log(url)  
      axios.delete((url)).then(() => {
      
        const URL=`https://kyromovieapi.herokuapp.com/homepage?userid=${location.state.userid}`
         fetch(URL)
          .then((response: Response) => response.json())
          .then((data) => {
            alert("History Cleared");
            navigate('/homepage',{state : {show : data,user_id : location.state.userid}});
          }).catch((err:any) => {
              alert("History Cleared");
           });
          
       
           
         })
         }
     const  handlelogout= () => {
  
    
      navigate('/')
     
   
   }

   const  handlehomepage = async() => {
    const url = `https://kyromovieapi.herokuapp.com/clearhistory?userid=${location.state.userid}`;  
    console.log(url)  
  
    
      const URL=`https://kyromovieapi.herokuapp.com/homepage?userid=${location.state.userid}`
       fetch(URL)
        .then((response: Response) => response.json())
        .then((data) => {
        
          navigate('/homepage',{state : {show : data,user_id : location.state.userid}});
        })
    

      }

    
  return (
    
    <div className='Hbody'>
    <div  className="card">
 
    <div  className="card__img__container"> 
          
 
       <div className="tableWrapper">
         <div className="tableWrapper__head">
             <table className="responsiveTableLayout">
                 <thead>
                     <tr>
                         <th>SHOW NAME</th>
                         <th>TYPE</th>
                         <th>LANGUAGE</th>
                     </tr>
                 </thead>
             </table>
         </div>
         <div className="tableWrapper__body">
             <table className="responsiveTableLayout">
 
                 <tbody>
           {
       location.state.d.map((result: any ,i: React.Key | null | undefined) => {
  
           return (
             
             
                     <tr  key={i}>
                         <td data-title='SHOW NAME'>{result.show_name}</td>
                         <td data-title='TYPE'>{result.show_type}</td>
                         <td data-title='LANGUAGE'>{result.show_language}</td>
                     </tr>
                   
        
            
           )
            
           }) 
           
      }
        </tbody>
                </table>
 
         </div>
      </div>
        
   </div>
 
     <div className="card__content">
 
      <button  className="cta-btn"  onClick={handlehistory}>
                  RESET HISTORY
             </button>
             <button  className="cta-btn" onClick={handlelogout}>
                 Logout
             </button>
             <button  className="cta-btn" onClick={handlehomepage}>
                 Homepage
             </button>
 
 
      </div>
 
 
 
 
 
   </div>
 
 
 
 
 
  </div>
  
  )
}

export default Historypage