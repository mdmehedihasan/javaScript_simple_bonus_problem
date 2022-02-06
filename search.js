const products = [
    { name: 'iphone', price: 60000 }, { name: 'samsung', price: 50000 }, { name: 'dell laptop', price: 40000 }, { name: 'asus laptop', price: 20000 }, { name: 'watch apple', price: 3000 }, { name: 'watch samsung', price: 4300 }
];

function searchProducts(products, search) {
    const match = [];
    for (const product of products) {
        if (product.name.includes(search)) {
            match.push(product.name);

        }
    }
    return match;

}

const result = searchProducts(products, 'watch');
console.log(result);