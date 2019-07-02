import React, { Component } from 'react';
import './ModalUI.css'

import bodyScrollService from "services/service.bodyScroll";

class ModalUI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isOpen !== this.props.isOpen) {
            bodyScrollService(this.props.isOpen);
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
        const {content} = this.props;
        return(
            <div className={`ui-modal ${isOpen ? 'is-visible' : ''}`}>
                <div className={`ui-modal_overlay`} onClick={this.handleCloseModal}></div>
                <div className={`ui-modal_content`}>
                    {
                        content
                            ? content
                            : 'Empty modal'
                    }
                </div>
            </div>
        )
    }

}

export default ModalUI;