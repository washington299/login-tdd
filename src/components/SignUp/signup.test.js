import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUp } from './index';

const SignUpComponent = () => {
    return (
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    )
}

describe('<SignUp />', () => {
    test('Should render SignUp title on the screen', () => {
        render(<SignUpComponent />);

        const title = screen.getByRole('heading', { name: /Sign Up/i });

        expect(title).toBeInTheDocument();
    })

    test('Should render form fields on the screen', () => {  
        render(<SignUpComponent />);
        
        const username = screen.getByLabelText(/Username/i);
        const email = screen.getByLabelText(/E-mail/i);
        const password = screen.getByLabelText('Password');
        const confirmPassword = screen.getByLabelText('Confirm password');
        const loginLink = screen.getByRole('link', { name: /Go to login/i });
        
        expect(username).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(confirmPassword).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    });

    test('Should show errors message when form is submit with empty fields', async () => {
        render(<SignUpComponent />);

        const buttonSubmit = screen.getByRole('button', { name: /Sign Up/i });

        userEvent.click(buttonSubmit);

        const usernameErrorMsg = await screen.findByText(/Username is required/i);
        const emailErrorMsg = await screen.findByText(/E-mail is required/i);
        const passwordErrorMsg = await screen.findByText('Password is required');
        const confirmPasswordErrorMsg = await screen.findByText('Confirm password is required');

        expect(usernameErrorMsg).toBeInTheDocument();
        expect(emailErrorMsg).toBeInTheDocument();
        expect(passwordErrorMsg).toBeInTheDocument();
        expect(confirmPasswordErrorMsg).toBeInTheDocument();
    });

    test('Should login link has correct path', async () => {
        render(<SignUpComponent />);

        const signUpLink = screen.getByText(/Go to login/i);

        expect(signUpLink).toHaveAttribute('href', '/');
    })
})