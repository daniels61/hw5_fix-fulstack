import React, { Component } from 'react';
import { Link } from "react-router-dom";


class SideBar extends Component {
  render() {
  return (
    <div className="right">
      <h1>Latest</h1>
      <h3>Blog post 1# <Link to={"/posts/1"}>Go to page</Link></h3>
      <h3>Blog post 2# <Link to={"/posts/2"}>Go to page</Link></h3>
      <h3>Blog post 3# <Link to={"/posts/3"}>Go to page</Link></h3>
      <p>________________________</p>
      <h1>Popular</h1>
      <h3>Blog post 3# <Link to={"/posts/3"}>Go to page</Link></h3>
      <h3>Blog post 1# <Link to={"/posts/1"}>Go to page</Link></h3>
      <h3>Blog post 2# <Link to={"/posts/2"}>Go to page</Link></h3>
    </div>
  );
}
}
export default SideBar;

