export interface TextboxProps {
    label: string;
    placeholder: string;
    value: string;
    name: string;
    type: 'text' | 'password' | 'email' | 'number';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}