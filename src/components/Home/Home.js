import React, { useContext } from 'react';
import Categories from '../Categories/Categories';
import { CategoryContext } from '../../App';

const Home = () => {
    // const {count} = props;
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>This is Home : {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;