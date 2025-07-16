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
}

module.exports = SweetShop;