import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} addDialog={props.addDialog} />)
    let newMessagesElement = React.createRef();
    let addDialog = () => {
        let text = newMessagesElement.current.value; // about this in 31 lesson at 16 minute
        props.addDialog(text);
    }

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.messages}>
            <div><textarea onChange={onMessageChange} ref={newMessagesElement}
                    value={props.newDialogsText} /></div>
                <div>
                    <button onClick={addDialog}>Add post</button>
                    <button>Remove</button>
            </div>
            </div>
            
        </div>
    )
}
export default Dialogs;