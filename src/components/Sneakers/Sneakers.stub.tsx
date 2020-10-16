import * as React from 'react';
import { Rect } from 'components';
import './Sneakers.css';

export function SneakersStub() {
    return (
        <div className="sneakers-stub">
            <Rect height="210px" width="220px" />
            <Rect type="black" height="20px" width="220px" />
            <Rect height="12px" width="220px" />
        </div>
    );
}
