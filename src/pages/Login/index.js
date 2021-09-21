import { Login } from '../../components/Login';

import * as S from './styles';

export const LoginPage = () => {
    const onSubmit = (values) => {
        alert(JSON.stringify(values))
    };

    return (
        <S.Wrapper>
            <Login onSubmit={onSubmit} />
        </S.Wrapper>
    )
}