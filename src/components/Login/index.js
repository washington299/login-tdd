import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as GE from '../../styles/globalElements';
import * as S from './styles';

export const Login = ({ onSubmit }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <>
            <S.Wrapper aria-label="form" onSubmit={handleSubmit(values => onSubmit(values))}>
                <GE.Title>Login</GE.Title>

                <GE.Field>
                    <GE.Label htmlFor="email">E-mail</GE.Label>
                    <GE.Input id="email" type="email" placeholder="E-mail" {...register('email', { required: 'E-mail is required' })} />
                    {errors.email && <GE.Error role="alert">{errors.email.message}</GE.Error>}
                </GE.Field>

                <GE.Field>
                    <GE.Label htmlFor="password">Password</GE.Label>
                    <GE.Input id="password" type="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
                    {errors.password && <GE.Error role="alert">{errors.password.message}</GE.Error>}
                </GE.Field>            

                <GE.Field row>
                    <input id="remember" type="checkbox" {...register('remember')} />
                    <GE.Label htmlFor="remember" style={{ marginLeft: 5 }}>Remember me</GE.Label>
                </GE.Field>

                <GE.Button type="submit">Login</GE.Button>

                <Link to="/signup">Sign Up here</Link>
            </S.Wrapper>
        </>
    )
}