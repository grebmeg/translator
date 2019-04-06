export interface FormattedMessage {
    id: string;
    default?: string;
    description?: string;
}

export interface InputProps {
    intl: any;
    formattedMessage: FormattedMessage;
}
