import React from 'react';
// import loadable from '@loadable/component';

import './upcoming.css';

// const Moment = loadable.lib(() => import('moment'));

const Upcoming = () => {
    return (
        <div className="page centering">
            <div className="container clear">
                <h2>Upcoming...</h2>
                {/* <h3><Moment>{({ default: moment }) => { console.log(moment); return `${moment().add(10, 'days').format('DD')} days left`;}}</Moment></h3> */}
                <div className="upcoming__banner" />
            </div>
        </div>
    );
};

export default Upcoming;
