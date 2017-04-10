'use strict';

import React, {Component} from 'react'
import styles from '../../stylesheets/component/Button.scss'
import ProTypes from 'prop-types';

class Option extends Component {
    render () {
        let {
            name,
            value,
            label
        } = this.props;
        console.log(styles.normal, styles);
        return (
            <div className={styles.normal}>
                <input type="radio" name={name} value={value} />
                { label }
            </div>
        )
    }
}

export default Option;

