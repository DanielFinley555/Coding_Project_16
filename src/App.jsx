//Task 1: Set Up the React Environment with Vite
//Complete


//Task 2: Create the App Component
import { useState } from 'react'
import './App.css'
//Was not able to import ProductList without causing an error
import ProductItem from './components/ProductItem';

//Creating add product funtion
function AddProduct() {
  //Using useState to initialize product list
      const [products, setProducts] = useState([
          { id: 1, name: 'Laptop', price: 850, description: 'A portable computer'},
          { id: 2, name: 'TV', price: 400, description: 'electroncic object that can display visuals'},
          { id: 3, name: 'Speaker', price: 125, description: 'To listen to audio out loud'},
          { id: 4, name: 'Phone', price: 400, description: 'mobile mini copmuter that can be used for communication'},
          { id: 5, name: 'Headphones', price: 200, description: 'Placed over your head and ears to listion to audio' },
      ]);
  
          const addProduct = (microphone) => {
              setProducts([...products, microphone]);
          };

          //creating a 6th product that can be added
          const microphone = { id: 6, name: 'Microphone', price: 80, description: 'A device that can record audio'}
          
          //using map to display the products array in the output
          return (
              <div>
                  <h2>Products</h2>
                  <button onClick={() => addProduct(microphone)}>Add New Product</button>
                  <ul>
                      {products.map((product) => (
                          <li key={product.id}>
                            {product.name}, ${product.price}, {product.description}
                          </li>
                        ))}
                      </ul>
                  </div>
              );
          }
  
      export default AddProduct;

      //could not figure out how to had multiple different products. so far
      //Unfortuntly this is as far as I could go, could not figure out any more than this
