import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'   //About this in 19 lesson at 9 min.
import News from './components/News/News'
import Music from './components/Music/Music'
const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state} />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' 
          render={() => <Dialogs
            state={props.state.dialogsPage}
            messages={props.state.dialogsPage} 
            addDialog={props.addDialog}
            updateNewMessageText={props.updateNewMessageText} />} />
       
        <Route path='/profile'
          render={() => <Profile
            profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>} />
        <Route path='/news' component={() => <News />} />
        <Route path='/music' component={() => <Music />} />
      </div>
    </div>

  );
}



export default App;
