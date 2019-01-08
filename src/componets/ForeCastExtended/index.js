import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class ForeCastExtended extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen || false,
            city: null
        }
    }

    handleCloseModal = () => {
        
        if( this.state.isOpen === true ) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isOpen !== this.props.isOpen) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    render() {

        const { city } = this.props;
        const { isOpen } = this.state
        
        return (
            <Fragment>
                <div className={`c-weather_details ${isOpen ? 'is-visible' : ''}`}>
                    <div className={`c-weather_details-overlay`} onClick={this.handleCloseModal}></div>
                    <div className={`c-weather_details-content`}>
                        Holaa {city}
                    </div>
                </div>
            </Fragment>
        );
    }
}

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default ForeCastExtended;