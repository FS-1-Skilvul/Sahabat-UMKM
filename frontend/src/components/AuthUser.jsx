import {React,useEffect,useState} from 'react'
import axios from 'axios'
function AuthUser() {
    const [isAuth,setIsAuth] = useState(false)

    useEffect(() => {
        const login = async() => {
                try{
                    const response = await axios.post("/login",{
                        email:"email",
                        password:"password"
                    });
                    // console.log(response);
                    const token = response.data.token;
                    if(token){
                        setIsAuth(true);
                    }
                    
                }   catch(err){
                    console.log(err);
                }
            }
            login();
    },[])
  return (
    <div>
  </div>
  )
}

export default AuthUser
