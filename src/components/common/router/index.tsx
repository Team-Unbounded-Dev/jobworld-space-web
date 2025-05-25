import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '@/styles/global-style/global-style';
import Login from '@/pages/login';
import SelectRole from '@/pages/singup/select-role';
import Notfound from '@/pages/notfound';
import Home from '@/pages/home';
import Explore from '@/pages/explore';
import TeacherSignup from '@/pages/singup/teacher';
import NormalSignup from '@/pages/singup/normal';

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="select-role" element={ <SelectRole /> } />
                <Route path="/explore" element={ <Explore /> } />
                <Route path='/signup/teacher/*' element={ <TeacherSignup /> } />
                <Route path='/signup/normal/*' element={ <NormalSignup /> } />
                <Route path="*" element={ <Notfound /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;