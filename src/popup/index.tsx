import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';

import Popup from './Popup';
import messagesEn from '../translations/en';
import messagesRu from '../translations/ru';

const messages = {
    'en': messagesEn,
    'ru': messagesRu
};
const language = navigator.language;


chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    ReactDOM.render(
        (
            <IntlProvider
                locale='en'
                textComponent={React.Fragment}
                messages={messages[language]}
            >
                <Popup/>
            </IntlProvider>
        ),
        document.getElementById('root')
    );
});
