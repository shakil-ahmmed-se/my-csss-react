import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    // const {count, setCount} = props;
    const [category, setCount] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is Header : {category}</h1>
            <button onClick={() => setCount('Laptop')}>Increment</button>
            <button onClick={() => setCount('Mobile')}>Increment</button>
            <button onClick={() => setCount('Camera')}>Increment</button>
        </div>
    );
};

export default Header;