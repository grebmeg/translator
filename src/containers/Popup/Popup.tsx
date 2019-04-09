import * as React from 'react';
import {
    Input,
    Select,
    Button,
    Row,
    Col
} from 'antd';

import cn from '../../libs/cn';
import withI18n from '../../hocs/withI18n';
import {PopupState} from '../../types';
import Translation from '../../components/Translation/Translation';

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
        isLoadingTranslation: false,
        service: 'yandex',
        translation: '',
        textBeTranslated: '',
        initialRender: true
    };

    enableLoader = () => {
        this.setState({
            isLoadingTranslation: true
        });
    };

    disableLoader = () => {
        this.setState({
            isLoadingTranslation: false
        });
    };

    disableInitialRender = () => {
        const {initialRender} = this.state;

        if (initialRender) {
            this.setState({
                initialRender: false
            });
        }
    };

    fetchTranslation = async () => {

        return {};
    };

    getTranslation = async () => {
        this.disableInitialRender();
        this.enableLoader();

        const translation = await this.fetchTranslation();

        this.disableLoader();

        this.setState({
            translation
        })
    };

    changeTextBeTranslated = (e) => {
        const {value} = e.target;

        this.setState({
            textBeTranslated: value
        });
    };

    render() {
        const {
            isLoadingTranslation,
            textBeTranslated,
            service,
            initialRender,
            translation
        } = this.state;

        return (
            <div className={b()}>
                <Row
                    className={b('translate-input')}
                    gutter={24}
                >
                    <Col span={20}>
                        <InputWithI18n
                            addonAfter={selectAfter}
                            placeholder={{
                                id: "popup.value_search-translation-input"
                            }}
                            value={textBeTranslated}
                            onPressEnter={this.getTranslation}
                            onChange={this.changeTextBeTranslated}
                        />
                    </Col>
                    <Col span={4}>
                        <Button
                            type="primary"
                            icon="search"
                            onClick={this.getTranslation}
                        />
                    </Col>
                </Row>
                {
                    !initialRender && (
                        <Translation
                            isLoading={isLoadingTranslation}
                            service={service}
                            translation={translation}
                        />
                    )
                }
            </div>
        )
    }
}
