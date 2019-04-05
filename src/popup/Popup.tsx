import * as React from 'react';

import {
    AppProps,
    AppState
} from '../types';

import './Popup.scss';


export default class Popup extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, state: AppState) {
        super(props, state);
    }

    componentDidMount() {
        chrome.runtime.sendMessage({ popupMounted: true });
    }

    render() {
        return (
            <div className="popup">
                Hello, world
            </div>
        )
    }
}
