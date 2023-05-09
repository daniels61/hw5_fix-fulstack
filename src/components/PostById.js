import { useParams } from 'react-router-dom';
import Post from '../components/Post';

// list for all posts.
const lst = [
  { id: 1, title: 'Blog post 1#', description: 'My first blog post is all about me, and how to write a new post in my blog.', published: '1 day ago', img: process.env.PUBLIC_URL + '/picture/Profile.png' },
  { id: 2, title: 'Blog post 2#', description: 'My second blog post is all about my blog post.', publlished: '2 day ago', img: process.env.PUBLIC_URL + '/picture/aboutme.jpg' },
  { id: 3, title: 'Blog post 3#', description: 'My Third blog post is all about me, and how to write a new post in my blog.', published: '3 day ago', img: process.env.PUBLIC_URL + '/picture/contact.jpg' },
];

const PostById = () => {
  const { id } = useParams();
  const post = lst.find((item) => item.id === Number(id));
  return (
    <div>
      <Post
        key={post.id}
        description={post.description}
        img={post.img}
        title={post.title}
        publlished={post.publlished}
      />
    </div>
  );
};

export default PostById;