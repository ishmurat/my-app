let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
        newDialogsText: 'Hey, how are you?',

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
        newPostText: 'it-camasutrs.com'
    },
}
window.state = state;
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 1,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
/////////////////////////////////////





export let addDialog = () => {
    let newDialog = {
        id: 5,
        message: state.dialogsPage.newDialogsText,
        likesCount: 1,
    } 
    state.dialogsPage.dialogs.push(newDialog);   
    state.dialogsPage.newDialogsText = '';
    rerenderEntireTree(state);
};
export let updateNewMessageText = (updateDialog) => {
    state.dialogsPage.newDialogsText = updateDialog;
    rerenderEntireTree(state);
};
export default state;