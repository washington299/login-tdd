import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { SignUpPage } from './index';

const SignUpComponent = () => {
    return (
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>
    );
};

describe('<SignUpPage />', () => {
    test('Should render signUp form on the screen', () => {
        render(<SignUpComponent />);

        const signUpForm = screen.getByRole('form');

        expect(signUpForm).toBeInTheDocument();
    });
});