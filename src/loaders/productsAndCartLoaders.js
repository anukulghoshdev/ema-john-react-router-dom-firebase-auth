// import { getStoredCart } from "../utilities/fakedb";

// export const productsAndCartLoaders = async () => {
//     //get products
//     const productsData = await fetch('products.js');
//     const products = await productsData.json();

//     // get cart
//     const savedCart = getStoredCart();
//     const previousCart = [];
//     for (const id in savedCart) {
//         const addedProduct = products.find(product => product.id === id);
//         if (addedProduct) {
//             const quantity = savedCart[id];
//             addedProduct.quantity = quantity;
//             previousCart.push(addedProduct);
//         }
//     }
//     return {products, previousCart};
// }


import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoaders = async () => {
    // get Products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const savedCart = getStoredCart();
    // console.log(savedCart);
    const initialCart = [];
    
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
}