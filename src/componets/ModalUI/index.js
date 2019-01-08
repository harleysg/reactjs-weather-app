import React, { Component } from 'react';
import 'ModalUI.css'

class ModalUI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isOpen !== this.props.isOpen) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    handleCloseModal = () => {
        if (this.state.isOpen === true) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    render() {
        const { isOpen } = this.state;
        return(
            <div className={`c-weather_details ${isOpen ? 'is-visible' : ''}`}>
                <div className={`c-weather_details-overlay`} onClick={this.handleCloseModal}></div>
                <div className={`c-weather_details-content`}>
                    {/* {props.children} */}
                </div>
            </div>
        )
    }

}

export default ModalUI;