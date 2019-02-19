'use strict'

import React from 'react';
import { render } from 'react-dom';
import styles from './index.scss';

render(
    <p className={styles.container}>Hello</p>,
    document.getElementById('app')
);