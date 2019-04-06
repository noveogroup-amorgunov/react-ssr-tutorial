import React from 'react';
import moment from 'moment';

import './upcoming.css';

const Upcoming = () => {
    const text = `${moment().add(10, 'days').format('DD')} days left`;

    return (
        <div className="page centering">
            <div className="container clear">
                <h2>Upcoming...</h2>
                <h3>{text}</h3>
                <div className="upcoming__banner" />
            </div>
        </div>
    );
};

export default Upcoming;
