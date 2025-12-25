"use server"

export const submitActions = async (e)=>{
  
    console.log(e.get("name"), e.get("email"),e.get("message"))
 
}