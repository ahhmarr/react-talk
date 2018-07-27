import React from "react";
import css from './Post.css';
const Post = props => {
  return (
    <ul className={css.ul}>
      {props.posts.map((post, index) => {
        return (
          <li key={index+1}
            onClick={() => {
              props.deleteHandler(index);
            }}
          >
            <div className={css.title} >
              {post.title} -
            </div>
            <div className={css.body}>
              {post.body}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Post;
