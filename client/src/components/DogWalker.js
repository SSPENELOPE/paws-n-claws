import React, { useState } from 'react';
import scheduler from './scheduler';

function Walker(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        eagerness: '',
    });

    console.log(props.Walker);

    const submitUpdate = (value) => {
        props.edit
    }
}
