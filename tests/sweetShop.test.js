const SweetShop = require('../src/sweetShop');

test('Throws an error when adding a sweet with a duplicate id', () => {
  
    const shop = new SweetShop();

    shop.addSweet({id:1, name:'Laddoo',category:'Traditional',price:50, quantity:20});
    expect( () => {
        shop.addSweet({id:1, name:'Sonpapdi',category:'Traditional',price:30, quantity:5});
    }).toThrow('Sweet with this id already exists!');
});

test('Throws an error for missing fields', () => {
  
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

