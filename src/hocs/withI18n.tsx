import * as React from 'react';
import {injectIntl, } from 'react-intl';

import {InputProps} from "../types";


export default function withI18n(WrappedComponent) {
    return injectIntl(function WithI18n(props: InputProps) {
        const {
            intl,
            placeholder,
            ...restProps
        } = props;

        return (
            <WrappedComponent
                placeholder={intl.formatMessage(placeholder)}
                {...restProps}
            />
        )
    });
}
