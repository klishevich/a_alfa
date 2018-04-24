'use strict';
import cn1 from 'arui-feather/cn';

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Cat {
    @readonly
    meaw() {
        return `${this.name} says Meaw!`
    }
    constructor(name) {
        this.name = name;
    }
}

// const cat = new Cat('Sima');
// console.log(cat.meaw());
// cat.meaw = () => {};

function Cat2(name) {
    this.name
}

const cat2 = new

// working

import React from 'react';
import { connect } from 'react-redux';
import './scoring-blocking-warning.css';

const Test = (p, c, t) => {
    console.log(this, p, c, t);
    return (
        <div>123</div>
    );
};

export default connect(
    (state, props) => (
        {
            initialValues: { authorizedPersons: state.newOrdersAuthorizedPersons.list[props.id] || [] },
            settings: state.settings,
            products: state.newOrdersProducts.list[props.id] &&
            state.newOrdersProducts.list[props.id].services,
            meta: state.newOrdersAuthorizedPersons.meta[props.id],
            loading: state.newOrdersAuthorizedPersons.meta.loading
        }
    )
)(Test);
