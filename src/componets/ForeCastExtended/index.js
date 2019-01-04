import React, { Component } from 'react';


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
                isOpen: false
            }) ;
        }
        console.log('clicked', this.state.isOpen);
    }

    render() {

        const { city } = this.props;
        const { isOpen } = this.state
        
        return (
            <div className={`c-weather_details ${isOpen ? 'is-visible' : ''}`} onClick={this.handleCloseModal}>
                Holaa {city}
            </div>
        );
    }
}

export default ForeCastExtended;