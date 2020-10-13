
// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item));
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="tshirt" class="item__thumbnail">
        <span class="item__decription">male, large</span>
    </li>
    `;
}

// main
loadItems()
    .then(items => {
        console.log(items);
        displayItems(items);
        // setEventListeners(items);
    })
    .catch(console.log);
