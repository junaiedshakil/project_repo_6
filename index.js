
let cart = []; 

const loadPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => {
      displayPlants(json.plants);
      displayCategories(json.plants);
    });
};

loadPlants();



const displayPlants = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  for (let plant of plants) {
    const card = document.createElement("div");
    card.classList.add("border", "p-4", "rounded-lg", "shadow-md", "bg-white");

    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded">

      
      <h2 class="font-bold">${plant.name}</h2>
      

      <p class="text-sm text-gray-600 h-[120px]">${plant.description}</p>
      
      <div class="flex justify-between items-center mt-2">
       
        <button class="category-btn text-sm px-2 py-1 bg-emerald-100 rounded-3xl">
          ${plant.category}
        </button>
        <h2 class="font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</h2>
      </div>
      
      
      <button class="add-cart-btn mt-3 px-4 py-2 bg-green-700 text-white  w-full rounded-3xl">
        Add to Cart
      </button>
    `;
  
    
    card.querySelector(".add-cart-btn").addEventListener("click", () => {
      addToCart(plant);
    });

    
  card.querySelector(".category-btn").addEventListener("click", () => {
  const modal = document.getElementById("my_modal_5");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <h3 class="text-lg md:text-xl font-bold">Category: ${plant.category}</h3>
    <img src="${plant.image}" 
         class="w-full h-40 md:h-52 object-cover rounded my-2" 
         alt="${plant.category}">
    <p class="py-2 text-sm md:text-base">
      This plant belongs to the <b>${plant.category}</b> category.
    </p>
    <p class="font-bold text-green-700 text-base md:text-lg flex items-center gap-1">
      <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}
    </p>
  `;

  modal.showModal();
  
});
cardContainer.appendChild(card);

  }
}
  


const displayCategories = (plants) => {
  const allTree = document.getElementById("all-tree");
  allTree.innerHTML = "";

  const categories = [...new Set(plants.map((plant) => plant.category))];

  
  const allBtn = document.createElement("button");
  allBtn.classList.add("btn", "btn-primary", "m-1", "active-btn");
  allBtn.textContent = "All Trees";
  allBtn.addEventListener("click", () => {
    setActiveButton(allBtn);
    displayPlants(plants);
  });
  allTree.appendChild(allBtn);

  
  for (let category of categories) {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-outline", "btn-primary", "m-1");
    button.textContent = category;

    button.addEventListener("click", () => {
      setActiveButton(button);
      const filtered = plants.filter((plant) => plant.category === category);
      displayPlants(filtered);
    });

    allTree.appendChild(button);
  }
};


const setActiveButton = (activeBtn) => {
  const buttons = document.querySelectorAll("#all-tree button");
  buttons.forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });

  activeBtn.classList.remove("btn-outline");
  activeBtn.classList.add("btn-primary");
};


const addToCart = (plant) => {
  const existing = cart.find((item) => item.id === plant.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...plant, quantity: 1 });
  }
  displayCart();
};


const displayCart = () => {
  const cartContainer = document.getElementById("add-cart");
  cartContainer.innerHTML = `<h1 class="font-bold mb-2">Your Cart</h1>`;

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("flex","justify-between","items-center", "bg-green-50","p-2","rounded","mb-2");

    cartItem.innerHTML = `
      <div>
        <h2 class="font-semibold">${item.name}</h2>
        <p class="text-sm text-gray-600"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${item.price} X ${item.quantity}</p>
      </div>
      <button class=" font-bold"><i class="fa-solid fa-xmark"></i></button>
    `;

  
    cartItem.querySelector("button").addEventListener("click", () => {
      removeFromCart(item.id);
    });

    cartContainer.appendChild(cartItem);
  });

  
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("flex", "justify-between", "font-bold", "mt-2");
  totalDiv.innerHTML = `<span>Total:</span><span><i class="fa-solid fa-bangladeshi-taka-sign"></i>${total}</span>`;
  cartContainer.appendChild(totalDiv);
};


const removeFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  displayCart();
};

