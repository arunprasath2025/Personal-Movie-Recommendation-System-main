import React, { useState } from 'react'
import {useNavigate,useLocation} from "react-router-dom"
import '../styles/homepage.css';

function Homepage() {
    const location = useLocation();
    const navigate = useNavigate();
    const iv : any = []
    const[id,setid] = useState(location.state.show.id);
    const[ name ,setName] = useState(location.state.show.name);
    const[language,setLanguage]= useState(location.state.show.language);
    const[image,setImage ]= useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAMFBMVEXk5ueutLersbTP09Xn6eqxt7rh4+S2u77Y29zV2Nq8wcTJzc/d4OG5vsHCx8nFysx2ylK/AAACtklEQVRoge2aSZLDIAxFGQTY4OH+t208tJPOAJIjuatS/E1S3jwLhIAvK9XU1NTU1NTU1NTU9L0C+Pt7JdnbOY4hhHFK3aUvACoFY4zelP9FexUehniA9fECSV2ABzU9oVe8tuJ06Nwr9IqP0mz7Dr3Q3SDKTgX2ok5u6GGusLURo1fjXuhCIw99na21k4ErBDqHPkkMPERM4Jne89Ohw7FlBj4g2dok7tBx2baH7rnhI5qtDXeVR8/4osALx9SXO/FWGnAUNnPKDRS21iMrnJDra+iccOKU824v2NJ6wDtOOLq87XDOlU5LduZ0BxqbGU6bcm3mr4mcmnCscMKetsI5TzMw/ec6L11UXsEZ2Xk7J7G1493QaYHzHp8hkuA9J5u6p/KylSdUd/ZLS/2CeifOhbaKcJDiPUQtwtcZkVsyli1xTUVXOX60wh7kuNf4IcRyYz1G/FE9402Us6P8P7Jz7G/9x5Ut4sfc5Mf3dGNF0Wq5OenXeOME7ceD7p8d783zvkQwPLjexrhL7PYdr2x0ZpcOc3dtoyXT/NBba/vBXxf0Rl5wftftyQVc39kpjsGtrZ089y6EOKXey3a5MrhL21w/J3t+Ns69EB9gSOML7MMrOIHky2T3prg8voDm5YPqI478yw/W8+Dzmg5Eb2CptYkDD7a4kRXC/7joFXp4dfxnntSyh5xFr/hwfqM7O+L3ms/CiXbEm+CHE8GD/zzsDU/3Z/DNpDqdak1RTZgynXauZGUT6ZQ+Fjedcb4POnrea/eSU3RszhONVqRQlgHJfSEI1ekjmo1oYaad6m4TVO/vcq+ym+rrjdpTINFrbLnAEaGTDF6yymwvGHit18e8oTypaNnQbHW6yl9TENuWVBUbP4PsqJcnXXKhrfCCPwnJCKtkxXdWWqWEu/wD2qampqYv1Q/CWR25WJskOAAAAABJRU5ErkJggg==");
    const[type,setType] = useState(location.state.show.type);
    const[ rating,setRating ]= useState(location.state.show.rating.average);
    const[ summary,setSummary] = useState(location.state.show.summary);
  
    const [loading,setLoading] = useState(false)
    const  handlehome = async () => {
        setLoading(true)
        let a : any = []
        const URL=`https://kyromovieapi.herokuapp.com/next?userid=${location.state.user_id}`
        await fetch(URL)
          .then((response: Response) => response.json())
          .then((data) => {
            
            a = data
            setLoading(false)
          }).catch((err:any) => {
            handlehome()
         });
         
          
            setName(a.name);
            setLanguage(a.language)
            if(a.image.medium == null) {
              setImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAMFBMVEXk5ueutLersbTP09Xn6eqxt7rh4+S2u77Y29zV2Nq8wcTJzc/d4OG5vsHCx8nFysx2ylK/AAACtklEQVRoge2aSZLDIAxFGQTY4OH+t208tJPOAJIjuatS/E1S3jwLhIAvK9XU1NTU1NTU1NTU9L0C+Pt7JdnbOY4hhHFK3aUvACoFY4zelP9FexUehniA9fECSV2ABzU9oVe8tuJ06Nwr9IqP0mz7Dr3Q3SDKTgX2ok5u6GGusLURo1fjXuhCIw99na21k4ErBDqHPkkMPERM4Jne89Ohw7FlBj4g2dok7tBx2baH7rnhI5qtDXeVR8/4osALx9SXO/FWGnAUNnPKDRS21iMrnJDra+iccOKU824v2NJ6wDtOOLq87XDOlU5LduZ0BxqbGU6bcm3mr4mcmnCscMKetsI5TzMw/ec6L11UXsEZ2Xk7J7G1493QaYHzHp8hkuA9J5u6p/KylSdUd/ZLS/2CeifOhbaKcJDiPUQtwtcZkVsyli1xTUVXOX60wh7kuNf4IcRyYz1G/FE9402Us6P8P7Jz7G/9x5Ut4sfc5Mf3dGNF0Wq5OenXeOME7ceD7p8d783zvkQwPLjexrhL7PYdr2x0ZpcOc3dtoyXT/NBba/vBXxf0Rl5wftftyQVc39kpjsGtrZ089y6EOKXey3a5MrhL21w/J3t+Ns69EB9gSOML7MMrOIHky2T3prg8voDm5YPqI478yw/W8+Dzmg5Eb2CptYkDD7a4kRXC/7joFXp4dfxnntSyh5xFr/hwfqM7O+L3ms/CiXbEm+CHE8GD/zzsDU/3Z/DNpDqdak1RTZgynXauZGUT6ZQ+Fjedcb4POnrea/eSU3RszhONVqRQlgHJfSEI1ekjmo1oYaad6m4TVO/vcq+ym+rrjdpTINFrbLnAEaGTDF6yymwvGHit18e8oTypaNnQbHW6yl9TENuWVBUbP4PsqJcnXXKhrfCCPwnJCKtkxXdWWqWEu/wD2qampqYv1Q/CWR25WJskOAAAAABJRU5ErkJggg==")

            } else{
              setImage(a.image.medium)
            }
            
            setRating(a.rating.average)
            setSummary(a.summary)
            setType(a.type)
          
       }

       const  handlehistory = () => {
        const url = `https://kyromovieapi.herokuapp.com/history?userid=${location.state.user_id}`;  
        console.log(url)  
         fetch(url)
           .then((response: Response) => response.json())
           .then((data) => {
             setLoading(false)
             navigate('/history',{state:{d : data, userid : location.state.user_id }});
           })
        

       }

       const  handlelogout= () => {
  
    
        navigate('/')
       
     
     }
 

        
  return (
     
    <div className='Hbody'>
        <div  className="card">  
         <div  className="card_img_container"> 
          <img className="card_img" src={image}></img> 
          </div>
          <div className="card__content">
     <span className="show-tag">SHOW NAME</span>
     <h1 className="show-name">{name}</h1>
    
     <div className="show-lang">
       <span className="show-tag">TYPE</span>
       <span className="show-type">{type}</span>
       <span className="lang">{language}</span>
     </div>
<div>
{!loading &&  ( <button className="cta-btn"  onClick={handlehome}>
                NEXT
           </button> )}

        {loading && (  <button className="cta-btn" onClick={handlehome} disabled>
          <i  className="fas fa-spinner fa-spin"></i>{" "}   
                Loading... 
           </button>)
           
           } 
     <button className="cta-btn" onClick={handlehistory}>
       <span>Recommended History</span>
     </button>
     <button className="cta-btn" onClick={handlelogout} >
       <span>Logout</span>
     </button>
       
</div>   
   </div>
      </div>   
          

    </div>
  )
}

export default Homepage