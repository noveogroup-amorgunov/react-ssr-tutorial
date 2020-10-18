import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { Page, PageContainer } from 'components';

type Props = {
    code: number;
    children: React.ReactNode;
};

// Component is used for passing http status for server side rendering;
// For example, if page isn't found, client give page with 404 status code
const Status = ({ code, children }: Props) => {
    const render = ({ staticContext }: RouteComponentProps) => {
        if (staticContext) {
            staticContext.statusCode = code;
        }

        return children;
    };

    return <Route render={render} />;
};

export default function NotFoundPage() {
    return (
        <Status code={404}>
            <Page>
                <PageContainer>
                    <h1>Page not found</h1>
                </PageContainer>
            </Page>
        </Status>
    );
}
