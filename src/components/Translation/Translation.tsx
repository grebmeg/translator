import * as React from 'react';
import {Spin} from "antd";

import cn from '../../libs/cn';
import {TranslationProps} from '../../types';

import './Translation.scss';


const b = cn('translation');


function Translation(props: TranslationProps) {
    const {isLoading} = props;
    return (
        <div className={b()}>
            {
                isLoading ?
                    (<Spin size="large"/>) :
                    null
            }
        </div>
    );
}

export default Translation;
