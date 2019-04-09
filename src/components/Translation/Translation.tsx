import * as React from 'react';
import {Spin} from "antd";

import cn from '../../libs/cn';
import {TranslationProps} from '../../types';

import TranslationView from '../TranslationView/TranslationView';

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
                        <TranslationView
                            translation={translation}
                        />
                    )
            }
        </div>
    );
}

export default Translation;
