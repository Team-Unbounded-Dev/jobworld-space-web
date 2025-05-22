import * as S from './index.style';
import Logo from '@/assets/logo.svg';
import { paths } from '@/constants/paths/paths';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSignupRedirect = () => {
        navigate(paths.signup);
    };

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