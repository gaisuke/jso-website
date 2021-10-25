import React, {Component} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../config/firebase/firebase";
import Button from "../../../components/atoms/Button";

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Success: ', user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    render() {
        return (
            <div>
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-center text-green-500 font-bold text-2xl">Register Page</p>
                    <input className="rounded-md" id="email" placeholder="Put your email here" type="text" onChange={this.handleChangeText}/>
                    <input className="rounded-md" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}/>
                    <Button onClick={this.handleRegisterSubmit} title="Register"/>
                </div>
                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}

export default Register