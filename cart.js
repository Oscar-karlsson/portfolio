// Simulated initial cart items (you can replace this with your actual data)
const initialCartItems = [
    {
        title: 'Lighthouse on Hill',
        price: '$19.99',
        imgSrc: 'https://images.unsplash.com/photo-1504389557830-b293439b92d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
        quantity: 1, // Initial quantity for this item
    },
    {
        title: 'Beach at Night',
        price: '$420.69',
        imgSrc: 'https://images.unsplash.com/photo-1647441167595-2db0166db955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        quantity: 1, // Initial quantity for this item
    },
    {
        title: 'Black Metal Bridge',
        price: '$29.99',
        imgSrc: 'https://images.unsplash.com/photo-1587303643465-55484e80e4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80',
        quantity: 1, // Initial quantity for this item
    },
    {
        title: 'Pancakes With Syrup',
        price: '$29.99',
        imgSrc: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
        quantity: 1, // Initial quantity for this item
    },
];

// Function to initialize the cart with the simulated items
function initializeCart() {
    // Clear the existing cart
    document.querySelector('.cart-content').innerHTML = '';

    initialCartItems.forEach(item => {
        addItemToCart(item.title, item.price, item.imgSrc, item.quantity);
    });
    updateTotal();
}

// Call the initialization function when the page loads
document.addEventListener('DOMContentLoaded', initializeCart);

// Rest of your code ...

// Simulated function to add an item to the cart
function addItemToCart(title, price, imgSrc, quantity = 1) {
    const newProduct = { title, price, imgSrc };

    // Check if the product already exists in the cart
    const existingProduct = itemList.find(el => el.title === newProduct.title);

    if (existingProduct) {
        // If it exists, update the quantity
        existingProduct.quantity += quantity;
    } else {
        // If it doesn't exist, add it to the cart
        newProduct.quantity = quantity;
        itemList.push(newProduct);
    }

    // Simulate adding the item to the cart UI
    const newProductElement = createCartProduct(title, price, imgSrc);
    const element = document.createElement('div');
    element.innerHTML = newProductElement;
    const cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);

    // Update the total and cart count
    updateTotal();
}
