import React from 'react';

        const Post = (props) => {
            return ( <div className="frame" id="post">
            <img src={props.img} id="picture_frame" style={{ width: '15%', height: '5%' }} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}
              <br />
              <br />
              <br />Publlished {props.publlished} by Israel
            </p>
          </div>
            )
          }

  export default Post;
  