import React from 'react';

import Rect from '../../components/Rect';
import ShoesStub from '../../components/Shoes/shoes.stub';

const CatalogStub = () => {
    /* eslint-disable react/no-array-index-key */
    return (
        <div className="page centering">
            <div className="container clear">
                <h2><Rect type="black" height="24px" width="190px" /></h2>

                <div className="home-stub">
                    {Array(18).fill().map((_, idx) => <ShoesStub key={idx} />)}
                </div>
            </div>
        </div>
    );
};

export default CatalogStub;
