const SweetShop = require('../src/sweetShop');

// OPERATIONS
test('Add a sweet to the shop', () => {
  const shop = new SweetShop();
  shop.addSweet({
    id: 1,
    name: 'Kaju Katli',
    category: 'Nut-Based',
    price: 50,
    quantity: 20
  });

  const sweets = shop.viewSweets();
  expect(sweets.length).toBe(1);
  expect(sweets[0].name).toBe('Kaju Katli');
});

test('Throws error when adding a sweet with a duplicate id', () => {
    const shop = new SweetShop();

    shop.addSweet({id:1, name:'Laddoo',category:'Traditional',price:50, quantity:20});
    expect( () => {
        shop.addSweet({id:1, name:'Sonpapdi',category:'Traditional',price:30, quantity:5});
    }).toThrow('Sweet with this id already exists!');
});

test('Throws error for missing fields', () => {
    const shop = new SweetShop();

    expect( () => {
        shop.addSweet({id:2, name:'Rasgulla'});
    }).toThrow('Missing required field: category');
});

test('Throws error when adding a sweet with a duplicate id ', () => {
    const shop = new SweetShop();

    expect( () => {
        shop.addSweet({id:3, name:'Barfi',category:'Milk-based',price:-50, quantity:15});
    }).toThrow('Price and quantity must be non-negative');
});

test('Delete a sweet from the shop', () => {
    const shop = new SweetShop();
    shop.addSweet({id:1, name:'Gulab Jamun',category:'Milk-based',price:50, quantity:15});

    shop.deleteSweet(1);
    const sweets = shop.viewSweets();
    expect(sweets.length).toBe(0);
});

test('Throws error when trying to delete a non-existent sweet', () => {
  const shop = new SweetShop();

  expect( () => {
    shop.deleteSweet(99);
  }).toThrow('Sweet not found');
});

// SEARCH & SORT FEATURES
test('Search sweets by name, category, and price range', () => {
  const shop = new SweetShop();

  shop.addSweet({ id: 1, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 10 });
  shop.addSweet({ id: 2, name: "Gulab Jamun", category: "Milk-Based", price: 30, quantity: 20 });
  shop.addSweet({ id: 3, name: "Soan Papdi", category: "Flaky", price: 40, quantity: 15 });

  const result = shop.searchSweets({
    name: "gulab",
    category: "Milk-Based",
    minPrice: 25,
    maxPrice: 35
  });

  expect(result.length).toBe(1);
  expect(result[0].name).toBe("Gulab Jamun");
});

test('Returns all sweets when no filters are provided', () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Barfi", category: "Milk-Based", price: 40, quantity: 10 });
  shop.addSweet({ id: 2, name: "Ladoo", category: "Traditional", price: 20, quantity: 15 });

  const result = shop.searchSweets({});
  expect(result.length).toBe(2);
});

test('Sort sweets by price ascending', () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Barfi", category: "Milk-Based", price: 50, quantity: 5 });
  shop.addSweet({ id: 2, name: "Ladoo", category: "Traditional", price: 30, quantity: 10 });
  shop.addSweet({ id: 3, name: "Halwa", category: "Traditional", price: 40, quantity: 15 });

  const sorted = shop.sortSweets("price", "asc");
  expect(sorted[0].price).toBe(30);
  expect(sorted[1].price).toBe(40);
  expect(sorted[2].price).toBe(50);
});

// INVENTORY MANAGEMENT
test('Successfully purchase a sweet and update the quantity ', () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Barfi", category: "Milk-Based", price: 50, quantity: 5 });

  shop.purchaseSweets(1,3);

  const sweets = shop.viewSweets();
  expect(sweets[0].quantity).toBe(2);
});

test('Throws error if trying to purchase more than available stock', () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Barfi", category: "Milk-Based", price: 50, quantity: 5 });

  expect( () => {
    shop.purchaseSweets(1,10);
  }).toThrow('Not enough stock available');
});

test('Throws error if sweet is not found', () => {
  const shop = new SweetShop();

  expect( () => {
    shop.purchaseSweets(99,10);
  }).toThrow('Sweet not found');
});

test('Throws error if trying to purchase more than available stock', () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Barfi", category: "Milk-Based", price: 50, quantity: 5 });

  expect( () => {
    shop.purchaseSweets(1,0);
  }).toThrow('Quantity must be greater than zero');

  expect( () => {
    shop.purchaseSweets(1,-10);
  }).toThrow('Quantity must be greater than zero');
});

