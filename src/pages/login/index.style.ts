import styled from "styled-components";

const commonButtonStyle = `
  width: 370px;
  height: 45px;
  border-radius: 8px;
  font-weight: 500;
  margin: 5px 0;
`

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
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: #212128;
  border: 1px solid #262626;
`

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 110px 0 60px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginButton = styled.button`
  ${commonButtonStyle}
  background-color: #FFDD00;
  border: 1px solid #CCA800;
  color: #18181C;
`

export const OauthButton = styled.button`
  ${commonButtonStyle}
  border: 1px solid #ADADAD;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  margin-bottom: 40px;
`

export const Divider = styled.div`
  width: 370px;
  display: flex;
  align-items: center;
  margin: 30px 0;
`

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #3C3C49;
`

export const DividerText = styled.div`
  margin: 0 10px;
  color: #AEAEB0;
  font-size: 13px;
`

export const SignupRedirectButton = styled.button`
  color: #AEAEB0;
  background-color: transparent;
  border: none;
  margin: 10px;

  span {
    color: #FFDD00;
  }
`