import * as React from 'react';
import {cn} from '@bem-react/classname';
import {Input} from 'antd';

import {
    AppProps,
    AppState
} from '../types';

import i18n from '../constants/i18n';
import './Popup.scss';


const b = cn('popup');
const Search = Input.Search;


export default class Popup extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, state: AppState) {
        super(props, state);
    }

    componentDidMount() {
        chrome.runtime.sendMessage({ popupMounted: true });
    }

    state = {
        search: '',
    };
    
    changeSearch = (search) => {
        console.log('search >>> ', search);
        
        this.setState({
            search
        });
    };

    render() {
        return (
            <div className={b()}>
                <Search
                    placeholder={i18n('value_placeholder-search')}
                    onSearch={this.changeSearch}
                    enterButton
                />
            </div>
        )
    }
}
