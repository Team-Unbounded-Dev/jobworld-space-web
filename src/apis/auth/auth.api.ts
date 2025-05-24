import axios from 'axios';
import {
    LoginRequest,
    LoginResponse,
    NormalSignupRequest,
    TeacherSignupRequest,
    SignupResponse,
} from '@/types/auth/auth.type';
import { ReissueToken } from '@/types/token/token.type';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const Login = async ( loginData: LoginRequest ): Promise<LoginResponse> => {
    try {
        const { data } = await axios.post<LoginResponse>(`${SERVER_URL}/job-world/signIn`, loginData );
        return data;
    } catch (error) {
        throw new Error("로그인 API 요청 실패");
    };
};

export const NormalSignup = async ( signupData: NormalSignupRequest ): Promise<SignupResponse> => {
    try {
        const { data } = await axios.post<SignupResponse>(`${SERVER_URL}/job-world/signUp/normal`, signupData );
        return data;
    } catch (error) {
        throw new Error("일반 계정 회원가입 API 요청 실패");
    };
};

export const TeacherSignup = async ( signupData: TeacherSignupRequest ): Promise<SignupResponse> => {
    try {
        const { data } = await axios.post<SignupResponse>(`${SERVER_URL}/job-world/signUp/teacher`, signupData );
        return data;
    } catch (error) {
        throw new Error("선생님 계정 회원가입 API 요청 실패");
    };
};

export const Reissue = async ( refreshToekn: string ): Promise<ReissueToken> => {
    try {
        const { data } = await axios.post<ReissueToken>(`${SERVER_URL}/job-world/reissue`, { refreshToekn } );
        return data;
    } catch (error) {
        throw new Error("토큰 재발급 API 요청 실패");
    };
};