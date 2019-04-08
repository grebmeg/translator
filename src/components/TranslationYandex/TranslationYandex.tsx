import * as React from 'react';

import cn from '../../libs/cn';
import {TranslationYandexProps} from '../../types';

import './TranslationYandex.scss';


const b = cn('translation-yandex');


function TranslationYandex(props: TranslationYandexProps) {
    const {
        translation: {
            text = []
        } = {}
    } = props;

    return (
        <div className={b()}>
            {
                text.map((item) => (
                    <div>
                        <span>
                            {item}
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default TranslationYandex;
