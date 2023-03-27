import React from 'react';

// Components
export default function Search() {
    return (
        <form
            className="h-screen flex items-center justify-center"
            action="POST"
        >
            <input
                className="border-grey-900 border-b-4 text-black focas:border-black focas:cursor-white outline-none mr-4 h-24 w-2/3 pl-5 text-4xl bg-blue-700"
                type={'Text'}
                placeholder="Steam Id"
            ></input>
            <button className="text-black" type="submit">
                <img className="h-12 w-12 mr-2"></img>
            </button>
        </form>
    );
}
