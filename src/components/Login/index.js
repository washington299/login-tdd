import React from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';

export const Login = ({ onSubmit }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <>
            <S.Wrapper aria-label="form" onSubmit={handleSubmit(values => onSubmit(values))}>
                <S.Title>Login</S.Title>

                <S.Field>
                    <S.Label htmlFor="email">E-mail</S.Label>
                    <S.Input id="email" type="email" placeholder="E-mail" {...register('email', { required: 'E-mail is required' })} />
                    {errors.email && <S.Error role="alert">{errors.email.message}</S.Error>}
                </S.Field>

                <S.Field>
                    <S.Label htmlFor="password">Password</S.Label>
                    <S.Input id="password" type="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
                    {errors.password && <S.Error role="alert">{errors.password.message}</S.Error>}
                </S.Field>            

                <S.Field row>
                    <input id="remember" type="checkbox" {...register('remember')} />
                    <S.Label htmlFor="remember" style={{ marginLeft: 5 }}>Remember me</S.Label>
                </S.Field>

                <S.Button type="submit">Login</S.Button>
            </S.Wrapper>
        </>
    )
}