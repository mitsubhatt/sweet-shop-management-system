class SweetShop {
    constructor() {
        this.sweets = [];
    }

    addSweet(sweet) {
        
        const requiredFields = ['id','name','category','price','quantity'];

        for(let field of requiredFields){
            if(!(field in sweet)){
                throw new Error(`Missing required field: ${field}`);
            }
        }

        if(this.sweets.some(s => s.id == sweet.id)){
            throw new Error('Sweet with this id already exists!');
        }

        if(sweet.price<0 || sweet.quantity<0){
            throw new Error('Price and quantity must be non-negative');
        }
        this.sweets.push(sweet);
    }

    viewSweets() {
        return this.sweets;
    }

    deleteSweet(id) {
        const index = this.sweets.findIndex(s => s.id == id);
        if(index == -1) throw new Error('Sweet not found');
        this.sweets.splice(index,1);
    }

    searchSweets({ name, category, minPrice, maxPrice }) {
        return this.sweets.filter(sweet => {
            const nameMatch = name ? sweet.name.toLowerCase().includes(name.toLowerCase()) : true;
            const categoryMatch = category ? sweet.category === category : true;
            const priceMatch = (
            (minPrice === undefined || sweet.price >= minPrice) &&
            (maxPrice === undefined || sweet.price <= maxPrice)
            );

            return nameMatch && categoryMatch && priceMatch;
        });
    }
}

module.exports = SweetShop;