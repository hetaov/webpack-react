'use strict'

import Animal from './util';
import Button from './components/Button';
import Question from './components/Question';

import React from 'react';
import ReactDOM from 'react-dom';

const hello = () => {
    let animal = new Animal('cat');
    console.log('hello, world, hezimo');
    animal.speak();
};

hello();

let options = [
        {name: "first", value: "123", label: "请你选择我"},
        {name: "first", value: "123", label: "请你选择他"}
    ];

ReactDOM.render(
    <div>
        <Button label={'3'}/>
        <Question title="中文可以说几句" options={options}/>
    </div>,
    document.getElementById('app')
);
