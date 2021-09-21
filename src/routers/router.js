import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LoginPage } from '../pages/Login';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}