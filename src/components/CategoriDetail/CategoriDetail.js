import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriDetail = (props) => {
    // const {count} = props;
    // const catarory = useContext(CategoryContext);
    const {name} = props.product
    return (
        <div>
            <h4>This is Categori Details has : {name}</h4>
        </div>
    );
};

export default CategoriDetail;