import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axois from 'axios';
import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';
//import PostingQuestion from '../PostingQuestion/PostingQuestion';
import Main from '../Main/Main';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        valid: (value) => { return value.match(/^([a-zA-Z/ ]){2,25}$/); },
                    },
                    touched: false,
                    iconName: 'user circular link icon'
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'E-Mail'
                    },
                    value: '',
                    validation: {
                        required: true,
                        valid: (value) => { return value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/); },
                    },
                    touched: false,
                    iconName: 'mail circular link icon'
                },
                category: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            { value: 'event dresses', label: 'Event dresses' },
                            { value: 'cloth', label: 'Cloth' }
                        ]
                    },
                    placeholder: 'Category',
                    value: ''
                },
                statusUser: {
                    elementType: 'input-radio',
                    elementConfig: {
                        type: 'radio',
                        placeholder: 'Status',
                        status: [
                            { value: 'agent', displayValue: 'Agent' },
                            { value: 'interested', displayValue: 'Interested' }
                        ]
                    },
                    value: ''
                },
                userName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'User Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        valid: (value) => { return value.match(/^([a-zA-Z/ ]){2,15}$/); }
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
                },
                picture: {
                    elementType: 'input-file',
                    elementConfig: {
                        // type: 'file',
                        type: 'text',
                        placeholder: 'upload profil picture'
                    },
                    validation: {
                        extentions: ['*.jpg', '*.jpeg', '*.png']
                    }
                }
            },
            loading: true,
            showPostingQuestion: false
        }
        // this.errorMessage = null;
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    inputChangedHandler = (event, inputIdetifier) => {
        // inputIdetifier = מזהה אינפוט
        const updatedSignUpForm = {
            ...this.state.signupForm
        }
        const updatedFormElement = {
            ...updatedSignUpForm[inputIdetifier]
        }
        updatedFormElement.value = event.target.value;
        // updatedFormElement.valid = checkValidity(updatedFormElement, updatedFormElement.value, updatedFormElement.validation);
        // if (!updatedFormElement.valid) {
        //     console.log("[not valid]");
        //     // add input error message
        //     this.errorMessage = 'ERROR';
        // }
        updatedFormElement.touched = true;
        updatedSignUpForm[inputIdetifier] = updatedFormElement;
        this.setState({ signupForm: updatedSignUpForm });
    }

    signupHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[formElementIdentifier].value;
        }
        this.setState({ showPostingQuestion: true });
        const users = [...this.props.users];
        users.push(formData);
        console.log('users..... -> ', users);
        this.props.addNewUser(users[users.length - 1], users);
        this.props.history.push('/allQuestions');
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.signupForm) {
            formElementArray.push({
                id: key,
                config: this.state.signupForm[key]
            })
        }
        let form = (
            <form onSubmit={this.signupHandler}>
                <h1>Sign Up</h1>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        placeholder={formElement.config.placeholder}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        icon={formElement.config.iconName}
                    />
                ))}
                <Button btnType="Enter">SIGN UP</Button>
                {/*  sign out alternate */}
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        const show = this.state.showPostingQuestion ? <Main /> : form;

        return (
            <div>
                {show}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.reducer.Users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewUser: user => {
            fetch('http://localhost:9000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }).then((res) => {
                console.log('axois.post.user -> ', user);
            }).catch((error) => {
                console.log('axois.post error -> ', error);
            });
            dispatch({
                type: 'ADD_USER',
                payload: user
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));