import React from 'react';
import Select from 'react-select';
import { RadioButton, RadioGroup } from 'react-radio-buttons';
import ImageUploader from 'react-images-upload';
import  DateAndTimePickers  from '../Calendar/Calendar';
import './Input.scss';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputValid: true
        };
        this.isValid = this.isValid.bind(this);
    }

    isValid() {
        this.setState({ isInputValid: true });
        if (this.props.shouldValidate) {
            if (this.props.shouldValidate.required) {
                if (this.props.touched && this.props.value === "") {
                    this.validateText = "required field";
                    this.setState({ isInputValid: false });
                }
            }
            if (this.props.value !== "") {
                let message = this.props.shouldValidate.valid(this.props.value);
                if (message !== true) {
                    this.validateText = message;
                    this.setState({ isInputValid: false });
                }
            }
        }
    }

    render() {
        console.log("[Input]");

        let inputElement = null;
        const inputClasses = ['InputElement'];
        let pictures = [];

        if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
            inputClasses.push('Invalid');
        }
        // message message-danger

        const onDrop = (pictureFiles, pictureDataURLs) => {
            pictures.push(pictures.concat(pictureDataURLs));
            console.log("[image] =>", pictures);
            console.log("[image - pictureFiles] =>", pictureFiles);
            console.log("[image - pictureDataURLs] =>", pictureDataURLs);
            this.props.changed(pictureDataURLs);
        }

        switch (this.props.elementType) {
            case ('input'):
                inputElement = (
                    <React.Fragment>
                        <div className="ui icon input">
                            <input
                                className={inputClasses.join(' ')}
                                {...this.props.elementConfig}
                                defaultValue={this.props.value}
                                onChange={this.props.changed}
                                onBlur={this.isValid}
                            />
                            <i aria-hidden="true" className={this.props.icon}></i>
                        </div>
                    </React.Fragment>
                );
                break;
            case ('input-radio'):
                inputElement = (<RadioGroup horizontal>
                    {this.props.elementConfig.status.map((item, index) => {
                        return <RadioButton key={index} value={item.value}>{item.value}</RadioButton>
                    })}
                </RadioGroup>);
                break;
            case ('textarea'):
                inputElement = <textarea />;
                break;
            case ('select'):
                inputElement = (<Select
                    onChange={this.props.changed}
                    placeholder={this.props.placeholder}
                    options={this.props.elementConfig.options}
                    isMulti />);   // Some options
                break;
            case ('input-file'):
                inputElement = <React.Fragment>
                    <ImageUploader
                        withIcon={false}
                        withPreview={true}
                        buttonText='Choose profile picture'
                        onChange={(e, pictureURL)=>{onDrop(e, pictureURL)}}
                        imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                        maxFileSize={5242880}
                        singleImage={false}
                        withLabel={false} />
                </React.Fragment>
                break;
            case ('calendar'):
                inputElement = DateAndTimePickers;
            default:
                inputElement = <input
                    className={inputClasses.join(' ')}
                    {...this.props.elementConfig}
                    defaultValue={this.props.value}
                    onChange={this.props.changed}
                />;
        }

        return (
            <div className="Input">
                {!this.state.isInputValid ? <label className="Label">{this.validateText}</label> : null}
                {inputElement}
            </div>
        );
    }
}

export default Input;