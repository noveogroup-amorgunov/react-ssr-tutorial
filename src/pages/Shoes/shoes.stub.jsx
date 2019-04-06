import React from 'react';

import Rect from '../../components/Rect';

const ShoesStub = () => {
    return (
        <div className="page centering">
            <div className="container shoes-page-stub">
                <Rect height="18px" width="190px" />
                <Rect type="black" height="34px" width="320px" />
                <div style={{ padding: '20px' }}>
                    <Rect height="16px" width="50px" />
                </div>
                <Rect height="200px" width="100%" />
            </div>
        </div>
    );
};

export default ShoesStub;
