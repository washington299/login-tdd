import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LoginPage } from '../pages/Login';
import { SignUpPage } from '../pages/SignUp';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}