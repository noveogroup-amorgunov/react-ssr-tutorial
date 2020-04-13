import * as React from 'react';
import * as bem from 'b_';
import { Sneakers } from '../Sneakers/Sneakers';
import { Sneakers as SneakersType } from '../../types';

import './SneakersList.css';

const b = bem.with('sneakers-list');

type Props = {
    items: SneakersType[];
};

export function SneakersList(props: Props) {
    const { items } = props;

    return (
        <div className={b()}>
            {items.map(sneakers => (
                <Sneakers key={sneakers.slug} {...sneakers} />
            ))}
        </div>
    );
}
