
const menu = {
    breakfast: [
        {
            name: "Biscuits and gravy",
            isVegetarian: false,
            isVegan: false,
            description: "Two biscuits and some gravy!",
            price: 4,
            photo: ""
        },     
        {
            name: "Granola",
            isVegetarian: true,
            isVegan: true,
            description: "Fruit, granola, and yogurt.",
            price: 3,
            photo: ""
        },     
        {
            name: "Breakfast Tacos",
            isVegetarian: false,
            isVegan: false,
            description: "Tacos. In your face!",
            price: 8,
            photo: ""
        },     
        {
            name: "Pancakes",
            isVegetarian: true,
            isVegan: false,
            description: "A stack of yum",
            price: 7,
            photo: ""
        },     
    ],
    lunch: [
        {
            name: "Burger",
            isVegetarian: false,
            isVegan: false,
            description: "The taste of freedom",
            price: 9,
            photo: ""
        },     
        {
            name: "Salad",
            isVegetarian: true,
            isVegan: true,
            description: "The taste of vegetables",
            price: 7,
            photo: ""
        },     
        {
            name: "BLT",
            isVegetarian: false,
            isVegan: false,
            description: "It's like a salad, but it's a sandwich. And there's bacon.",
            price: 7,
            photo: ""
        },     
        {
            name: "Veggie Soup",
            isVegetarian: true,
            isVegan: true,
            description: "Because it's cold outside",
            price: 0,
            photo: ""
        },     
    ],
    dinner: [
        {
            name: "Trout",
            isVegetarian: true,
            isVegan: false,
            description: "So healthy!",
            price: 11,
            photo: ""
        },     
        {
            name: "Steak",
            isVegetarian: false,
            isVegan: false,
            description: "Because meat",
            price: 13,
            photo: ""
        },     
        {
            name: "Veggie Kebabs",
            isVegetarian: true,
            isVegan: true,
            description: "Food on sticks",
            price: 9,
            photo: ""
        },     
        {
            name: "Hummus Plate",
            isVegetarian: true,
            isVegan: true,
            description: "It's like an appetizer, but bigger.",
            price: 8,
            photo: ""
        },     
    ],
    desserts: [
        {
            name: "Ice cream",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for ice cream",
            price: 4,
            photo: ""
        },
        {
            name: "Cheesecake",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for cheesecake",
            price: 5,
            photo: ""

        },
        {
            name: "Torte",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for fancy cake",
            price: 6,
            photo: ""

        }
    ]
};

const ul = document.querySelector('.js-menu');
const mainContent = document.querySelector('.js-main-content');

function getCategories(menuObj) {
    return Object.keys(menuObj);
}

function nameToListItem(arr) {
    arr.forEach(categoryName => {
        const listItem = document.createElement('li');
        listItem.textContent = categoryName;
        listItem.addEventListener("click", (e) => clearAndAppend(e.target.textContent));
        ul.appendChild(listItem);
    });
}


function getItems(categoryName) {
    return menu[categoryName].map(itemObj => itemObj.name);
}

function clearContainer() {
    mainContent.textContent = '';
}

function clearAndAppend(category) {
    clearContainer();
    menu[category].forEach(createCard);
}

function createCard(itemObj) {
    let card = document.createElement('div');
    let name = document.createElement('h2');
    name.textContent = itemObj.name;
    let price = document.createElement('h3');
    price.textContent = itemObj.price;
    card.appendChild(name);
    card.appendChild(price);
    mainContent.appendChild(card);
}

nameToListItem(getCategories(menu));