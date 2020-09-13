function handleErrors(response) {
    if (!response.ok) {
      if (response.status >= 500) {
        let err = new Error("ServerError");
        err.status = response.status;
        throw err;
      }
      if (response.status <= 501) {
        let err = new Error("ApplicationError");
        err.status = response.status;
        throw err;
      }
    } else {
      return response;
    }
  }
export const createPost=(title,body,url)=>{
    return fetch("http://localhost:3000/createpost",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            title,
            body,
            pic:url
        })
    })
    .then(handleErrors)
    .then(response=>{
        return response.json()
    })
    .catch(err=>err)
}