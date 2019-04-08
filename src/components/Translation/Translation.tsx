import * as React from 'react';
import {Spin} from "antd";

import cn from '../../libs/cn';
import {TranslationProps} from '../../types';

import TranslationYandex from '../TranslationYandex/TranslationYandex';

import './Translation.scss';


const b = cn('translation');


function Translation(props: TranslationProps) {
    const {
        isLoading,
        translation
    } = props;

    return (
        <div className={b()}>
            {
                isLoading ?
                    (<Spin size="large"/>) :
                    (
                        <TranslationYandex
                            translation={translation}
                        />
                    )
            }
        </div>
    );
}

export default Translation;
