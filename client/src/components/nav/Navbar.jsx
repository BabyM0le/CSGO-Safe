// React
import React from 'react';

// Components
import LinkItem from './LinkItem';

// Icons
import HomeIcon from '../../assets/img/home-icon.png';

export default function Navbar() {
    return (
        <nav className="bg-gray-700 text-white m-5 rounded-2xl">
            <ul className="flex space-around justify-around">
                <LinkItem icon={HomeIcon} name={'Check Reputation'} />
                <LinkItem name={'Source Code'} />
                <LinkItem name={'Discord Bot'} />
            </ul>
        </nav>
    );
}
