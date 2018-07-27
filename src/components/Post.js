import React from "react";
const style = {
  title: {
    fontWeight: "bold"
  },
  body: {
    fontSize: "18px"
  }
};
const Post = props => {
  return (
    <ul>
      {props.posts.map((post, index) => {
        return (
          <li
            onClick={() => {
              props.deleteHandler(index);
            }}
          >
            <div className="title" style={style.title}>
              {post.title} -
            </div>
            <div className="body" style={style.body}>
              {post.body}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Post;
