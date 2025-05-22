import styled from 'styled-components';
import { JobworldColor } from '@/design/color/color';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${ JobworldColor.Background };
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginBox = styled.div`
    width: 470px;
    height: 740px;
    background-color: ${ JobworldColor.Surface };
    border-radius: 30px;
    border: 1px solid #2A2A35;
`

export const Logo = styled.div`
    width: 200px;
    height: auto;
    margin: 60px auto 40px;
    display: block;
`