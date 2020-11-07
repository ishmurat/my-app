import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, updateNewMessageText, addDialog } from './redux/state';
import { BrowserRouter } from 'react-router-dom'
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addDialog={addDialog} 
           updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

serviceWorker.unregister();
