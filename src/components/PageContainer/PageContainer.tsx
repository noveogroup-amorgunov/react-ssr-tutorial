import * as React from 'react';
import * as bem from 'b_';
import { Link } from 'react-router-dom';
import { Button, Page } from '..';

type Props = {
    children: React.ReactNode[] | React.ReactNode;
    btn?: {
        to: string;
        text: string;
    };
    mix?: string;
};

const b = bem.with('page');

function PageContainer(props: Props) {
    const { children, btn, mix } = props;
    const cls = `${b('container')} ${mix}`;

    return (
        <div className={cls}>
            {children}
            {btn && (
                <div className={b('container-more')}>
                    <Link to={btn.to}>
                        <Button>{btn.text}</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}

PageContainer.defaultProps = {
    mix: '',
};

export { PageContainer };
