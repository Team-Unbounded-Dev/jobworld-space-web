import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '@/design/global/global-style';
import Layouts from '@/layouts';
import Login from '@/pages/login';
import Explore from '@/pages/explore';
import Browse from '@/pages/browse';


const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<Layouts />}>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/browse" element={<Browse />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;