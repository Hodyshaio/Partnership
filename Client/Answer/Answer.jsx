import React, { Component } from 'react';
import Timer from '../UI/CountdownTimer/Timer';
import Popup from '../UI/Popup/Popup';
import addTimeToTimer from '../UI/CountdownTimer/Timer';
import '../Answer/Answer.scss';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.location.state.prop,
            spans: 0,
            showImgPopup : false
        }
        this.elementImg = React.createRef();
    }

    componentDidMount() {
        this.elementImg.current.addEventListener('load',this.setSpans);
    }

    componentWillUnmount(){
        this.elementImg.current.removeEventListener('load',this.setSpans)
    }

    setSpans = () => {
        const spans = Math.ceil(this.elementImg.current.clientHeight / 10);
        console.log('spans =>',spans);
        this.setState({
            spans
        });
    }

    showImagePopup = (event) => {
        this.setState({ showImgPopup : true });
    }

    closePopup = () => {
        this.setState({ showImgPopup : false });
    }

    render() {
        const popup = this.state.showImgPopup ? <Popup image={this.state.question.productImage} 
        onClick={this.closePopup}/> : null;
        return (
            <div>
                <div className="container">
                    <h1>Answer........</h1>
                    <div>
                        <Timer timer={this.state.question.timePeriod}/>
                    </div>
                    {/* <button className="ui left floated toggle top secondary basic button"
                        onClick={addTimeToTimer}>Add / Miss Timer</button> */}
                    <p>questionText: {this.state.question.questionText}</p>
                    {/* <div className="gallery">
                        <div className="gallery-item ui four column grid">
                            {this.state.question.productImage.map((img, idx) => (
                                <img src={img} key={idx} alt='answer of user' className="gallery-image"/>
                            ))}
                        </div>
                    </div> */}
                    <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                    {popup}
                    {this.state.question.productImage.map((img, idx) => (
                        <img className="regular-image" onClick={this.showImagePopup}
                        src={img} ref={this.elementImg} key={idx}/>))
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default Answer;