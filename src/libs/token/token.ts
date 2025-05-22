import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token/token.constants";

export const Token = {
    getToken: (key: string): string | null => {
        return sessionStorage.getItem(key);
    },

    setToken: (key: string, value: string): void => {
        sessionStorage.setItem(key, value);
    },

    clearToken: (): void => {
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem(REFRESH_TOKEN);
    },
};