import React from "react";
import { connect } from "react-redux";
import { actionUserName } from "../../../config/redux/action";

const Login = (props) => {
    const changeUser = () => {
        props.changeUserName()
        console.log('user has changed')
    }

    return (
        <div>
            <p className="text-center text-blue-500 font-bold text-2xl">Login Page {props.userName}</p>
            <button className="bg-indigo-600 rounded-md py-4 px-8 text-white" onClick={changeUser}>Change Username</button>
        </div>
    )
}

const reduxState = (state) => ({
    popupProps: state.popup,
    userName: state.user
})

const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUserName)
})

export default connect(reduxState, reduxDispatch)(Login)