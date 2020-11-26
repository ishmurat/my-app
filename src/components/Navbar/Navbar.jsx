import React from 'react';
import s from './Navbar.module.css';
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  // const photoIconElements = props._state.sideBar.map((el) => 
  // {
  //   return (
  //     <div className={n.photo}>
  //       <img src={el.photo} />
  //     </div>
  //   );
  // };
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
    {/*<div className={`${s.item} ${s.active}`}> ////aboute this in 14 lesson at 33 min./// */}
    <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
    <div className={s.item}>
      <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
    <div className={s.item}>
      <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
    <p>Friends: </p>
     <div className={n.photoIconElements}>
               <h1>Elements</h1>
            </div>
  </nav >
}
export default Navbar; 