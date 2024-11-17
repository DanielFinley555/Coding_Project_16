//Task 4: Create the ProductItem Component

import React from 'react';

//creating ProductItem funtion
function ProductItem({name, price, description}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>price: ${price}</p>
            <p>description: {description}</p>
        </div>
    );
}

export default ProductItem;
