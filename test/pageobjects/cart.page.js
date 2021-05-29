const Page = require('./page');




class Cart extends Page {

    get ReturnShop (){ return $('#continue-shopping')}
    get CheckOut (){ return $('#checkout')}


}

module.exports = new Cart();