const Page = require('./page');
const LoginPage = require('../pageobjects/login.page');


class InventoryPageItem extends Page {
  
    get BurgerBtn () { return $('#react-burger-menu-btn') } 
    get AllitemsLink () { return $('#inventory_sidebar_link') }
    get AboutLink () { return $('#about_sidebar_link') }
    get LogoutLink () { return $('#logout_sidebar_link') }
    get ResetLink () { return $('#reset_sidebar_link') }
    get AddbackpacktBtn () { return $('#add-to-cart-sauce-labs-backpack')}
    get CartLink () { return $('.shopping_cart_link') }
    get TwitLink () { return $('.social_twitter a')}
    get FaceLink () { return $('.social_facebook a')}
    get LinkedLink () { return $('.social_linkedin a')}
    get CartBadgeBtn () { return $('.shopping_cart_badge') }
    get RemoveBtn () { return $('#remove-sauce-labs-backpack')}
    get BackBtn (){ return $('#back-to-products')}
    get TitleBackpackLink(){ return $("=Sauce Labs Backpack")}

    
}

module.exports = new InventoryPageItem();