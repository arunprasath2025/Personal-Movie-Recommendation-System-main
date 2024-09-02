import { pool } from "../../config/config";

export const postdetails=  async (
 
  user_name : string,
  password : string,
  email : string,
 
   
) => { 
    
   const result = await pool.query(
      `insert into user_details(user_name,pass_word,email
        ) 
                values($1,$2,$3)`,
      [
       
        user_name,
        password,
        email
      ]);

      return result;

  };

  export const getlogindetails = async () => {
     
    return  pool.query(
      `select * from user_details;` );

    };

    export const getloginpass = async (user_name : string, password : string) => {
     
      return  pool.query(
        `select user_id,user_name,pass_word from user_details where user_name=$1 and pass_word=$2;`,[user_name,password] );
  
      };

      export const getsignuppass = async (user_name : string) => {
     
        return  pool.query(
          `select user_name from user_details where user_name=$1;`,[user_name] );
    
        };

    export const notrecommended = async (user_id : any, showID : any) => {
     
       const flag =  pool.query(
          `select show_id from show_details where user_id = $1 and show_id = $2;`,[user_id,showID] );
    return flag.rows;
        };

      export const postrecommended=  async (
            user_id : number,
            show_id  : number,
            show_name : any,
            show_language : any,
            show_type : any
             
          ) => { 
              
             return await pool.query(
                `insert into show_details(user_id,show_id,show_name,show_language,show_type) 
                          values($1,$2,$3,$4,$5)`,
                [
                  user_id,
                  show_id,
                  show_name,
                  show_language,
                  show_type
                ]);
          
                
          
            };

  export const getrecommadationhistory = async (user_id : any) => {
     
                return  pool.query(
                  `select * from show_details where user_id = $1;`,[user_id] );
            
                };

    
  export const removerecommadationhistory = async (user_id : any) => {
     
    return  pool.query(
      `delete from show_details where user_id = $1;`,[user_id] );

    };