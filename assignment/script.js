let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(button){

    let product = button.parentElement;

    let name = product.querySelector("h2").innerText;

    let price = product.querySelector("p").innerText.replace("₹","").replace(",","");

    let image = product.querySelector("img").src;

    let found = cart.find(item => item.name === name);

    if(found){
        found.quantity++;
    }
    else{

        cart.push({
            name:name,
            price:Number(price),
            image:image,
            quantity:1
        });

    }

    displayCart();
    saveCart();
    openCart();

}

function displayCart(){

    let cartItems = document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div class="cart-details">

                <h4>${item.name}</h4>

                <p>₹${item.price}</p>

                <div class="quantity">

                    <button onclick="decrease(${index})">-</button>

                    <span>${item.quantity}</span>

                    <button onclick="increase(${index})">+</button>

                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    document.getElementById("totalPrice").innerHTML =
    "Total : ₹" + total;

    document.getElementById("cart-count").innerHTML =
    cart.length;

}
function increase(index){

    cart[index].quantity++;

    displayCart();
    saveCart();

}

function decrease(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }
    else{

        cart.splice(index,1);

    }

    displayCart();
    saveCart();
}

function removeItem(index){

    cart.splice(index,1);

    displayCart();
    saveCart();
}

function openCart(){

    document.getElementById("cartBox").classList.add("active");

}

function closeCart(){

    document.getElementById("cartBox").classList.remove("active");

}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}
displayCart();