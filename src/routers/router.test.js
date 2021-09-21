import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { Router as RouterPage } from './router';

const RouterComponent = () => {
    const history = createMemoryHistory();

    return (
        <Router history={history}>
            <RouterPage />
        </Router>
    )
}

describe('<Router />', () => {
    test('Should render home page correctly', () => {
        render(<RouterComponent />);

        expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    });
})