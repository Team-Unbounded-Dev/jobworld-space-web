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

  input {
    outline: none;
    border: 1px solid #4A4A57;
    padding: 10px;
    border-radius: 6px;
    background-color: #3C3C49;
    color: white;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: white;
    }
  }
`

export const LoginButton = styled.button`
  width: 370px;
  height: 45px;
  border-radius: 8px;
  font-weight: 500;
  margin: 5px 0;
  transition: all 0.2s ease;
  background-color: #FFDD00;
  border: 1px solid #CCA800;
  color: #18181C;

  &:hover {
    background-color: #d4b800;
    border-color: #a88f00;
    cursor: pointer;
  }
`

export const OauthButton = styled.button`
  width: 370px;
  height: 45px;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid #ADADAD;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  margin-bottom: 40px;

  &:hover {
    background-color: #e0e0e0;
    border-color: #7a7a7a;
    cursor: pointer;
  }
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

  &:hover {
    cursor: pointer;
  }
`

export const EyeIcon = styled.div`
  color: #ADADAD;
  cursor: pointer;
  margin-left: 325px;
  margin-top: -52px;
  margin-bottom: 30px;
`