import * as S from './index.style';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import NormalNavbar from '@/components/common/navbar/normal';
import ClassUserNavbar from '@/components/common/navbar/class-user';
import useUserRole from '@/hooks/role/useUserRole';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    const role = useUserRole();

    return (
        <S.Container>
            <Header />
            { role === 'normal' ? <NormalNavbar /> : <ClassUserNavbar /> }
            <S.Content>
                <Outlet />
            </S.Content>
            <Footer />
        </S.Container>
    );
};

export default Layouts;