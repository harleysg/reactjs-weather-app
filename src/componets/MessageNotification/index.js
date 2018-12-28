import React from "react";
import PropTypes from "prop-types";

const MessageNotificacion = ({ msg: {body, type, title} }) => (
    <div className={`c-notification c-notificacion_type-${type}`}>
        <h4>
            {title}
        </h4>
        <div>
            <p>
                {body}
            </p>
        </div>
    </div>
);

MessageNotificacion.propTypes = {
    msg: PropTypes.shape({
        body: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
    })
}

export default MessageNotificacion;