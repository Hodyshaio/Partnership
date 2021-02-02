import React, { Component } from 'react';
import Input from '../UI/Input/Input';
// import Spinner from '../UI/Spinner/Spinner';
// import Button from '../UI/Button/Button';
import SignUp from '../SignUp/SignUp';
import { checkValidity } from '../Validation/FormValidation';
import '../Login/Login.scss';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                userName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'User Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        valid: (value) => { return (/^([A-Za-z/ ]){2,15}$/).test(value) ? true : "username not valid"; }
                        // valid: (value) => { return value.match(/^([A-Za-z/ ]){2,15}$/) ? true : "username not valid"; }
                    },
                    touched: false,
                    iconName: 'user circular link icon'
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        valid: (value) => { return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/); }
                    },
                    touched: false,
                    iconName: 'lock circular link icon'
                }
            },
            showSignup: false
        };
    }

    loginHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }
        this.setState({ showSignup: true });
    }

    inputChangedHandler = (event, inputIdetifier) => {
        // inputIdetifier = מזהה אינפוט
        const updatedLoginForm = {
            ...this.state.loginForm
        }
        const updatedFormElement = {
            ...updatedLoginForm[inputIdetifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement, updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLoginForm[inputIdetifier] = updatedFormElement;
        console.log("[updatedFormElement] => ", updatedFormElement);
        this.setState({ loginForm: updatedLoginForm });
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.loginForm) {
            formElementArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }

        let form = (
            <form onSubmit={this.loginHandler}>
                <h1>Login</h1>
                <div className="SocialButtons">
                    <button className="ui circular facebook icon button">
                        <i className="facebook icon"></i>
                    </button>
                    <button className="ui circular github icon button">
                        <i className="github icon"></i>
                    </button>
                    <button className="ui circular linkedin icon button">
                        <i className="linkedin icon"></i>
                    </button>
                    <button className="ui circular google plus icon button">
                        <i className="google plus icon"></i>
                    </button>
                </div>
                <span> or use your account </span>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        icon={formElement.config.iconName}
                    />
                ))}
                <a href="#">Forgot your password?</a>
                {/* <Button btnType="Enter">LOGIN</Button> */}
                <div>
                    <button className="ui animated button">
                        <div className="visible content">Login</div>
                        <div className="hidden content">
                            <i aria-hidden="true" className="sign in alternate right icon"></i>
                        </div>
                    </button>
                </div>
            </form>
        );

        const signup = this.state.showSignup ? <SignUp /> : form;
        // Change to this .....
        // const show = this.state.show ? <Home /> : form;

        return (
            <div className="ContactData">
                {signup}
            </div>
        );
    }
}

export default Login;