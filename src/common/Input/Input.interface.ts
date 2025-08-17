export interface InputProps{
    label?: string;
    id?: string;
    type?: string;
    name?:string;
    value?:string;
    placeholder?: string;
    istextarea?: boolean;
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
    pattern?:string;
    min?: number;
    max?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>)=>void;
    error?: string;
    children?: React.ReactNode
}