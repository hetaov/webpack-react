'use strict';

import React, {Component, PropTypes} from 'react';
import Option from './Option';

class Question extends Component {
    render () {
        let { title, options } = this.props;
        return (
            <div>
                <h1>{title}?</h1>
                {options.map((obj, index) => {
                    return <Option name={obj.name} value={obj.value} label={obj.label} key={obj.name + index}/>
                })}
            </div>
        )
    }
}

export default Question
