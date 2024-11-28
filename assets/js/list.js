const products = document.querySelectorAll('.dessertItem .btn');
const orderList = document.querySelector('.orderList');
const totalPriceElement = document.querySelector('.totalPrice');

const productsData = [
    {
        name: 'Waffle with Berries',
        category: 'Waffle',
        price: 6.50,
    },
    {
        name: 'Vanilla Bean Crème Brûlée',
        category: 'Crème Brûlée',
        price: 7.00,
    },
    {
        name: 'Macaron Mix of Five',
        category: 'Macaron',
        price: 8.00,
    },
    {
        name: 'Classic Tiramisu',
        category: 'Macaron',
        price: 5.50,
    },
    {
        name: 'Pistachio Baklava',
        category: 'Baklava',
        price: 4.00,
    },
    {
        name: 'Lemon Meringue Pie',
        category: 'Pie',
        price: 5.00,
    },
    {
        name: 'Red Velvet Cake',
        category: 'Cake',
        price: 4.50,
    },
    {
        name: 'Salted Caramel Brownie',
        category: 'Brownie',
        price: 5.50,
    },
    {
        name: 'Vanilla Panna Cotta',
        category: 'Panna Cotta',
        price: 6.50,
    },  
];

let cart = {};


function renderCart() {
    //console.log('tiklandim');
    orderList.innerHTML = '';
    let total = 0;

//bazi yerlerde kodum calismadi yardim aldim 
    for (const [productName, item] of Object.entries(cart)) {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;

        const li = document.createElement('li');
        li.innerHTML = `${item.quantity} x ${productName} - $${itemTotal.toFixed(2)}`;
        orderList.appendChild(li);
    }
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

function addToCart() {
    const productName = this.closest('.dessertItem').querySelector('h4').innerText;
    const product = productsData.find(item => item.name === productName);
    
    if (!product) return;

    if (!cart[product.name]) {
        cart[product.name] = { quantity: 1, price: product.price };
    } else {
        cart[product.name].quantity++;
    }
    renderCart();
}

for (const button of products) {
    button.addEventListener('click', addToCart);
}

renderCart();


