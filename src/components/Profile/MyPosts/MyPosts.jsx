import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let postElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef(); // about this in 31 lesson at 14 minute

  let addPost = () => {
    let text = newPostElement.current.value; // about this in 31 lesson at 16 minute
    props.addPost(text);
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div className={s.postsBlock}>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.item}>
        {postElements}
      </div>
    </div>

  );
}
export default MyPosts; 