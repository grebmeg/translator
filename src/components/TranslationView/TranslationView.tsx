import * as React from 'react';

import cn from '../../libs/cn';
import {TranslationYandexProps} from '../../types';

import './TranslationView.scss';


const b = cn('translation-view');


function TranslationView(props: TranslationYandexProps) {
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

export default TranslationView;
