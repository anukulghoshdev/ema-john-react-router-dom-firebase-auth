import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]); // products=[{}, {}, {}, {}...]

    const [cart, setCart ] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {//localStorage theke data niye eshe cart area te show kortese
        const storedCart = getStoredCart();
        //console.log(storedCart['13cbc7ed-a61b-4883-9d42-82d7d8642b86']); // {124e13b9-2d54-4b2f-a74d-a77b362d6ead: 1, 13cbc7ed-a61b-4883-9d42-82d7d8642b86: 1}
        const savedCart = [];
        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            if(addedProduct){
                //console.log(addedProduct);  //  {124e13b9-2d54-4b2f-a74d-a77b362d6ead: 1} {} 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])



    // console.log(products);

    const handleAddToCart = (selectedProduct)=>{ //onclick handle    product = {}...            onClick={()=>handleAddToCart(product)
        // console.log(selectedProduct);

        let newCart = [];

        const exists = cart.find(product=>product.id === selectedProduct.id); // cart thkle obj,  naile undefine
        // console.log(exists);
        
        if(!exists){
            selectedProduct.quantity = 1;   //jodi ager theke na thake tahole quantity 1  hobe
            newCart = [...cart, selectedProduct];
        }
        else{ // jodi thake
            const rest = cart.filter(product=>product.id !==selectedProduct.id) //jodi ager theke thake tahole quantity 1 jog hobe
            console.log(rest);
            exists.quantity = exists.quantity+1;
            newCart = [...rest, exists]
        }

        // cart.push(product) // do not do this
        // const newCart = [...cart, selectedProduct];
        
        setCart(newCart);
        addToDb(selectedProduct.id)
    }



    return (
        <div className='shopContainer'>

            <div className='products-container'>
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        
                    ></Product>)
                }
            </div>

            <div className='cart-Container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;