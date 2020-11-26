import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        sideBar: [
            { photo: require('./../photos/doctor.svg') },
            { photo: require('./../photos/fireman.svg') },
            { photo: require('./../photos/punk.svg') },
        ],
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimich' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Valera' }
            ],
            newMessageBody: '',

            messages: [
                { id: 1, message: 'Hello' },
                { id: 1, message: 'AHow are you?' },
                { id: 1, message: 'Get started' },
                { id: 1, message: 'VYahho!' }
            ]
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 777 },
                { id: 2, message: 'It is my first post', likesCount: 7 },
                { id: 3, message: 'It is my second post', likesCount: 543 }
            ],
            newPostText: ''
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addDialog(dialogMessage) {
        debugger;
        let newDialog = {
            id: 5,
            // message: state.dialogsPage.newDialogsText,
            message: dialogMessage,
            likesCount: 1,
        };
        this._state.dialogsPage.dialogs.push(newDialog);
        // state.dialogsPage.dialogs.push(newDialog);
        // state.dialogsPage.newDialogsText = '';
        // rerenderEntireTree(state);
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
       debugger;
        this._callSubscriber(this._state);
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});       // in 39 lesson
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});       // in 39 lesson
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});



export default store;
window.state = store;