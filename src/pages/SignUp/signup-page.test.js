import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { SignUpPage } from './index';

const LoginComponent = () => {
    return (
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>
    );
};

describe('<SignUpPage />', () => {
    test('Should render signUp form on the screen', () => {
        render(<LoginComponent />);

        const signUpForm = screen.getByRole('form');

        expect(signUpForm).toBeInTheDocument();
    });
});