import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginPage } from './index';

const LoginComponent = () => {
    return (
        <BrowserRouter>
            <LoginPage />
        </BrowserRouter>
    );
};

describe('<LoginPage />', () => {


    test('Should render login form on the screen', () => {
        render(<LoginComponent />);

        const loginForm = screen.getByRole('form');

        expect(loginForm).toBeInTheDocument();
    });

    test('Should alert when submit login form', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();

        render(<LoginComponent />);

        const emailField = screen.getByLabelText(/E-mail/i);
        const passwordField = screen.getByLabelText(/Password/i);
        const checkboxField = screen.getByLabelText(/Remember me/i);
        const submitButton = screen.getByRole('button', { name: /Login/i });

        userEvent.type(emailField, 'teste@teste.com');
        userEvent.type(passwordField, '123');
        userEvent.click(checkboxField);
        userEvent.click(submitButton);

        await waitFor(() => expect(alertMock).toHaveBeenCalledTimes(1));
    });
});