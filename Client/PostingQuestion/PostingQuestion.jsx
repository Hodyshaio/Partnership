import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axois from 'axios';
import Questions from '../Questions/Questions';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';
import './PostingQuestion.scss';

class PostingQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postingquestionForm: {
                questionText: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Question Title'
                    },
                    value: '',
                    validation: {
                        required: true,
                        valid: (value) => { return value.match(/^([a-zA-Z ]){2,30}$/); },
                    },
                    touched: false
                },
                productImage: { // <img src={require('...')}/>
                    elementType: 'input-file',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'upload product image'
                    },
                    validation: {
                        extentions: ['*.jpg', '*.jpeg', '*.png']
                    },
                    value: []
                },
                productDescription: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Description'
                    },
                    value: '',
                    validation: {
                        required: true,
                        valid: (value) => { return value.match(/^([a-zA-Z ]){2,30}$/); },
                    }
                },
                timePeriod: {
                    elementType: 'calendar',
                    elementConfig: {
                        type: 'datetime-local',
                        placeholder: 'Next appointment'
                    },
                    value: '',
                },
                category: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            { value: 1, label: 'Event dresses' },
                            { value: 2, label: 'Cloth' },
                            { value: 3, label: 'Other' }
                        ]
                    },
                    placeholder: 'Category',
                    value: []
                }
            },
            loading: true,
            showForm: false
        }
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    inputChangedHandler = (event, inputIdetifier) => {
        // inputIdetifier = מזהה אינפוט
        const updatedPostingquestionForm = {
            ...this.state.postingquestionForm
        }
        const updatedFormElement = {
            ...updatedPostingquestionForm[inputIdetifier]
        }
        if (event.target) {
            updatedFormElement.value = event.target.value;
        } else {
            updatedFormElement.value = event;
        }
        updatedFormElement.touched = true;
        updatedPostingquestionForm[inputIdetifier] = updatedFormElement;
        this.setState({ postingquestionForm: updatedPostingquestionForm });
    }

    postData = () => {
        this.props.history.push('/allQuestions', {
            prop: this.props.questions,
            foo: 'bar'
        });
        console.log('AFTER_POST_DATA.........(posting question)');
    }

    postingquestionHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.postingquestionForm) {
            formData[formElementIdentifier] = this.state.postingquestionForm[formElementIdentifier].value;
        }
        this.setState({ showForm: true });
        const questions = [...this.props.questions];
        questions.push(formData);
        console.log('questions..... -> ', questions);
        this.props.addNewQuestion(questions[questions.length - 1], questions);
        this.postData();
        this.setState({ loading: true });
    }

    render() {

        const formElementArray = [];
        for (let key in this.state.postingquestionForm) {
            formElementArray.push({
                id: key,
                config: this.state.postingquestionForm[key]
            })
        }

        let form = (
            <form onSubmit={this.postingquestionHandler}>
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
                    />
                ))}
                <Button btnType="Enter">Posting</Button>
            </form>
        );

        const show = this.state.loading ? "hiiiiii" : form;

        return (
            <div>
                {show}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        question: state.reducer.selectedQuestion,
        questions: state.reducer.Questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewQuestion: (question, questions) => {
            fetch('http://localhost:9000/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(question)
            }).then((res) => {
                console.log('axois.post.question -> ', question);
            }).catch((error) => {
                console.log('axois.post error -> ', error);
            });
            dispatch({
                type: 'ADD_QUESTION',
                payload: questions
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostingQuestion));