import * as S from './index.style';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <S.Container>
            <Header />
            <Navbar />
            <S.Content>
                <Outlet />
            </S.Content>
            <Footer />
        </S.Container>
    );
};

export default Layouts;