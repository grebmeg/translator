import * as React from 'react';
import {
    Input,
    Spin,
    Select,
    Button,
    Row,
    Col
} from 'antd';

import cn from '../../libs/cn';
import withI18n from '../../hocs/withI18n';
import {PopupState} from '../../types';

import './Popup.scss';


const b = cn('popup');
const Option = Select.Option;
const InputWithI18n = withI18n(Input);
const selectAfter = (
    <Select defaultValue="eng">
        <Option value="eng">eng</Option>
        <Option value="ru">ru</Option>
    </Select>
);


export default class Popup extends React.Component<null, PopupState> {
    componentDidMount() {
        chrome.runtime.sendMessage({ popupMounted: true });
    }

    state = {
        isLoadingTranslation: true
    };

    findTranslation = (searchText) => {
        console.log('searchText >>> ', searchText);
    };

    render() {
        const {isLoadingTranslation} = this.state;

        return (
            <div className={b()}>
                <Row gutter={24}>
                    <Col span={20}>
                        <InputWithI18n
                            addonAfter={selectAfter}
                            placeholder={{
                                id: "popup.value_search-translation-input"
                            }}
                        />
                    </Col>
                    <Col span={4}>
                        <Button
                            type="primary"
                            icon="search"
                            onClick={this.findTranslation}
                        />
                    </Col>
                </Row>
                <div className={b('translation')}>
                    {
                        isLoadingTranslation ?
                            (<Spin size="large"/>) :
                            null
                    }
                </div>
            </div>
        )
    }
}
