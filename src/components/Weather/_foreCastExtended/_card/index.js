import React from "react";
import PropTypes from "prop-types";
/**@libraries */
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
/**@components */
import CardDataBody from "components/Weather/_card/_body";

const ForeCastCard = ({ weekDay, hour, data }) => (
    <Card>
        <CardHeader
            className="c-location_card-header"
            title={weekDay}
            subheader={`${hour} hs`}
        />
        <CardContent>
            <CardDataBody data={data} />
        </CardContent>
    </Card>
);

ForeCastCard.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number,
    data: PropTypes.object.isRequired
};

export default ForeCastCard;
