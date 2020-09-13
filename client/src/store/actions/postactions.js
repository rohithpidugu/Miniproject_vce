export const FETCHPOST = 'FETCHPOST';
export const REMOVEPOST = 'REMOVEPOST';
export const posts=(setData,setLoading)=>{
    return async dispatch=>{
        fetch('http://localhost:3000/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.posts)
            setLoading(false)
        })
    }
}