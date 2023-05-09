import './App.css';
import AboutMe from './pages/AboueMe';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import NewPost from './pages/NewPost';
import Login from './pages/Login';
import PostById from './components/PostById'


function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<AboutMe/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="/posts/:id" component={PostById} />
        <Route path="new_post" element={<NewPost/>} />

        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  

  </>
  );
}



export default App;
