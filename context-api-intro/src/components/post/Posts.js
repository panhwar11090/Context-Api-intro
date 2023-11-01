import React,{useContext, useEffect} from 'react'
import PostItem from './PostItem';
import globalContext from '../../context/global/globalContext';

const Posts = () => {
    const{page,addPosts, posts}= useContext(globalContext);

    useEffect(()=>{
        addPosts(page);
        //eslint-disable-next-line
    },[])
  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {
            posts.map((post,index)=> <PostItem key={index} post={post} index={index}></PostItem>)
        }
      </ul>
      <button onClick={()=> addPosts(page)}>Add More</button>
    </div>
  )
}

export default Posts
