import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Field from "redux-form/lib/Field";
import ReduxForm from "redux-form/lib/reduxForm";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New message'} name={'newMessageBody'} component={'textarea'}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = ReduxForm({form:'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (p) => {

    let dialogsElements = p.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);
    let messagesElements = p.messages.map(m => <Message message={m.message} user={m.user} key={m.id} />)

    const addNewMessage = (formData) => {
        p.addMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.wrapperAddMessage}>

                    <AddMessageReduxForm onSubmit={addNewMessage}/>

                </div>
            </div>
        </div>
    );
}

export default Dialogs;