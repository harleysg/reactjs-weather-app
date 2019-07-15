import React, { Component } from "react";
import PropTypes from "prop-types";
/** @redux */
import { connect } from "react-redux";
/** @components */
import ForeCastExtended from "components/Weather/_foreCastExtended";

class ForeCastExtendedContainer extends Component {
    handledModal = stateModal => {
        if (stateModal === false) {
            // this.setState({ isOpenModal: false });
        } else {
            // this.setState({ isOpenModal: true });
        }
    };
    render() {
        const { city, isOpenModal } = this.props;
        return (
            <ForeCastExtended
                city={city}
                isOpen={isOpenModal}
                onHandledModal={this.handledModal}
            />
        );
    }
}

ForeCastExtendedContainer.propTypes = {
    city: PropTypes.object.isRequired,
    isOpenModal: PropTypes.bool.isRequired,
    onHandledModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ city, isOpenModal }) => ({ city, isOpenModal });

export default connect(
    mapStateToProps,
    null
)(ForeCastExtendedContainer);
