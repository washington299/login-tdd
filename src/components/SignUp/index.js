import React from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';

export const SignUp = () => {
    const { register, formState: { errors }, handleSubmit }= useForm();

    return (
        <S.Wrapper onSubmit={handleSubmit(() => {})}>
            <S.Title>SignUp</S.Title>

            <S.Field>
                <S.Label htmlFor="username">Username</S.Label>
                <S.Input id="username" placeholder="Username" {...register('username', { required: 'Username is required' })} />
                {errors.username && <S.Error>{errors.username.message}</S.Error>}
            </S.Field>

            <S.Field>
                <S.Label htmlFor="email">E-mail</S.Label>
                <S.Input id="email" placeholder="E-mail" {...register('email', { required: 'E-mail is required' })} />
                {errors.email && <S.Error>{errors.email.message}</S.Error>}
            </S.Field>

            <S.Field>
                <S.Label htmlFor="password">Password</S.Label>
                <S.Input id="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
                {errors.password && <S.Error>{errors.password.message}</S.Error>}
            </S.Field>

            <S.Field>
                <S.Label htmlFor="confirmPassword">Confirm password</S.Label>
                <S.Input id="confirmPassword" placeholder="Confirm password" {...register('confirmPassword', { required: 'Confirm password is required' })} />
                {errors.confirmPassword && <S.Error>{errors.confirmPassword.message}</S.Error>}
            </S.Field>

            <S.Button type="submit">SignUp</S.Button>
        </S.Wrapper>
    )
}