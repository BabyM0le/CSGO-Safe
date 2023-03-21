import React from 'react';

import HomeIcon from '../../assets/img/home-icon.png';

export default function LinkItem() {
    return (
        <li className="p-5 m-5 flex rounded-md hover:bg-blue-600 transition-all cursor-pointer">
            <img className="h-8" src={HomeIcon}></img>
            <p className="text-2xl">Check Reputation</p>
        </li>
    );
}
