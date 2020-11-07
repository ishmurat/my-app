import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'
const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;       //  about this in 23 lesson in 9 min
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem