import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as GE from '../../styles/globalElements';
import * as S from './styles';

export const SignUp = () => {
    const { register, formState: { errors }, handleSubmit }= useForm();

    return (
        <S.Wrapper aria-label="form" onSubmit={handleSubmit(() => {})}>
            <GE.Title>Sign Up</GE.Title>

            <GE.Field>
                <GE.Label htmlFor="username">Username</GE.Label>
                <GE.Input id="username" placeholder="Username" {...register('username', { required: 'Username is required' })} />
                {errors.username && <GE.Error>{errors.username.message}</GE.Error>}
            </GE.Field>

            <GE.Field>
                <GE.Label htmlFor="email">E-mail</GE.Label>
                <GE.Input id="email" placeholder="E-mail" {...register('email', { required: 'E-mail is required' })} />
                {errors.email && <GE.Error>{errors.email.message}</GE.Error>}
            </GE.Field>

            <GE.Field>
                <GE.Label htmlFor="password">Password</GE.Label>
                <GE.Input id="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
                {errors.password && <GE.Error>{errors.password.message}</GE.Error>}
            </GE.Field>

            <GE.Field>
                <GE.Label htmlFor="confirmPassword">Confirm password</GE.Label>
                <GE.Input id="confirmPassword" placeholder="Confirm password" {...register('confirmPassword', { required: 'Confirm password is required' })} />
                {errors.confirmPassword && <GE.Error>{errors.confirmPassword.message}</GE.Error>}
            </GE.Field>

            <GE.Button type="submit">Sign Up</GE.Button>

            <Link to="/">Go to login</Link>
        </S.Wrapper>
    )
}