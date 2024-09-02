import { Response, Request } from 'express';
import { postdetails,getlogindetails,getloginpass, getrecommadationhistory,removerecommadationhistory,getsignuppass} from '../dao/queries';
import { getashow } from "./api";

const signup = async (req: Request, res: Response) => {
    const {
      
        user_name,
        password,
        email
    } = req.body;
  
  
    const Data = await postdetails(
     
      user_name,
      password,
      email
    );
    Data.json;
    res.send(Data);
  };

  const getlogin = async (req: Request, res: Response) => {
    const Datas = await getlogindetails();
    Datas.json;
    return res.send(Datas.rows);
  };



const getshow =async (req: Request, res: Response) => {
    const userid = req.query.userid;
    let getRandShow = await getashow;

    getRandShow(userid).then((show : any)=>{
         res.send(show.data);
        
    }).catch((err : any)=>{
        console.log(err);
    });
}

const gethistory = async (req: Request, res: Response) => {
    const userid = req.query.userid;
    const Datas = await getrecommadationhistory(userid);
    Datas.json;
    return res.send(Datas.rows);
  };

  const deletehistory = async (req: Request, res: Response) => {
    const userid = req.query.userid;
    const Datas = await removerecommadationhistory(userid);
    Datas.json;
    return res.send(Datas.rows);
  };
  
  
  const verifysignup = async (req: Request, res: Response) => {
    const username : any = req.query.username;

    const Datas = await getsignuppass(username);
    Datas.json;
    return res.send(Datas.rows);
  
  };
    
  const verifylogin = async (req: Request, res: Response) => {
    const username : any = req.query.username;
    const password : any = req.query.password;
    const Datas = await getloginpass(username,password);
    Datas.json;
    return res.send(Datas.rows);
  
  };
  const next = async (req: Request, res: Response) => {
    const userid  = req.query.userid;
    const userID = userid as unknown as number;
    if(userid){
        res.redirect('/homepage?userid=' + userID);
    }
  };

export const testpasser = {

    getshow,
    signup,
    getlogin,
    gethistory,
    deletehistory,
    next,
    verifysignup,
    verifylogin
 }