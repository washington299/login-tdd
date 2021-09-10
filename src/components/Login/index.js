import React from 'react';
import { useForm } from 'react-hook-form';

export const Login = ({ onSubmit }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="E-mail" {...register('email', { required: 'E-mail is required' })} />
            {errors.email && <p role="alert">{errors.email.message}</p>}

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
            {errors.password && <p role="alert">{errors.password.message}</p>}

            <input id="remember" type="checkbox" {...register('remember')} />
            <label htmlFor="remember">Remember me</label>

            <button type="submit">Login</button>
        </form>
    )
}