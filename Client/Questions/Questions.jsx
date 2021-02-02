import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PostingQuestion from '../PostingQuestion/PostingQuestion';
import Question from '../Question/Question';
import Button from '../UI/Button/Button';
// import './Questions.scss';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
            showPosting: false
        }
    }

    callAPI() {
        fetch("http://localhost:9000/questions")
            .then(res => res.json())
            .then(res => this.props.getAllQuestions(res));
    }

    componentDidMount() {
        this.callAPI();
    }

    showPostingHandle = () => {
        this.setState({ showPosting: true });
    }

    render() {
        const showQuestions = this.props.questions.map((question, index) => {
            return (
                <Question idx={index} question={question}/>
            )
        });

        const showBtnPosting = this.state.showPosting ? <PostingQuestion /> : <Button clicked={this.showPostingHandle} btnType="Enter">Posting Question</Button>;

        return (
            <div className="ui celled grid" >
                < div className="row" >
                    <div className="ten wide column">
                        <h5>Questions.......</h5>
                        {showBtnPosting}
                        {showQuestions}
                    </div>
                </div>
            </div >
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllQuestions: (questions) => dispatch({
            type: 'SET_ALL_QUESTIONS',
            payload: questions
            })
        }
    }

const mapStateToProps = state => {
    return {
        loading: state.reducer.loading,
        questions: state.reducer.Questions
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));