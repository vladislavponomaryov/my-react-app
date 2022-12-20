import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messageText: state.dialogsPage.messageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (body) => {
            dispatch(updateMessageTextActionCreator(body))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);