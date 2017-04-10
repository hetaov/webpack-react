'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    static propTypes = {
        label: PropTypes.string
    };

    render () {
        const {
            label
        } = this.props;

        return (
            <button>
                {label}
            </button>
        )
    }
}

export default Button
