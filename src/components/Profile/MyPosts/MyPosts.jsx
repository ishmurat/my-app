import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'; // in 39 lesson
const MyPosts = (props) => {
  
 debugger;
  
  let postElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef(); // about this in 31 lesson at 14 minute

  let addPost = () => {
    props.dispatch(addPostActionCreator());  // in 39 lesson
  }
  let onPostChange = () => {
    let text = newPostElement.current.value; 
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
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
