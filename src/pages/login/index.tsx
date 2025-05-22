import Textbox from '@/components/common/textbox';
import { paths } from '@/constants/paths/paths';
import { useNavigate } from 'react-router-dom';
import * as S from './index.style';
import Logo from '@/assets/logo.svg';

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
                <Textbox
                    label='아이디'
                    placeholder='아이디를 입력해주세요'
                    type='text'
                    value=''
                    onChange={() => {}}
                />
                <Textbox
                    label='비밀번호'
                    placeholder='비밀번호를 입력해주세요'
                    type='password'
                    value=''
                    onChange={() => {}}
                />
                <S.LoginButton>로그인</S.LoginButton>
                <S.Line />
                <S.DividerText>또는 다른 계정으로 로그인</S.DividerText>
                <S.Line />
                <S.SignupRedirectButton>
                    계정이 없다면
                    <span onClick={handleSignupRedirect}> 회원가입 하러 가기</span>
                </S.SignupRedirectButton>
            </S.LoginBox>
        </S.Container>
    );
};

export default Login;