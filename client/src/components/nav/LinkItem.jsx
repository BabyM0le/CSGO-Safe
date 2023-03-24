import React from 'react';

export default function LinkItem(props) {
    return (
        <li className="p-3 my-5 mx-2 flex rounded hover:bg-blue-600 transition-all cursor-pointer">
            <img className="h-8 w-8 mr-2" src={props.icon}></img>
            <p className="text-2xl">{props.name}</p>
        </li>
    );
}
