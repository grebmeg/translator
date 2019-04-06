export interface FormattedMessage {
    id: string;
    default?: string;
    description?: string;
}

export interface InputProps {
    intl: any;
    placeholder: FormattedMessage;
}

export interface PopupState {
    isLoadingTranslation: boolean;
}
