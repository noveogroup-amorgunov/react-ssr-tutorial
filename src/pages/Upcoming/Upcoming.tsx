import * as React from 'react';
import { Page, PageContainer, PageMeta } from 'components';
import './Upcoming.css';

export default function Upcoming() {
    return (
        <Page>
            <PageMeta title="Upcoming..." description="" />
            <PageContainer>
                <h2>Upcoming...</h2>
                <div className="upcoming-banner" />
            </PageContainer>
        </Page>
    );
}
