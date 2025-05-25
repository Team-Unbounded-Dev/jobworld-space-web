import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token/token.constants";
import { LoginRequest } from "@/types/auth/auth.type";
import { Login } from "@/apis/auth/auth.api";
import { Token } from "@/libs/token/token";
import Toast from "@/libs/toast/toast";
import { paths } from "@/constants/paths/paths";

const useLogin = () => {
    const navigate = useNavigate();

    const [ loginData, setLoginData ] = useState<LoginRequest>({
        nickname: "",
        password: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [ name ]: value,
        }));
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleLogin();
        };
    };

    const handleLogin = async () => {
        const { nickname, password } = loginData;

        if (!loginData.nickname) {
            Toast("아이디를 입력해주세요!", "INFO");
        };

        if (!loginData.password) {
            Toast("비밀번호를 입력해주세요!", "INFO");
        };

        try {
            const data = await Login({ nickname, password });

            Token.setToken(ACCESS_TOKEN, data.accessToken);
            Token.setToken(REFRESH_TOKEN, data.refreshToken);

            Toast("로그인에 성공했습니다!", "SUCCESS");

            navigate(paths.home);
        } catch (error) {
            Toast("로그인에 실패했습니다!", "ERROR");
        };
    };

    return {
        loginData,
        onChange,
        handleLogin,
        onKeyDown,
    };
};

export default useLogin;