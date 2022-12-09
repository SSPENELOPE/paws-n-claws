import React from 'react';
import App from '../App'

function Scheduler(props) {
    return (
        <ul className="list-group">
            {props.results.map((result) => (
                <li className="list-group-item" key={result.id}>
                    <img
                     alt={result.title}
                     className="img-fluid"
                     src={result.images.original.url}
                     />
                </li>
            ))}
        </ul>
    );
}