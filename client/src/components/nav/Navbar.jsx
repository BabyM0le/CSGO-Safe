// React
import React from 'react';

// Components
import LinkItem from './LinkItem';

// Icons
import HomeIcon from '../../assets/img/home-icon.png';

export default function Navbar() {
    return (
        <nav className="bg-gray-700 text-white rounded-2xl flex justify-between mt-5 mx-10">
            <a href="/" className="flex p-3 my-5 ml-8">
                <h1 className="text-2xl">CSGO Safe</h1>
                <img src={HomeIcon} className="w-8 h-8 ml-2"></img>
            </a>
            <ul className="flex justify-around mr-8">
                <LinkItem icon={HomeIcon} name={'Check Reputation'} />
                <LinkItem name={'Source Code'} />
                <LinkItem name={'Discord Bot'} />
            </ul>
        </nav>
    );
}
