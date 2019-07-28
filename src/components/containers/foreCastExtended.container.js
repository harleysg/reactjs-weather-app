import React from "react";
import PropTypes from "prop-types";
/** @redux */
import { connect } from "react-redux";
import { toggleModal } from "actions";
/** @components */
import ForeCastExtended from "components/Weather/_foreCastExtended";

const ForeCastExtendedContainer = props => {
    const { city, modalStatus } = props;
    const handledModal = stateModal => {
        if (stateModal === false) {
            props.toggleModal(stateModal);
        } else {
            props.toggleModal(true);
        }
    };
    return (
        city && (
            <ForeCastExtended
                city={city}
                isOpen={modalStatus}
                onHandledModal={handledModal}
            />
        )
    );
};

ForeCastExtendedContainer.propTypes = {
    city: PropTypes.object,
    modalStatus: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ modalStatus: state.isOpenModal, city: state.city });
const mapDispatchToProps = dispatch => ({
    toggleModal: buleano => dispatch(toggleModal(buleano))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForeCastExtendedContainer);
