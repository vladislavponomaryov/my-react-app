const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Aleksei'},
        {id: 3, name: 'Sanya'}
    ],
    messages: [
        {id: 1, user: 'me', message: 'Hello'},
        {id: 2, user: 'companion', message: 'Hi'},
        {id: 3, user: 'me', message: 'How are you?'},
        {id: 4, user: 'companion', message: 'I\'m alright, how are you too?'},
        {id: 5, user: 'me', message: 'Fine'},
        {id: 6, user: 'companion', message: 'Whats are you doing?'},
        {id: 7, user: 'me', message: 'I\'m play football, and you?'},
        {id: 8, user: 'companion', message: 'I\'m relaxing'},
        {id: 9, user: 'me', message: 'Cool, bye'},
        {id: 10, user: 'companion', message: 'Bye'}
    ],
    messageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageText: '',
                messages: [...state.messages, {id: 11, user: 'me', message: state.messageText}]
            }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                messageText: action.text
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})

export default dialogsReducer;