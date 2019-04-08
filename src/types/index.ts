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
    textBeTranslated: string;
    service: string;
    initialRender: boolean;
    translation: any;
}

export interface TranslationProps {
    isLoading: boolean;
    service: string;
    translation: any;
}

export interface TranslationYandexProps {
    translation: any;
}
