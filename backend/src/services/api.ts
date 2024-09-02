
const axios = require("axios");
import { notrecommended,  postrecommended} from '../dao/queries';
function between(min : any, max : any) {
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

export const getashow =async (userId : any) => {
   
   
    let ms = 64668
    
    let getshowID = await chooseShow(userId,ms);
    
    const api_url = `https://api.tvmaze.com/shows/${getshowID}`;
  
    let res :any = "";
    await axios.get(api_url ).then((result : any) => res = result  ).catch((err:any) => {
        console.log(err);
      });

     await postrecommended(userId,res.data.id,res.data.name,res.data.language,res.data.type);

      return res

    
}


 const chooseShow = async (userId : any,maxShows : any) =>{
    let showID = between(1,maxShows);

    let notRec = await notrecommended(userId,showID);

   
       
    if (notRec != null) {
        chooseShow(userId,maxShows);
    }else{
      
        return showID
       

    }
}
