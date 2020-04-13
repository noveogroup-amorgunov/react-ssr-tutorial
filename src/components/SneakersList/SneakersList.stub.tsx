import * as React from 'react';
import { SneakersStub } from 'components';
import './SneakersList.css';

type Props = {
    count: number;
};

export function SneakersListStub(props: Props) {
    return (
        <div className="sneakers-list">
            {Array(props.count)
                .fill(0)
                .map((_, idx: number) => (
                    <SneakersStub key={idx} />
                ))}
        </div>
    );
}
