import * as S from './index.style';
import { TextboxProps } from './index.props';

const Textbox = ({ 
    label, 
    placeholder, 
    value, 
    type, 
    onChange 
}: TextboxProps) => {
    return (
        <S.Container>
            <S.Label>{ label }</S.Label>
            <S.Textbox
                type={ type }
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
            />
        </S.Container>
    );
};

export default Textbox;