'use strict';

import React, {Component, PropTypes} from 'react'

class Option extends Component {
    render () {
        let {
            name,
            value,
            label
        } = this.props;
        return (
            <div>
                <input type="radio" name={name} value={value} />
                { label }
            </div>
        )
    }
}

export default Option;

