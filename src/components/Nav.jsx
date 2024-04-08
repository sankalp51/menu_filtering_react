import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { menuActions } from '../redux/menuSlice';
import data from '../data/data.json';


const Nav = () => {
    const dispatch = useDispatch();
    const filterData = (filter) => {
        if (!filter) {
            return data;
        }
        else {
            const filteredData = data.filter(items => items.type === filter);
            return filteredData
        }

    }

    const handleClick = (type) => {
        dispatch(menuActions.fetchData(filterData(type)));
    }
    return (
        <nav className="bg-gray-700 text-white p-4">
            <menu className="flex space-x-4">
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => handleClick()}>
                    All
                </Button>
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => handleClick("breakfast")}>
                    Breakfast
                </Button>
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => handleClick("lunch")}>
                    Lunch
                </Button>
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => handleClick("drink")}>
                    Drinks
                </Button>
            </menu>
        </nav>
    );
};

export default Nav;
