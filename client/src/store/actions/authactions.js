import M from 'materialize-css';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const signup = (email, password) => {
  return async dispatch => {
  }
};

export const login = (email, password) => {
  return async dispatch => {
    fetch("http://localhost:3000/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            password,
            email
        })
    }).then(res=>res.json())
    .then(data=>{
       if(data.error){
          throw data.error;
       }
       else{
           localStorage.setItem("jwt",data.token)
           localStorage.setItem("user",JSON.stringify(data.user))
           dispatch({type:"USER",payload:data.user})
           M.toast({html:"signin success",classes:"#43a047 green darken-1"})
       }
    }).catch(err=>{
        M.toast({html:err,classes:"#c62828 red darken-3"})
    })
  };
};

export const logout = () => {
  return async dispatch =>{
    localStorage.clear();
    dispatch({type:LOGOUT})
  }
};
