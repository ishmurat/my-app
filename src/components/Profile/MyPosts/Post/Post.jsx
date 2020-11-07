import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt="My Awesome Image" src='https://yandex.ru/images/_crpd/Q7STB5G54/8c2b52J3RJsK/TZa9N6a_gbJvfgU172TK29udI8f-2hX7pj9rGghQJSfgWaiRPHdoc-KW8LLRHuvqXtFW_IenWRsLeXSn0tBaa11WnMKHuhXiLjpEgGplqst-mOaCqq-FS9Z-SwpJ1cRw'></img>
      {props.message}
      <div>
        {/* <span>Like</span> */}
        Likes {props.likesCount}
      </div>
    </div>
  );
}
export default Post; 