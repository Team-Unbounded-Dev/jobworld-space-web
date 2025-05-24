import * as S from './index.style';
import { TextboxProps } from './index.props';

const Textbox = ({ label, placeholder, value, type, name, onChange }: TextboxProps) => {
    return (
        <S.Container>
            <S.Label>{ label }</S.Label>
            <S.Textbox
                type={ type }
                placeholder={ placeholder }
                name={ name }
                value={ value }
                onChange={ onChange }
            />
        </S.Container>
    );
};

export default Textbox;