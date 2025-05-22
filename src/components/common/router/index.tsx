import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '@/design/global/global-style';


const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;