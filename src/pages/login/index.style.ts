import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #17171C;
`

export const LoginBox = styled.div`
  width: 470px;
  height: 740px;
  border-radius: 30px;
  border: 1px solid #2a2a35;
  background-color: #212128;
  border: 1px solid #262626;
`

export const Logo = styled.div`
  margin: 60px auto 40px;
  display: block;
`

export const LoginButton = styled.button`
  width: 370px;
  height: 45px;
  border-radius: 8px;
  background-color: #FFDD00;
  border: 1px solid #CCA800;
`

export const Line = styled.div`
  color: #AEAEB0;
`

export const DividerText = styled.div`
    color: #AEAEB0;
    font-size: 13px;
`

export const SignupRedirectButton = styled.button`
  color: #AEAEB0;
  background-color: transparent;
  border: none;

  span {
    color: #FFDD00;
  }
`