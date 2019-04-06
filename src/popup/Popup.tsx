import * as React from 'react';
import {cn} from '@bem-react/classname';
import {Input} from 'antd';

import withI18n from '../hocs/withI18n';

import './Popup.scss';


const b = cn('popup');

const Search = Input.Search;
const SearchWithI18n = withI18n(Search);


export default class Popup extends React.Component {
    componentDidMount() {
        chrome.runtime.sendMessage({ popupMounted: true });
    }

    findTranslation = (searchText) => {
        console.log('searchText >>> ', searchText);
    };

    render() {
        return (
            <div className={b()}>
                <SearchWithI18n
                    formattedMessage={{
                        id: "popup.value_search-translation-input"
                    }}
                    onSearch={this.findTranslation}
                    enterButton
                />
            </div>
        )
    }
}
