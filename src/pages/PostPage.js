import React from "react";
import Post from "../components/Post";

//list for all posts.
const lst = [
  {id: 1, title:'Blog post 1#' ,description: 'My first blog post is all about me, and how to write a new post in my blog.',publlished: '1 day ago', img: process.env.PUBLIC_URL +'/picture/Profile.png' ,  },
  {id: 2, title:'Blog post 2#' ,description: 'My second blog post is all about my blog post.',publlished: '2 day ago', img: process.env.PUBLIC_URL +'/picture/aboutme.jpg' ,  },
  {id: 3, title:'Blog post 3#' ,description: 'My Third blog post is all about me, and how to write a new post in my blog.',publlished: '3 day ago', img: process.env.PUBLIC_URL +'/picture/contact.jpg' ,  },
 
]


const PostPage = () => {
  const posts = lst.map((item) => <Post key={item.id} description={item.description} img={item.img} title={item.title} publlished={item.publlished}/>)

  return <div>
    {posts}     
        
    </div>;
};




export default PostPage;