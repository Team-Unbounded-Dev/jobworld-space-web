export interface LoginRequest {
    nickname: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export interface NormalSignupRequest {
    email: string;
    password: string;
    name: string;
    nickname: string;
    field: string;
    age: number;
    emailVerificationCode: string;
}

export interface teacherSignupRequest {
    email: string;
    password: string;
    name: string;
    nickname: string;
    school: string;
    emailVerificationCode: string;
}

export interface SignupResponse {
    success: boolean;
}