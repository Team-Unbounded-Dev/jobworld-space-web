import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '@/styles/global-style/global-style';
import { paths } from '@/constants/paths/paths';
import Login from '@/pages/login';


const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path={ paths.login } element={ <Login /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;