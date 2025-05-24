import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Textbox from '@/components/common/textbox';
import { paths } from '@/constants/paths/paths';
import { Eye, EyeOff } from 'lucide-react';
import * as S from './index.style';
import Logo from '@/assets/logo.svg';
import Goggle from '@/assets/google.svg';
import useLogin from '@/hooks/auth/useLogin';

const Login = () => {
    const navigate = useNavigate();
    const { loginData, onChange, handleLogin } = useLogin();
    const [ showPassword, setShowPassword ] = useState(false);

    const handleSelectRoleRedirect = () => {
        navigate(paths.selectRole);
    };

    return (
        <S.Container>
            <S.LoginBox>
                <S.Logo>
                    <img src={ Logo } alt="logo" />
                </S.Logo>
                <S.InputGroup>
                    <Textbox
                        label='아이디'
                        placeholder='아이디을 입력해주세요'
                        type='text'
                        name='nickname'
                        value={ loginData.nickname }
                        onChange={ onChange }
                    />
                    <Textbox
                        label='비밀번호'
                        placeholder='비밀번호를 입력해주세요'
                        type={ showPassword ? 'text' : 'password' }
                        name='password'
                        value={ loginData.password }
                        onChange={ onChange }
                    />
                    <S.EyeIcon onClick={ () => setShowPassword(!showPassword) }>
                        { showPassword ? <Eye /> : <EyeOff /> }
                    </S.EyeIcon>
                </S.InputGroup>
                <S.LoginButton onClick={ handleLogin }>로그인</S.LoginButton>
                <S.Divider>
                    <S.Line />
                    <S.DividerText>또는 다른 계정으로 로그인</S.DividerText>
                    <S.Line />
                </S.Divider>
                <S.OauthButton>
                    <img src={ Goggle } alt="google" />
                </S.OauthButton>
                <S.SignupRedirectButton>
                    계정이 없다면
                    <span onClick={ handleSelectRoleRedirect }> 회원가입</span>
                </S.SignupRedirectButton>
            </S.LoginBox>
        </S.Container>
    );
};

export default Login;