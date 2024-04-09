import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { menuActions } from '../redux/menuSlice';



const Nav = () => {
    const dispatch = useDispatch();
    return (
        <nav className="bg-gray-700 text-white p-4">
            <menu className="flex space-x-4">
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => dispatch(menuActions.filterData())}>
                    All
                </Button>
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => dispatch(menuActions.filterData("breakfast"))}>
                    Breakfast
                </Button>
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => dispatch(menuActions.filterData("lunch"))}>
                    Lunch
                </Button>
                <Button
                    className="text-white bg-gray-700 p-4 hover:bg-gray-800 rounded-md"
                    onClick={() => dispatch(menuActions.filterData("drink"))}>
                    Drinks
                </Button>
            </menu>
        </nav>
    );
};

export default Nav;
