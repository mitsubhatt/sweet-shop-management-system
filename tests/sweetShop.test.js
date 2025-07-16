const SweetShop = require('../src/sweetShop');

test('Add a sweet to the shop ', () => {
  
    const shop = new SweetShop();
    shop.addSweet({
        id:1,
        name: 'Kaju Katli',
        category: 'Nut-based',
        price:50,
        quantity:20
    });

    const sweets = shop.viewSweets();
    expect(sweets.length).toBe(1);
    expect(sweets[0].name).toBe('Kaju Katli');
});
