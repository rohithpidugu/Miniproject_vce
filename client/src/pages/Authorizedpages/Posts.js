import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import * as fetchPost from "../../store/actions/postactions"
import {Link} from 'react-router-dom'
import Comment from '../../components/Comments'
import CircularProgress from '@material-ui/core/CircularProgress'

const Posts  = ()=>{
    const [isLoading,setLoading] =useState(true);
    const state=useSelector(state => state.Auth.user)
    const dispatch=useDispatch();
    const [data,setData] = useState([])
    useEffect(()=>{
      dispatch(fetchPost.posts(setData,setLoading))
    },[])

    const likePost = (id)=>{
          fetch('http://localhost:3000/like',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId:id
              })
          }).then(res=>res.json())
          .then(result=>{
                   //   console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }
    const unlikePost = (id)=>{
          fetch('http://localhost:3000/unlike',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId:id
              })
          }).then(res=>res.json())
          .then(result=>{
            //   console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
          }).catch(err=>{
            console.log(err)
        })
    }

    const makeComment = (text,postId)=>{
          fetch('http://localhost:3000/comment',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId,
                  text
              })
          }).then(res=>res.json())
          .then(result=>{
              console.log(result)
              const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
             })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }

    const deletePost = (postid)=>{
        fetch(`http://localhost:3000/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.filter(item=>{
                return item._id !== result._id
            })
            setData(newData)
        })
    }
    if(isLoading){
      return(
        <div className="spinner" style={{marginTop:"300px"}}>
            <CircularProgress />
        </div>
      )
    }
    if (!isLoading && data.length === 0) {
      return (
        <div style={{marginTop:"300px"}}>
          <h2>No images to display</h2>
        </div>
      );
    }

   return (
       <div className="home">
           {
               data.map(item=>{
                   return(
                       <div className="card home-card" key={item._id}>
                           <div style={{display:"inline"}}>
                            <h5><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }><h4 style={{color:"blue"}}>{item.postedBy.name}</h4></Link> {item.postedBy._id == state._id 
                            && <i className="material-icons" style={{
                                marginLeft:"300px"
                            }} 
                            onClick={()=>deletePost(item._id)}
                            >delete</i>

                            }</h5>
                            </div>
                            <div className="card-image">
                                <img src={item.photo}/>
                            </div>
                            <div className="card-content">
                                <div class="card-content-symbols">
                                    {item.likes.includes(state._id)
                                    ? 
                                    <i className="material-icons"
                                            onClick={()=>{unlikePost(item._id)}}
                                    >thumb_down</i>
                                    : 
                                    <i className="material-icons"
                                    onClick={()=>{likePost(item._id)}}
                                    >thumb_up</i>
                                    }
                                    <Comment item={item} makeComment={makeComment}/>
                                </div>
                                <div  class="card-content-title">
                                <p>{item.likes.length} likes</p>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                </div>
                            </div>
                        </div> 
                   )
               })
           }
          
          
       </div>
   )
}


export default Posts;
