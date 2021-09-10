import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from './index';

describe('<Login />', () => {
    const fakeFormValues = {
        email: 'teste@teste.com',
        password: '123',
    };

    test('Should render form fields on the screen', () => {
        render(<Login />);
    
        const emailField = screen.getByLabelText(/E-mail/i);
        const passwordField = screen.getByLabelText(/Password/i);
        const checkboxField = screen.getByLabelText(/Remember me/i);
    
        expect(emailField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(checkboxField).toBeInTheDocument();
    });

    test('Should render email field with the correct value', () => {
        render(<Login />);

        const emailField = screen.getByLabelText(/E-mail/);
        userEvent.type(emailField, fakeFormValues.email);

        expect(emailField).toHaveValue('teste@teste.com');
    });

    test('Should render password field with the correct value', () => {
        render(<Login />);

        const passwordField = screen.getByLabelText(/Password/);
        userEvent.type(passwordField, fakeFormValues.password);

        expect(passwordField).toHaveValue('123');
    });

    test('Should mark checkbox as checked when clicked', () => {
        render(<Login />);

        const checkboxField = screen.getByLabelText(/Remember me/i);
        userEvent.click(checkboxField);

        expect(checkboxField).toBeChecked();
    });

    test('Should show an error message when the email field is empty on submit', async () => {
        render(<Login />);

        const button = screen.getByRole('button', { name: 'Login' });
        userEvent.click(button);

        const emailErrorMsg = await screen.findByText(/E-mail is required/i);

        expect(emailErrorMsg).toBeInTheDocument();
    });

    test('Should show an error message when the password field is empty on submit', async () => {
        render(<Login />);

        const button = screen.getByRole('button', { name: 'Login' });
        userEvent.click(button);

        const passwordErrorMsg = await screen.findByText(/Password is required/i);

        expect(passwordErrorMsg).toBeInTheDocument();
    });

    // test('Should call onSubmit when form is submited', () => {
    //     const onSubmit = jest.fn();

    //     render(<Login onSubmit={onSubmit} />);

    //     const emailField = screen.getByLabelText(/E-mail/i);
    //     const passwordField = screen.getByLabelText(/Password/i);
    //     const checkboxField = screen.getByLabelText(/Remember me/i);

    //     userEvent.type(emailField, fakeFormValues.email);
    //     userEvent.type(passwordField, fakeFormValues.password);
    //     userEvent.click(checkboxField);

    //     expect(onSubmit).toHaveBeenCalledTimes(1);
    // })
});