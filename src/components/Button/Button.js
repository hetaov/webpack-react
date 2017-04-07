'use strict';

import React, {Component, PropTypes} from 'react'

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
