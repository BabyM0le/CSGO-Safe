import React from 'react';

import LinkItem from './LinkItem';

export default function Navbar() {
    return (
        <nav className="bg-gray-700 text-white m-5 rounded-2xl">
            <ul className="flex space-around justify-around">
                <LinkItem />
                <LinkItem />
                <LinkItem />
                <LinkItem />
            </ul>
        </nav>
    );
}
