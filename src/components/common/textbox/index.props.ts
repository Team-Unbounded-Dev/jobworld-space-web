export interface TextboxProps {
    label: string;
    placeholder: string;
    value: string;
    type: 'text' | 'password' | 'email' | 'number';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}