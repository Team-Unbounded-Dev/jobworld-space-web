import * as S from './index.style';
import Logo from '@/assets/logo.svg';

const Login = () => {

    return (
        <S.Container>
            <S.LoginBox>
                <S.Logo>
                    <img src={ Logo } alt="logo" />
                </S.Logo>
            </S.LoginBox>
        </S.Container>
    );
};

export default Login;