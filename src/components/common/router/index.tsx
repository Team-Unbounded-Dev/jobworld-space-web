import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '@/design/global/global-style';
import Login from '@/pages/login';


const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;