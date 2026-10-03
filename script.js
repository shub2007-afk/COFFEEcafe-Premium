let cart = [];


// ADD ITEM TO CART

function addToCart(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    openCart();

}


// UPDATE CART

function updateCart() {

    const cartItems = document.getElementById(
        "cart-items"
    );

    const cartCount = document.getElementById(
        "cart-count"
    );

    const cartTotal = document.getElementById(
        "cart-total"
    );


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartCount.textContent = "0";

        cartTotal.textContent = "₹0";

        return;

    }


    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(
        (item, index) => {

            totalItems += item.quantity;

            totalPrice +=
                item.price *
                item.quantity;


            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ₹${item.price}
                        ×
                        ${item.quantity}
                    </p>

                </div>

                <button
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            `;


            cartItems.appendChild(
                cartItem
            );

        }
    );


    cartCount.textContent =
        totalItems;


    cartTotal.textContent =
        "₹" + totalPrice;

}


// REMOVE ITEM

function removeFromCart(index) {

    cart.splice(
        index,
        1
    );

    updateCart();

}


// OPEN CART

function openCart() {

    const cartSidebar =
        document.getElementById(
            "cart-sidebar"
        );

    cartSidebar.classList.add(
        "open"
    );

}


// CLOSE / TOGGLE CART

function toggleCart() {

    const cartSidebar =
        document.getElementById(
            "cart-sidebar"
        );

    cartSidebar.classList.toggle(
        "open"
    );

}


// FILTER MENU

function filterMenu(category) {

    const cards =
        document.querySelectorAll(
            ".menu-card"
        );


    const buttons =
        document.querySelectorAll(
            ".filter-button"
        );


    buttons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    event.target.classList.add(
        "active"
    );


    cards.forEach(
        card => {

            const cardCategory =
                card.dataset.category;


            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display =
                    "block";

            } else {

                card.style.display =
                    "none";

            }

        }
    );

}


// CHECKOUT

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add something first."
        );

        return;

    }


    alert(
        "Thank you for choosing COFFEEcafe! This is a frontend demo, so online checkout is not connected."
    );

}


// CONTACT MESSAGE

function showMessage() {

    alert(
        "COFFEEcafe is located at 123 Coffee Street, Bandra West, Mumbai."
    );

}
