const products = [
    { name: 'iphone', price: 60000 }, { name: 'samsung', price: 50000 }, { name: 'dell laptop', price: 40000 }, { name: 'asus laptop', price: 20000 }, { name: 'watch apple', price: 3000 }, { name: 'watch samsung', price: 43000 }
];

function searchProducts(products) {
    for (const product of products) {
        if (product.price < 6000) {
            continue;
        }
        console.log(product);
    }
}

const result = searchProducts(products);
// console.log(result);

