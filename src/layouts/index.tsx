import* as S from './index.style';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <S.Container>
            <Header />
            <S.Content>
                <Outlet />
            </S.Content>
            <Footer />
        </S.Container>
    );
};

export default Layouts;