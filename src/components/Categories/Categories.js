import React, { useContext, useState } from 'react';
import CategoriDetail from '../CategoriDetail/CategoriDetail';
import { CategoryContext } from '../../App';

const allProducts = [

    {name: 'Lenovo', category:'Laptop'},
    {name: 'Dell', category:'Laptop'},
    {name: 'Sumsung', category:'Mobile'},
    {name: 'Asus', category:'Laptop'},
    {name: 'Nokia', category:'Mobile'},
    {name: 'Iphone', category:'Mobile'},
    {name: 'Canon', category:'Camera'},
    {name: 'Nikkon', category:'Camera'},
    {name: 'Sony', category:'Camera'},
]

const Categories = () => {
    // const {count} = props;
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([])
    return (
        <div>
            <h2>Select your Category : {category}</h2>
            {
                products.map(pd => <CategoriDetail product = {pd}></CategoriDetail>)
            }
        </div>
    );
};

export default Categories;