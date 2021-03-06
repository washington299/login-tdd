import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from './index';

const LoginComponent = () => {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
};

describe('<Login />', () => {
    const fakeFormValues = {
        email: 'teste@teste.com',
        password: '123',
    };

    test('Should render Login title on the screen', () => {
        render(<LoginComponent />);

        const title = screen.getByRole('heading', { name: /login/i });

        expect(title).toBeInTheDocument();
    });

    test('Should render form fields on the screen', () => {
        render(<LoginComponent />);
    
        const emailField = screen.getByLabelText(/E-mail/i);
        const passwordField = screen.getByLabelText(/Password/i);
        const checkboxField = screen.getByLabelText(/Remember me/i);
        const signupLink = screen.getByText(/Sign Up here/i);
    
        expect(emailField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(checkboxField).toBeInTheDocument();
        expect(signupLink).toBeInTheDocument();
    });

    test('Should show an error message when there are fields empty on submit', async () => {
        render(<LoginComponent />);

        const button = screen.getByRole('button', { name: 'Login' });
        userEvent.click(button);

        const emailErrorMsg = await screen.findByText(/E-mail is required/i);
        const passwordErrorMsg = await screen.findByText(/Password is required/i);

        expect(emailErrorMsg).toBeInTheDocument();
        expect(passwordErrorMsg).toBeInTheDocument();
    });

    test('Should call onSubmit when form is submited', async () => {
        const onSubmit = jest.fn();

        render(
            <BrowserRouter>
                <Login onSubmit={onSubmit} />
            </BrowserRouter>
        );

        const emailField = screen.getByLabelText(/E-mail/i);
        const passwordField = screen.getByLabelText(/Password/i);
        const checkboxField = screen.getByLabelText(/Remember me/i);
        const submitButton = screen.getByRole('button', { name: /Login/i });

        userEvent.type(emailField, fakeFormValues.email);
        userEvent.type(passwordField, fakeFormValues.password);
        userEvent.click(checkboxField);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit).toHaveBeenCalledWith({
                email: 'teste@teste.com',
                password: '123',
                remember: true,
            });
        });
    });

    test('Should signUp link has correct path', async () => {
        render(<LoginComponent />);

        const signUpLink = screen.getByText(/Sign Up here/i);

        expect(signUpLink).toHaveAttribute('href', '/signup');
    });
});