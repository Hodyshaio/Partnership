import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import './Question.scss';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
        <div key={this.props.idx} className="ui raised centered card">
            <div className="content">
                <div className="header">{this.props.question.questionText}</div>
                <div className="meta">
                    {this.props.question.category && this.props.question.category.map((ctgry, idx) => (
                        <span className="left category" key={idx}>{ctgry}</span>))
                    }
                    <span className="right floated time">{new Date().toLocaleString()}</span>
                </div>
                <div className="description">
                    <p>{this.props.question.productDescription}</p>
                </div>
                {this.state.showMore ?
                    <div>
                        <div>
                            {this.props.question.productImage && this.props.question.productImage.map((img, idx) => (
                                <img className="ui avatar image" src={img} key={idx} />))
                            }
                        </div>
                        <div className="right description">
                            <p>Time left for question: {this.props.question.timePeriod}</p>
                        </div>
                        <Button btnType="Enter" clicked={() => this.props.history.push('/answer', {
                            prop: this.props.question,
                            foo: 'bar'
                        })}>Posting Answer</Button>
                    </div> : null}
                <Button clicked={() => { this.setState({ showMore: !this.state.showMore }) }}>{this.state.showMore ? 'Read Less.....' : 'Read More.....'}</Button>
            </div>
            <div className="extra content">
                <span className="left floated like">
                    <i className="like icon"></i>
                 Like
            </span>
                <div className="right floated author">
                    <img className="ui avatar image" src="/images/avatar/small/matt.jpg" /> insert user
            </div>
            </div>
        </div >);
    }
}

export default Question;