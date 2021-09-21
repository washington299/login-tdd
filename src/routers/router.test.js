import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { Router as RouterPage } from './router';

describe('<Router />', () => {
    test('Should render home page correctly', () => {
        const history = createMemoryHistory();

        render(
            <Router history={history}>
                <RouterPage />
            </Router>
        );

        expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    });
})