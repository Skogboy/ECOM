let carts = document.querySelectorAll('.fa-plus');
const remove = document.getElementById('remove');
const  cartItems = document.getElementById('removeItems');

let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

if(!localStorage.getItem('cartProducts')) {
    localStorage.setItem("cartProducts", "[]");
}


let products = [
    {
        id: 1,
        name: 'Nike Airforce 1',
        tag: 'f1',
        price: 100,
        inCart: 0
    },
    {
        id: 2,
        name: 'Nike Platform',
        tag: 'f2',
        price: 120,
        inCart: 0
    },
    {
        id: 3,
        name: 'Nike Airforce Black',
        tag: 'f3',
        price: 90,
        inCart: 0
    },
    {
        id: 4,
        name: 'Nike AirMax Pro',
        tag: 'f4',
        price: 150,
        inCart: 0
    },
    {
        id: 5,
        name: 'Nike Airforce 1',
        tag: 'f5',
        price: 100,
        inCart: 0
    },
    {
        id: 6, 
        name: 'Nike Purple',
        tag: 'f6',
        price: 20,
        inCart: 0
    },
    {
        id: 7,
        name: 'Air Joran 4',
        tag: 'f7',
        price: 250,
        inCart: 0
    },
    {
        id: 8,
        name: 'Air Jordan 1',
        tag: 'f8',
        price: 250,
        inCart: 0
    },
    {
        id: 9,
        name: 'Nike',
        tag: 'n1',
        price: 15,
        inCart: 0
    },
    {
        id: 10,
        name: 'Nike Platform 2',
        tag: 'n2',
        price: 220,
        inCart: 0
    },
    {
        id: 11,
        name: 'Air Joran Low',
        tag: 'n3',
        price: 210,
        inCart: 0
    },
    {
        id: 12,
        name: 'Nike Blazer',
        tag: 'n4',
        price: 150,
        inCart: 0
    },
    {
        id: 13,
        name: 'Nike Platform',
        tag: 'n5',
        price: 180,
        inCart: 0
    },
    {
        id: 14,
        name: 'Nike SB Retro',
        tag: 'n6',
        price: 120,
        inCart: 0
    },
    {
        id: 15,
        name: 'Nike Blazer Low',
        tag: 'n7',
        price: 150,
        inCart: 0
    },
    {
        id: 16,
        name: 'Nike Platfrom 3',
        tag: 'n8',
        price: 220,
        inCart: 0
    },


]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers (products[i]);
        totalCost(products[i])
    })
}



function onLoadCartNumbers () {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.lg-bag span').textContent = productNumbers;
        
    }
}

function cartNumbers (product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.lg-bag span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.lg-bag span').textContent = 1;
    }
    
    setItems(product);
}

function setItems (product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)
    console.log('My cartItems are', cartItems)

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
         cartItems = {
        [product.tag]: product
        }
    }
   

    localStorage.setItem('productsInCart', JSON.stringify
    (cartItems))
}


function totalCost(product) {
    // console.log('The product price is', product.price)
    let cartCost = localStorage.getItem('totalCost');
   
    console.log('my cartCost is', cartCost)
    console.log(typeof cartCost)

    if(cartCost != null) {
         cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost + product.price)
    }else {
          localStorage.setItem('totalCost', product.price)
    }

  
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost')

    console.log(cartItems);

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div id="cartjs">
            <tbody>
            <tr>
                <td><i id="remove" class="fa-sharp fa-solid fa-x"></i></td>  
                <td style="100%"><img src="/img/products/${item.tag}.jpg"></td>
                <td class="pname">${item.name}</td>
                <td class="pprice">$${item.price}</td>
                <td class="quantity">${item.inCart}</td>
                <td class="total">$${item.inCart * item.price}.00</td>
                <td class='basketTotal">$${cartCost}.00</td>
                
                
            </tr>
            </tbody>
             
            </div>
     
            `
            
        })


        


        productContainer.innerHTML += `
            <td class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Cart Total:
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}.00
                </h4>

        `;
    }
}

if (remove) {
    remove.addEventListener('click', () => {
        removeItems.classList.remove('active');
        console.log('removed item')
    })
}

// function removeItemFromCart(products) {
//     let temp = cartItems.filter(products => products.tag != productsId);
//     localStorage.setItem('cartProducts', JSON.stringify(temp))
// }

// removeItemFromCart(1);
onLoadCartNumbers (); 
displayCart ();
// totalCost();
