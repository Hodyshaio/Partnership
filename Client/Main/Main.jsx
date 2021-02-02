import React, { Component } from 'react';
import Button from '../UI/Button/Button';
//import Questions from '../Questions/Questions';
import PostingQuestion from '../PostingQuestion/PostingQuestion';

class Main extends Component {
    constructor(props){
        this.state = {
            showPosting: false
        }
    }

    showPosting = () => {
        console.log("button posting");
        this.setState({ showPosting: true });
    }

    render() {
        const s = this.state.showPosting ? <PostingQuestion /> : <Button clicked={this.showPosting} btnType="Enter">Posting Question</Button>;
        return (
            <div>
                <h1>Main</h1>
                {s}
            </div>);
    }
}

export default Main;