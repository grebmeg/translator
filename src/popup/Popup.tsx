import * as React from 'react';
import {cn} from '@bem-react/classname';


import {
    AppProps,
    AppState
} from '../types';

import './Popup.scss';


const b = cn('popup');


export default class Popup extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, state: AppState) {
        super(props, state);
    }

    componentDidMount() {
        chrome.runtime.sendMessage({ popupMounted: true });
    }

    render() {
        return (
            <div className={b()}>
                Hello, world
            </div>
        )
    }
}
