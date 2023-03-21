import React from 'react';

export default function LinkItem(props) {
    return (
        <li className="p-5 m-5 flex rounded-md hover:bg-blue-600 transition-all cursor-pointer">
            <img className="h-8" src={props.icon}></img>
            <p className="text-2xl">{props.name}</p>
        </li>
    );
}
